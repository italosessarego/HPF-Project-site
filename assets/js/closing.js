/* =========================================================================
   meetBean · closing.js
   Shared closing-statement typewriter. Every page's last block is the same
   component — a full-bleed .statement band whose .st-head line types itself
   out on scroll-in: monochrome text, a single sage caret that blinks once
   settled. Markup is the only source of truth:

       <section class="statement reveal">
         <div class="px-6 sm:px-8 lg:px-12">
           <h2 class="st-head">Line one<br><span style="color:var(--muted)">line two</span></h2>
         </div>
       </section>

   The second line (a trailing <span>) is optional and its color is preserved,
   so a page only ever swaps the text. Respects prefers-reduced-motion (leaves
   the static authored line). Load before reveal.js, alongside the page chrome.
   One implementation site-wide — pages must not re-implement the typewriter.
   ========================================================================= */
(function () {
  var head = document.querySelector('.statement .st-head');
  if (!head) return;

  // Read the authored structure: line 1 (text before the <br>) and an optional
  // line 2 carried by a trailing <span> whose styling we keep verbatim.
  var span = head.querySelector('span:not(.st-caret)');
  var line2 = span ? span.textContent : '';
  var open = '';
  if (span) {
    var sty = span.getAttribute('style');
    var cls = span.getAttribute('class');
    open = '<span' + (cls ? ' class="' + cls + '"' : '') + (sty ? ' style="' + sty + '"' : '') + '>';
  }
  var content = head.textContent;                 // line1 + line2 (the <br> adds nothing)
  var line1 = line2 ? content.slice(0, content.length - line2.length) : content;
  var text = line2 ? line1 + '\n' + line2 : line1;
  var CARET = '<span class="st-caret" aria-hidden="true"></span>';

  function draw(n) {
    var s = text.slice(0, n), nl = s.indexOf('\n');
    var body = nl < 0 ? s : s.slice(0, nl) + '<br>' + open + s.slice(nl + 1) + '</span>';
    head.innerHTML = body + CARET;
  }

  // Reduced motion: leave the authored static text exactly as written.
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  draw(0);
  var started = false;
  function run() {
    if (started) return; started = true;
    var i = 0;
    (function step() {
      draw(i);
      if (i < text.length) { var brk = text[i] === '\n'; i++; setTimeout(step, brk ? 320 : 42); }
      else head.classList.add('typed');
    })();
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { run(); io.disconnect(); } });
  }, { threshold: 0.55 });
  io.observe(head);
})();
