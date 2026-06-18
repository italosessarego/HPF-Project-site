/* ============================================================
   meetBean · HBF — Features data + renderers (shared)
   Loaded by: index.html, overview.html
   Renders into element IDs: #phase1-block  #loop  #grows-list  #req-root
   ============================================================ */

// ---------- PHASE 1: the SOP platform (rich block — capability clusters) ----------
const PHASE1 = {
  name:'The SOP Platform', phase:'Phase 1', accent:'#10B981', soft:'#ECFDF5',
  tagline:'A complete Procedures system, live from day one.',
  desc:'Everything Harbor Freight needs to author, govern, distribute and prove its procedures, on a secure multi-site foundation, on any device.',
  clusters:[
    { title:'Author &amp; control procedures', items:['Rich editor with text, tables &amp; media','Full version history with red-line diffs','Scheduled expiry &amp; review dates','Global search across every procedure'] },
    { title:'Govern every change', items:['Recorded approval with timestamp','Multiple acknowledgers per procedure','Acknowledgment-rate tracking','Comment &amp; suggested-changes threads'] },
    { title:'Secure, multi-site foundation', items:['Role- &amp; relationship-based access','Multi-site scoping','Full activity audit log','Mobile &amp; tablet ready'] },
    { title:'Visibility &amp; reporting', items:['Acknowledgment &amp; procedure-status dashboards','Filter by site, job function &amp; date range','Overview reporting at a glance'] },
  ],
  grows:'Any procedure becomes the basis for an observation, training, or certification in one click. A unified data model ties it together, so Phase 1 is also the on-ramp to everything below.',
  growsLabel:'Built to extend',
};

// ---------- PHASES 2–4: growth modules (value-led) ----------
const GROWTH = [
  { name:'Observations', phase:'Phase 2', accent:'#3B82F6', soft:'#EFF6FF',
    tagline:'See whether the work is actually done to standard, and act on the gaps.',
    desc:'Turn any procedure into a field observation. Observers score execution step-by-step on mobile, with coverage and adherence metrics that show exactly where practice drifts from the standard, plus a prioritized queue to follow up.',
    does:['Graduated step scoring with live feedback','Mobile step-by-step capture','Coverage &amp; adherence dashboards','Follow-up + prioritized action queue'],
    grows:'Onboarding automation that assigns the right training and follow-up observation when someone changes role, observations targeted by productivity &amp; quality data, photo &amp; signature capture in the field, automated coaching, and offline use.' },
  { name:'Training', phase:'Phase 3', accent:'#8B5CF6', soft:'#F5F3FF',
    tagline:'Build and prove competency on the procedures that govern the work.',
    desc:'Trainer and trainee complete a co-signed checklist tied directly to the procedure. Supervisors see completion, overdue and time-to-complete at a glance. Training maps to your actual procedures, not a separate silo.',
    does:['Co-signed training delivery','Role-to-procedure mapping','Skill tracking by associate','Progress &amp; supervisor visibility'],
    grows:'Proficiency levels, recency tracking, and a full skill inventory with gap forecasting.' },
  { name:'Certifications', phase:'Phase 4', accent:'#DB2777', soft:'#FDF2F8',
    tagline:'Audit-ready proof that qualifications are current.',
    desc:'Track who is certified on what, tied to the trainings and observations that earned it, so an auditor (or an incident review) gets a clean, current answer.',
    does:['Define certifications from procedures, training &amp; observations','Assign &amp; track completion','See who is certified at a glance','Certification completion reporting'],
    grows:'Validity &amp; expiry tracking with 90 / 30 / 7-day reminders and an approaching-expiry dashboard, per-step evidence upload, renewal / recertification workflows, and prerequisite enforcement.' },
];

const LOOP = ['Procedure','Observation','Training','Certification'];

// ---------- APPENDIX: HFT requirements → where each lands ----------
const REQUIREMENTS = [
  { phase:1, label:'Phase 1', modules:'Platform &amp; Procedures', rows:[
    { r:'Execute &amp; track procedure activities', tier:'must' },
    { r:'Mobile / tablet-friendly, intuitive UX', tier:'must' },
    { r:'Role-based access control', tier:'must' },
    { r:'Secure, scalable platform with data ownership', tier:'must' },
    { r:'Scalability across sites', tier:'must' },
    { r:'Data ownership', tier:'must' },
    { r:'Unified data model across modules', tier:'nice' },
    { r:'Auditability: full activity log', tier:'nice' },
    { r:'Detailed support &amp; SLA structures', tier:'nice' },
    { r:'Centralized procedures as a single source of truth', tier:'must' },
    { r:'Version control with visibility into changes', tier:'must' },
    { r:'Approval workflows with suggested changes and comments', tier:'nice' },
    { r:'Acknowledgement workflows with notifications', tier:'nice' },
  ]},
  { phase:2, label:'Phase 2', modules:'Observations', rows:[
    { r:'Capture observations with context (comments, actions, media)', tier:'must' },
    { r:'Real-time observation tracking', tier:'must' },
    { r:'Follow-up observation tracking', tier:'must' },
    { r:'Dashboards: completion &amp; performance visibility', tier:'must' },
    { r:'Ingest performance data to inform observations', tier:'must', roadmap:true },
    { r:'Historical context during observations', tier:'nice' },
    { r:'Timestamp + notes visibility', tier:'nice' },
    { r:'Observer performance tracking', tier:'nice' },
    { r:'Targeted observations with prioritized action queue', tier:'nice' },
    { r:'Actionable insights &amp; trend analysis', tier:'nice' },
    { r:'Role-based auto-assignment', tier:'nice', roadmap:true },
    { r:'Automated coaching recommendations', tier:'nice', roadmap:true },
    { r:'Auto-update observation forms when a procedure changes', tier:'nice', roadmap:true },
    { r:'Offline cache', tier:'nice', roadmap:true },
  ]},
  { phase:3, label:'Phase 3', modules:'Training', rows:[
    { r:'Role-to-procedure mapping', tier:'must' },
    { r:'Basic skill tracking by associate', tier:'must' },
    { r:'Proficiency levels, recency tracking', tier:'nice', roadmap:true },
    { r:'Knowledge assessments &amp; ability validation', tier:'nice', roadmap:true },
  ]},
  { phase:null, label:'Customizations', modules:'Configured per your environment', rows:[
    { r:'Security &amp; compliance (SOC 2)', tier:'must' },
    { r:'Procedures: custom / multi-step approval flow', tier:'nice' },
  ]},
];

// ---------- renders ----------
function renderBlock(p) {
  const right = p.clusters
    ? `<p class="mono-label mb-4" style="color:var(--faint)">What it includes</p>
       <div class="grid sm:grid-cols-2 gap-x-8 gap-y-5">
         ${p.clusters.map(cl => `
           <div>
             <p class="font-display text-[14px] mb-2" style="color:var(--ink)">${cl.title}</p>
             <ul class="space-y-1.5">
               ${cl.items.map(it => `<li class="flex items-start gap-2.5 text-[13px]" style="color:var(--muted)"><span style="color:var(--ink); margin-top:1px">✓</span><span>${it}</span></li>`).join('')}
             </ul>
           </div>`).join('')}
       </div>`
    : `<p class="mono-label mb-4" style="color:var(--faint)">What it does</p>
       <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
         ${p.does.map(d => `<li class="flex items-start gap-2.5 text-[13.5px]" style="color:var(--ink-2)"><span style="color:var(--ink); margin-top:1px">✓</span><span>${d}</span></li>`).join('')}
       </ul>`;
  return `
    <div class="card overflow-hidden">
      <div class="p-7 md:p-9 md:flex gap-10">
        <div class="md:w-2/5 mb-6 md:mb-0">
          <div class="flex items-center gap-2 mb-4">
            <span class="pill">${p.phase}</span>
          </div>
          <h3 class="text-2xl md:text-[1.75rem] mb-3" style="color:var(--ink)">${p.name}</h3>
          <p class="text-[15px] leading-snug mb-3" style="color:var(--ink-2)">${p.tagline}</p>
          <p class="text-[13.5px] leading-relaxed" style="color:var(--muted)">${p.desc}</p>
        </div>
        <div class="md:w-3/5 md:pl-10 md:border-l pt-6 md:pt-0" style="border-color:var(--line)">
          ${right}
          <div class="mt-6 pt-5" style="border-top:1px solid var(--line)">
            <span class="mono-label" style="color:var(--faint)">${p.growsLabel || 'As you grow'}</span>
            <p class="text-[13px] mt-1.5 leading-relaxed" style="color:var(--muted)">${p.grows}</p>
          </div>
        </div>
      </div>
    </div>`;
}

function renderPlatform() {
  document.getElementById('phase1-block').innerHTML = renderBlock(PHASE1);
}

function renderLoop() {
  document.getElementById('loop').innerHTML = LOOP.map((step, i) => `
    <span class="pill" style="padding:7px 15px; font-size:12.5px">${step}</span>
    ${i < LOOP.length - 1 ? '<span style="color:var(--faint)">→</span>' : ''}`).join('');
}

function renderGrowth() {
  document.getElementById('grows-list').innerHTML = GROWTH.map(renderBlock).join('');
}

// shared phase color ramp — matches the phase accents used above
const PHASE_PALETTE = {
  1: { soft:'#ECFDF5', text:'#047857', border:'#A7F3D0' },
  2: { soft:'#EFF6FF', text:'#1D4ED8', border:'#BFDBFE' },
  3: { soft:'#F5F3FF', text:'#6D28D9', border:'#DDD6FE' },
  4: { soft:'#FDF2F8', text:'#BE185D', border:'#FBCFE8' },
};
function phaseChip(lands) {
  const m = lands.match(/\d/);
  const p = m ? PHASE_PALETTE[m[0]] : null;
  const style = p
    ? `background:${p.soft};color:${p.text};border:1px solid ${p.border}`
    : 'background:#F1F5F9;color:#475569;border:1px solid #E2E8F0';
  return `<span class="chip" style="${style}">${lands}</span>`;
}

function renderRequirements() {
  const TAG = (t) => t === 'must' ? '<span class="tag tag-must">Must</span>'
                   : t === 'nice' ? '<span class="tag tag-nice">Nice</span>'
                   : '<span style="color:var(--faint)">—</span>';

  const groups = REQUIREMENTS.map((g, gi) => {
    const id = `req-${gi}`;
    const num = String(gi + 1).padStart(2, '0');
    const label = g.phase
      ? `<span class="mono-label" style="color:var(--ink)">${g.label}</span>`
      : `<span class="mono-label" style="color:var(--muted)">${g.label}</span>`;
    const heading = `
      <span class="mono-label mr-1" style="color:var(--faint)">${num}</span>
      ${label}
      <span style="color:var(--line-2)">·</span>
      <span class="font-display text-[15px]" style="color:var(--ink)">${g.modules}</span>`;
    const rows = `
      <div class="flex items-center gap-3 px-5 py-2.5 pl-14 mono-label" style="color:var(--faint);border-top:1px solid var(--line);background:var(--paper)">
        <span class="flex-1" style="font-size:10px">Requirement</span>
        <span class="w-24 text-right" style="font-size:10px">Priority</span>
      </div>
      ${g.rows.map(row => `
        <div class="flex items-center gap-3 px-5 py-3 pl-14" style="border-top:1px solid var(--line)">
          <span class="flex-1 text-[13px]" style="color:var(--ink-2)">${row.r}${row.roadmap ? ' <span class="pill align-middle ml-1.5" style="padding:1px 8px;font-size:10px"><span class="ring"></span>Roadmap</span>' : ''}</span>
          <span class="w-24 text-right">${TAG(row.tier)}</span>
        </div>`).join('')}`;
    return `
      <div style="border-top:1px solid var(--line)">
        <button onclick="toggleReq('${id}', this)" class="req-hdr w-full flex items-center gap-3 px-5 py-4 text-left">
          <svg class="reqchev w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0" style="color:var(--faint)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          ${heading}
        </button>
        <div id="${id}" class="reqbody hidden" style="background:var(--surface)">${rows}</div>
      </div>`;
  }).join('');

  document.getElementById('req-root').innerHTML = `
    <div class="card overflow-hidden" style="border-top:0">${groups}</div>
    <div class="mt-7">
      <button onclick="toggleAllReq(this)" class="btn btn-solid">
        <span class="reqall-label">Show full breakdown</span>
        <svg class="reqall-chev w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
    </div>`;
}

function toggleReq(id, btn) {
  document.getElementById(id).classList.toggle('hidden');
  btn.querySelector('.reqchev').classList.toggle('rotate-90');
}
function toggleAllReq(btn) {
  const bodies = [...document.querySelectorAll('.reqbody')];
  const expand = bodies.some(b => b.classList.contains('hidden'));
  bodies.forEach(b => b.classList.toggle('hidden', !expand));
  document.querySelectorAll('.reqchev').forEach(c => c.classList.toggle('rotate-90', expand));
  btn.querySelector('.reqall-label').textContent = expand ? 'Hide breakdown' : 'Show full breakdown';
  btn.querySelector('.reqall-chev').classList.toggle('rotate-180', expand);
}

// entry point — call after the target elements exist in the DOM
function initFeatures() {
  renderPlatform();
  renderLoop();
  renderGrowth();
  renderRequirements();
}
