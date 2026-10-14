// Adds a "Copy" button to each code block. The page works without it.
(function () {
  try {
    document.querySelectorAll('.code').forEach(function (box) {
      var pre = box.querySelector('pre');
      if (!pre || !navigator.clipboard) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code to the clipboard');
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(pre.innerText.replace(/\n$/, '')).then(function () {
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
        }, function () {
          btn.textContent = 'Press Ctrl+C';
        });
      });
      box.classList.add('has-copy');
      box.appendChild(btn);
    });
  } catch (e) { /* ignore: copy buttons are optional */ }
})();
