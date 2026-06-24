/* =========================================================================
   meetBean · reveal.js
   Shared page chrome, loaded by every page after its own scripts:
     1. scroll-reveal — adds .in to any .reveal element as it enters view
     2. nav shadow    — toggles .scrolled on #main-nav past the top
   One implementation site-wide. Pages should not re-implement either.
   ========================================================================= */
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // safety net: reveal anything already near the viewport shortly after load
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 1.5) el.classList.add('in');
    });
  }, 1500);

  var nav = document.getElementById('main-nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
