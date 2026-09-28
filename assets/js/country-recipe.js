/* Print buttons on the country recipe pages. Kept in its own file rather than
   added to recipe.js, which belongs to the catalogue's recipe pages. */
(function () {
  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-print]');
    if (!button) return;
    event.preventDefault();
    window.print();
  });
})();
