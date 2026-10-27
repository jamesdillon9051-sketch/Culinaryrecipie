# Switching on reader feedback

The release ships four PHP endpoints, built into `/feedback/` from `src/server/feedback/`:

| Endpoint | What it does | State when deployed |
| --- | --- | --- |
| `report.php` | Stores a "report a problem" submission | **Off** until the settings file below exists. The report page says so and its button is disabled. |
| `review.php` | Stores a public review as *pending* | **Off** twice over: `reviews_enabled` is false, and recipe pages carry no review form (`src/data/feedback.js` → `reviews: false`). |
| `subscribe.php` | Passes a sign-up to Buttondown | **Off**: no provider is set up, and no sign-up form is built (`newsletter: false`). |
| `moderate.php` | Password-protected page for reading reports and approving reviews | Refuses to run without the settings file. |

`feedback/_lib.php` holds the shared code. `.htaccess` answers 404 for it, and `node tools/private-paths-check.js` checks that rule.

Nothing on the site claims a feature is on while it is off. Every form says "received" only when the server answers 201 after the submission has been written to disk.

## 1. Problem reports (recommended first)

Everything happens in hPanel's File Manager. No password goes into the repository or into a chat.

1. Create the storage folder **outside** `public_html`:
   `domains/weeklydelight.com/private/feedback-data/`
   Set its permissions to 700. The `private/` folder already exists if the contact form has been configured; otherwise create it beside `public_html`.
2. Copy `tools/feedback-config.example.php` to
   `domains/weeklydelight.com/private/feedback-config.php`, then fill in three values:
   - `salt`: any long random string, 32 characters or more. A password manager's generator is fine.
   - `storage_dir`: the absolute path of the folder from step 1. hPanel shows the home directory as `/home/u…/`. The endpoints refuse a folder inside `public_html`.
   - `admin_password_hash`: run the command below on any computer with PHP and paste the line it prints. Keep the single quotes around the value in the PHP file; a `$` inside double quotes is read as a variable and breaks the hash.
     ```
     php -r "echo password_hash('a long passphrase you will remember', PASSWORD_DEFAULT), PHP_EOL;"
     ```
     If PHP is not to hand, hPanel's PHP-enabled File Manager can run a one-off script. Delete that script afterwards.
3. Open `https://weeklydelight.com/feedback/report.php?status=1`. It should answer `{"ok":true,"configured":true}`. If it answers `configured: false`, the settings file was not found or a value is invalid; the PHP error log names which.
4. Open any recipe and follow "Report a problem with this recipe". The notice that reports are switched off should be gone. Send one real report about something you know is right (for example, "test, please ignore"). The page should say it was received and show a reference number.
5. Sign in at `https://weeklydelight.com/feedback/moderate.php` with the passphrase. The test report should be listed under "Problem reports: new". Mark it "not a problem".

### Handling reports

Each report is one JSON file in `feedback-data/reports/`. The moderation page shows it with:

- the recipe
- the content version the reader saw
- the problem type
- the reader's text
- whether they changed the recipe
- their contact details, only if they asked for a reply

Its status moves through **new → triaged → fixed / not-a-problem / duplicate**, and every change is kept in the record's history.

A report that is right is fixed in the recipe's source file, in a commit of its own, with the report id in the commit message. The recipe's `dateModified` then moves, because its content changed. Records older than 365 days are deleted automatically. The About page (`#corrections`) and the privacy page (`#reports`) describe this to readers.

## 2. Public reviews (only when someone will moderate them)

Reviews are a commitment to moderate. Switch them on only when someone will read the queue at least weekly.

1. In the settings file, set `'reviews_enabled' => true`.
2. In `src/data/feedback.js`, set `reviews: true`, then run `npm run build && npm run check`, commit and deploy. Recipe pages then carry the review form.
3. Reviews arrive as **pending**. Approve or reject them on the moderation page.
4. **Publishing approved reviews** is deliberate and manual:
   - Download `moderate.php?export=reviews`. It holds approved reviews only, in the shape of `src/data/reviews.json`.
   - Replace `src/data/reviews.json` with it, build, check, commit and deploy.
   - Only then does a recipe show its reviews and a star rating, and only that exact recipe gets `aggregateRating` in its structured data.
   - `npm run check` fails on rating markup without a published review.

Never type reviews into `reviews.json` by hand, and never import private browser ratings from readers' devices: those stay on the device.

## 3. Newsletter (only with a real Buttondown account)

The weekly plan page works without email. Add sign-ups only when the owner has:

- a Buttondown account (or another provider; `subscribe.php` would need a small change for one),
- decided how often the email goes out (the sign-up text says "the weekly plan email", so the schedule has to be real), and
- set up the sender details Buttondown asks for, including a postal address in the footer where the law requires one.

Then:

1. In Buttondown, go to Settings → API and copy the API key.
2. Add it to the settings file:
   `'newsletter' => ['provider' => 'buttondown', 'api_key' => '…', 'tags' => ['weekly-plan']]`
3. In `src/data/feedback.js`, set `newsletter: true`, then build, check, commit and deploy. The sign-up form appears in the footer block.
4. Sign up once with your own address. Buttondown's double opt-in sends a confirmation email, and the address is subscribed only when it is confirmed.
   - The form never claims more than that.
   - It never sends a campaign.
   - Every Buttondown email carries its own one-click unsubscribe link.

The privacy page's `#newsletter` section already describes this. Check that its wording still fits the provider you chose.

## Switching anything off again

| To switch off | Do this |
| --- | --- |
| Reports | Set `'reports_enabled' => false`, or delete the settings file. The page goes back to its "not switched on" notice at once. |
| Reviews | Set `reviews: false` in `src/data/feedback.js`, rebuild and deploy. Published reviews stay in `reviews.json` until it is changed. |
| Newsletter | Remove the `newsletter` key, set `newsletter: false`, rebuild and deploy. |
