export default function() {
  document
    .getElementsByTagName('body')[0]
    .addEventListener('mousemove', function(n) {
      (t.style.left = n.clientX + 'px'),
        (t.style.top = n.clientY + 'px'),
        (e.style.left = n.clientX + 'px'),
        (e.style.top = n.clientY + 'px'),
        (i.style.left = n.clientX + 'px'),
        (i.style.top = n.clientY + 'px');
    });

  let t = document.getElementById('cursor'),
    e = document.getElementById('cursor2'),
    i = document.getElementById('cursor3');

  function n(t) {
    e.classList.add('hover'), i.classList.add('hover');
  }

  function s(t) {
    e.classList.remove('hover'), i.classList.remove('hover');
  }

  s();

  for (
    let r = document.querySelectorAll('.hover-target'), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener('mouseover', n), t.addEventListener('mouseout', s);
  }
}
//   const drug = document.querySelector('.drag__title');

//   const hover = document.querySelector('.logo__title');

//   hover.onmouseover = function() {
//     drug.style.display = 'block';
//   };

//   hover.onmouseout = function() {
//     drug.style.display = 'none';
//   };

//   hover.onmouseover = function() {
//     drug.classList.add('drug__hover');
//   };
//   hover.onmouseout = function() {
//     drug.classList.remove('drug__hover');
//   };
