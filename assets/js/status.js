/* ============================================================
   meetBean · HBF — Project Tracker data + renderers (shared)
   Loaded by: status.html, overview.html
   Renders into element IDs: #status-stand-root  #status-next-root
   ============================================================ */

// ---------- Where things stand ----------
const STAND = {
  openItems: [
    { label:'Procurement', note:'— Alex sending spec to PMs', status:'prog', statusLabel:'In progress' },
    { label:'Legal review', status:'idle', statusLabel:'Not started' },
    { label:'IT review', status:'idle', statusLabel:'Not started' },
    { label:'Contract signature', status:'idle', statusLabel:'Not started' },
  ],
  referenceDocs: [
    { label:'Comparison with incumbent', href:'https://www.figma.com/deck/h7UERqMWov8u1YZZeESGYz/S-S--Presentation---Copy-?node-id=1-537&t=K16Iiwq6xbuY5HRI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', password:'HFT123' },
    { label:'HFT Functional Requirements', href:'https://docs.google.com/document/d/10HoFwiA8fLzhU6DLme9MxPnArPD9nBhKoKebMTZdOkI/edit?usp=sharing', date:'Sent April 8' },
    { label:'MeetBean Sales Presentation', href:'https://italosessarego.github.io/presentation-2.0/' },
  ],
};

// ---------- What's next ----------
const NEXT = {
  actionItems: [
    { owner:'Alex', text:'Resend the proposal/spec that MeetBean didn&rsquo;t receive' },
    { owner:'Alex', text:'Send updated requirements after finalizing with James and Michael' },
    { owner:'MeetBean', accent:true, text:'Outline Phase 1 scope vs. later phases' },
    { owner:'MeetBean', accent:true, text:'Share incumbent comparison <span style="color:var(--muted)">— see Reference documents</span>' },
  ],
  nextSteps: [
    { text:'Alex: Talk to Ken about pricing', note:'(meeting June 18)' },
    { text:'Dry run', note:'— Friday June 20, 2pm PT' },
    { text:'Demo with HFT team', note:'— Monday June 22' },
    { text:'Align on pricing &amp; phases', note:'(after demo)' },
    { text:'Confirm target timeline' },
  ],
};

// Single source for the summary band's "next milestone" tile (used by overview.html)
const NEXT_MILESTONE = { label:'Dry run', date:'Fri Jun 20' };

// ---------- renders ----------
function statusPill(kind, label) {
  const cls = kind === 'prog' ? 'pill-prog' : 'pill-idle';
  return `<span class="pillst ${cls}">${label}</span>`;
}

function renderStand() {
  const open = STAND.openItems.map(it => `
    <li class="flex items-start gap-3">
      <span class="checkbox"></span>
      <span class="flex-1 text-[14px]" style="color:var(--ink-2)">${it.label}${it.note ? ` <span style="color:var(--muted)">${it.note}</span>` : ''}</span>
      ${statusPill(it.status, it.statusLabel)}
    </li>`).join('');

  const docs = STAND.referenceDocs.map(d => {
    const head = d.plain
      ? `<span class="text-[14px] font-medium" style="color:var(--ink-2)">${d.label}</span>`
      : `<a class="doclink" href="${d.href}" target="_blank" rel="noopener noreferrer">${d.label} <span style="font-size:11px">&#8599;</span></a>`;
    let sub = '';
    if (d.password) sub = `<div class="mt-1.5 flex items-center gap-2 text-[12px]" style="color:var(--muted)"><span>Password</span><span class="codechip">${d.password}</span></div>`;
    else if (d.date && !d.status) sub = `<div class="mt-1 text-[12px]" style="color:var(--muted)">${d.date}</div>`;
    else if (d.status) sub = `<div class="mt-1 flex items-center gap-2 text-[12px]" style="color:var(--muted)">${statusPill(d.status, d.statusLabel)}<span>${d.note || ''}</span></div>`;
    return `<li>${head}${sub}</li>`;
  }).join('');

  document.getElementById('status-stand-root').innerHTML = `
    <div class="card p-7">
      <div class="flex items-baseline justify-between mb-5">
        <h3 class="font-display text-lg">Open items</h3>
        <span class="mono-label" style="color:var(--faint)">${STAND.openItems.length} open</span>
      </div>
      <ul class="space-y-3.5">${open}</ul>
    </div>
    <div class="card p-7">
      <div class="flex items-baseline justify-between mb-5">
        <h3 class="font-display text-lg">Reference documents</h3>
        <span class="mono-label" style="color:var(--faint)">${STAND.referenceDocs.length}</span>
      </div>
      <ul class="space-y-4">${docs}</ul>
    </div>`;
}

function renderNext() {
  const actions = NEXT.actionItems.map(a => `
    <li class="flex items-start gap-3 text-[14px]">
      <span class="mono-label flex-none" style="width:78px; color:${a.accent ? 'var(--accent)' : 'var(--muted)'}; margin-top:2px">${a.owner}</span>
      <span style="color:var(--ink-2)">${a.text}</span>
    </li>`).join('');

  const steps = NEXT.nextSteps.map((s, i) => `
    <li class="flex items-start gap-3.5 text-[14px]">
      <span class="mono-label flex-none" style="color:var(--faint); margin-top:1px">${String(i + 1).padStart(2, '0')}</span>
      <span style="color:var(--ink-2)">${s.text}${s.note ? ` <span style="color:var(--muted)">${s.note}</span>` : ''}</span>
    </li>`).join('');

  document.getElementById('status-next-root').innerHTML = `
    <div class="card p-7">
      <div class="flex items-baseline justify-between mb-5">
        <h3 class="font-display text-lg">Action items</h3>
        <span class="mono-label" style="color:var(--faint)">${NEXT.actionItems.length}</span>
      </div>
      <ul class="space-y-3.5">${actions}</ul>
    </div>
    <div class="card p-7">
      <div class="flex items-baseline justify-between mb-5">
        <h3 class="font-display text-lg">Project next steps</h3>
        <span class="mono-label" style="color:var(--faint)">${NEXT.nextSteps.length}</span>
      </div>
      <ol class="space-y-3.5">${steps}</ol>
    </div>`;
}

function initStatus() {
  renderStand();
  renderNext();
}
