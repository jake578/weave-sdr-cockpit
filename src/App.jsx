import { useState, useRef, useEffect } from 'react';
import { accounts, dailyActions, signalFeed, performanceData } from './mockData';

/* ═══════════════════════════════════════════════════════════════
   SLDS DESIGN TOKENS — Official Lightning Design System values
   Source: lightningdesignsystem.com/design-tokens
   ═══════════════════════════════════════════════════════════════ */
const T = {
  // Brand
  brandPrimary: '#1b96ff',
  brandPrimaryActive: '#0176d3',
  brandAccessible: '#0176d3',
  brandAccessibleActive: '#014486',
  // Backgrounds
  bgDefault: '#f3f3f3',
  bgAlt: '#ffffff',
  bgInverse: '#001639',
  bgInverseLight: '#032d60',
  bgHighlight: '#eef4ff',
  // Text
  textDefault: '#181818',
  textWeak: '#444444',
  textPlaceholder: '#706e6b',
  textLink: '#0176d3',
  textLinkHover: '#014486',
  textInverse: '#ffffff',
  textInverseWeak: 'rgba(255,255,255,.75)',
  // Borders
  borderDefault: '#e5e5e5',
  borderInput: '#c9c9c9',
  // Status
  success: '#2e844a',
  successLight: '#cdefc4',
  error: '#ea001e',
  errorLight: '#fef1ee',
  warning: '#fe9339',
  warningLight: '#fef3e8',
  destructive: '#ba0517',
  // Misc
  shadow: '0 2px 2px 0 rgba(0,0,0,.1)',
  radius: '.25rem',
  radiusPill: '15rem',
};

/* ═══════════════════════════════════════════════════════════════
   SLDS ICONS — Minimal SVG icons matching Salesforce style
   ═══════════════════════════════════════════════════════════════ */
const I = {
  waffle: () => <svg width="21" height="21" viewBox="0 0 21 21" fill="none"><rect x="1" y="1" width="4" height="4" rx="1" fill="#fff"/><rect x="8.5" y="1" width="4" height="4" rx="1" fill="#fff"/><rect x="16" y="1" width="4" height="4" rx="1" fill="#fff"/><rect x="1" y="8.5" width="4" height="4" rx="1" fill="#fff"/><rect x="8.5" y="8.5" width="4" height="4" rx="1" fill="#fff"/><rect x="16" y="8.5" width="4" height="4" rx="1" fill="#fff"/><rect x="1" y="16" width="4" height="4" rx="1" fill="#fff"/><rect x="8.5" y="16" width="4" height="4" rx="1" fill="#fff"/><rect x="16" y="16" width="4" height="4" rx="1" fill="#fff"/></svg>,
  search: (c='#fff') => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  bell: (c='#fff') => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  help: (c='#fff') => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  setup: (c='#fff') => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  lightning: (c='#fff') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  phone: (c=T.success) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  mail: (c=T.textPlaceholder) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  linkedin: (c='#0a66c2') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  check: (c=T.success) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  clock: (c=T.textPlaceholder) => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  zap: (c=T.warning) => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  arrowLeft: (c=T.textLink) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  send: (c='#fff') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  chevDown: (c=T.textPlaceholder) => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  play: (c='#fff') => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  refresh: (c=T.textPlaceholder) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
  globe: (c=T.textPlaceholder) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>,
  briefcase: (c=T.textPlaceholder) => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  database: (c=T.brandPrimary) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  cpu: (c=T.brandPrimary) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  monitor: (c=T.bgInverseLight) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
};

const signalTypeIcon = { website: I.globe, email: I.mail, linkedin: I.linkedin, job: I.briefcase };

const actionCfg = {
  'CALL':        { color: '#0176d3', bg: '#d8edff', icon: I.phone, label: 'CALL' },
  'EMAIL':       { color: '#0176d3', bg: '#d8edff', icon: I.mail, label: 'EMAIL' },
  'LINKEDIN':    { color: '#0a66c2', bg: '#dce9f5', icon: I.linkedin, label: 'LINKEDIN' },
  'FOLLOW-UP':   { color: '#7526c4', bg: '#ece1f9', icon: I.refresh, label: 'FOLLOW-UP' },
  'RESEARCH':    { color: T.textWeak, bg: '#eee', icon: I.search, label: 'RESEARCH' },
  'CREATE DEAL': { color: T.success, bg: T.successLight, icon: I.check, label: 'CREATE OPP' },
};

const priCfg = {
  urgent:   { color: T.destructive, bg: T.errorLight },
  high:     { color: T.warning, bg: T.warningLight },
  standard: { color: T.brandPrimaryActive, bg: '#d8edff' },
};

/* ═══════════════════════════════════════════════════════════════
   SLDS PRIMITIVES
   ═══════════════════════════════════════════════════════════════ */
const BtnBrand = ({ children, onClick, style: s }) => (
  <button onClick={onClick} style={{ background: T.brandPrimaryActive, color: '#fff', border: `1px solid ${T.brandPrimaryActive}`, borderRadius: T.radius, padding: '0 12px', height: 30, fontSize: 13, fontWeight: 400, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, ...s }}>{children}</button>
);
const BtnNeutral = ({ children, onClick, style: s }) => (
  <button onClick={onClick} style={{ background: T.bgAlt, color: T.textDefault, border: `1px solid ${T.borderInput}`, borderRadius: T.radius, padding: '0 12px', height: 30, fontSize: 13, fontWeight: 400, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, ...s }}>{children}</button>
);
const BtnSuccess = ({ children, onClick, style: s }) => (
  <button onClick={onClick} style={{ background: T.success, color: '#fff', border: `1px solid ${T.success}`, borderRadius: T.radius, padding: '0 12px', height: 30, fontSize: 13, fontWeight: 400, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, ...s }}>{children}</button>
);

function Card({ title, children, headerRight, noPad, style: s }) {
  return (
    <article style={{ background: T.bgAlt, borderRadius: T.radius, border: `1px solid ${T.borderDefault}`, boxShadow: T.shadow, ...s }}>
      {title && (
        <div style={{ padding: '12px 16px', borderBottom: `1px solid ${T.borderDefault}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: T.textDefault, margin: 0, lineHeight: 1.3 }}>{title}</h2>
          {headerRight}
        </div>
      )}
      <div style={noPad ? {} : { padding: '12px 16px' }}>{children}</div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   APP SHELL
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  const [view, setView] = useState('queue');
  const [selAcct, setSelAcct] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [completed, setCompleted] = useState(new Set());
  const [toast, setToast] = useState(null);
  const [recent, setRecent] = useState(new Set());

  const acct = accounts.find(a => a.id === selAcct) || null;
  const total = dailyActions.length;
  const done = completed.size;
  const calls = dailyActions.filter(a => a.type === 'CALL').length;
  const emails = dailyActions.filter(a => a.type === 'EMAIL').length;
  const lis = dailyActions.filter(a => a.type === 'LINKEDIN').length;
  const others = dailyActions.filter(a => ['FOLLOW-UP','RESEARCH','CREATE DEAL'].includes(a.type)).length;
  const doneCalls = dailyActions.filter(a => a.type === 'CALL' && completed.has(a.id)).length;
  const doneEmails = dailyActions.filter(a => a.type === 'EMAIL' && completed.has(a.id)).length;

  const goAcct = id => { setSelAcct(id); setView('detail'); };
  const flash = msg => { setToast(msg); setTimeout(() => setToast(null), 3000); };
  const markDone = id => {
    setCompleted(p => { const n = new Set(p); n.add(id); return n; });
    setRecent(p => { const n = new Set(p); n.add(id); return n; });
    setTimeout(() => { setRecent(p => { const n = new Set(p); n.delete(id); return n; }); setExpanded(null); }, 800);
    flash('Action completed');
  };
  const toggle = id => setExpanded(expanded === id ? null : id);

  const navTabs = [
    { id: 'queue', label: 'Action Queue' },
    { id: 'signal', label: 'Signals' },
    { id: 'performance', label: 'Performance' },
    { id: 'howItWorks', label: 'How It Works' },
  ];
  const sfdcTabs = ['Home','Leads','Accounts','Contacts','Opportunities','Reports','Dashboards'];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: T.bgDefault, fontFamily: "'Salesforce Sans', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* ═══ GLOBAL HEADER (slds-global-header) ═══ */}
      <div style={{ height: 44, background: T.bgInverse, display: 'flex', alignItems: 'center', padding: '0 8px 0 0', flexShrink: 0, zIndex: 10 }}>
        {/* Waffle / App Launcher */}
        <div style={{ width: 48, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: .85 }}>
          {I.waffle()}
        </div>
        {/* Salesforce logo text */}
        <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-.3px', marginRight: 16 }}>salesforce</span>

        {/* Global Search */}
        <div style={{ flex: 1, maxWidth: 480, display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,.16)', borderRadius: T.radius, height: 30, padding: '0 10px', gap: 6, marginRight: 'auto' }}>
          {I.search('rgba(255,255,255,.6)')}
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', userSelect: 'none' }}>Search...</span>
        </div>

        {/* Global Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[I.help, I.setup, I.bell].map((Ico, i) => (
            <div key={i} style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: T.radius, cursor: 'pointer', position: 'relative' }}>
              {Ico('rgba(255,255,255,.8)')}
              {i === 2 && <span style={{ position: 'absolute', top: 2, right: 2, width: 14, height: 14, background: T.error, borderRadius: '50%', fontSize: 9, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${T.bgInverse}` }}>5</span>}
            </div>
          ))}
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#7f8de1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', cursor: 'pointer', marginLeft: 6 }}>AR</div>
        </div>
      </div>

      {/* ═══ CONTEXT BAR / NAV (slds-context-bar) ═══ */}
      <div style={{ height: 40, background: T.bgInverseLight, display: 'flex', alignItems: 'stretch', padding: '0 0 0 12px', flexShrink: 0, borderBottom: `3px solid ${T.brandPrimary}` }}>
        {/* App Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingRight: 20, borderRight: '1px solid rgba(255,255,255,.15)', marginRight: 4 }}>
          <div style={{ width: 24, height: 24, borderRadius: T.radius, background: T.brandPrimary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {I.lightning('#fff')}
          </div>
          <span style={{ fontSize: 14, fontWeight: 400, color: '#fff', whiteSpace: 'nowrap' }}>Weave SDR</span>
        </div>

        {/* Nav items */}
        {navTabs.map(t => {
          const active = view === t.id || (view === 'detail' && t.id === 'queue');
          return (
            <div key={t.id} onClick={() => setView(t.id)} style={{
              display: 'flex', alignItems: 'center', padding: '0 16px', cursor: 'pointer',
              borderBottom: active ? '3px solid #fff' : '3px solid transparent',
              marginBottom: -3,
              background: active ? 'rgba(255,255,255,.1)' : 'transparent',
              transition: 'background .15s',
            }}>
              <span style={{ fontSize: 13, color: active ? '#fff' : T.textInverseWeak, fontWeight: active ? 600 : 400 }}>{t.label}</span>
            </div>
          );
        })}

        <div style={{ width: 1, background: 'rgba(255,255,255,.15)', margin: '8px 8px' }}/>

        {sfdcTabs.map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', padding: '0 12px', cursor: 'default' }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,.35)' }}>{t}</span>
          </div>
        ))}
      </div>

      {/* ═══ PAGE CONTENT ═══ */}
      <main style={{ flex: 1, overflow: 'auto', padding: view === 'howItWorks' ? 0 : '12px 24px 24px' }}>
        {view === 'queue' && <QueueView {...{completed,done,total,expanded,toggle,markDone,goAcct,recent,calls,emails,lis,others,doneCalls,doneEmails}} />}
        {view === 'detail' && acct && <AccountDetail account={acct} onBack={() => setView('queue')} goAcct={goAcct} />}
        {view === 'signal' && <SignalFeed goAcct={goAcct} />}
        {view === 'performance' && <Performance {...{done,total,doneCalls,doneEmails}} />}
        {view === 'howItWorks' && <HowItWorks />}
      </main>

      {/* ═══ SLDS TOAST ═══ */}
      {toast && (
        <div style={{ position: 'fixed', top: 90, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, animation: 'slideUp .25s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: T.success, color: '#fff', padding: '0 16px', height: 42, borderRadius: T.radius, fontSize: 14, fontWeight: 400, boxShadow: '0 2px 8px rgba(0,0,0,.3)' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{I.check('#fff')}</div>
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   QUEUE VIEW
   ═══════════════════════════════════════════════════════════════ */
function QueueView({ completed, done, total, expanded, toggle, markDone, goAcct, recent, calls, emails, lis, others, doneCalls, doneEmails }) {
  const pct = total ? (done / total) * 100 : 0;
  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      {/* Page header */}
      <Card style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: T.radius, background: '#7f8de1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {I.lightning('#fff')}
            </div>
            <div>
              <div style={{ fontSize: 11, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px' }}>Daily Action Queue</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: T.textDefault, lineHeight: 1.2 }}>Alex Rivera</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: T.textPlaceholder }}>April 1, 2026</div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: T.successLight, color: T.success, padding: '2px 8px', borderRadius: T.radiusPill, fontSize: 11, fontWeight: 700 }}>
              {I.zap(T.success)} AI Confidence: High
            </span>
          </div>
        </div>
        {/* Progress bar */}
        <div style={{ background: T.borderDefault, borderRadius: T.radiusPill, height: 8, overflow: 'hidden', marginBottom: 8 }}>
          <div style={{ height: '100%', borderRadius: T.radiusPill, background: `linear-gradient(90deg, ${T.brandPrimary}, ${T.brandPrimaryActive})`, width: `${pct}%`, transition: 'width .5s ease' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Badge label="Actions" value={`${done}/${total}`} />
            <Badge label="Calls" value={`${doneCalls}/${calls}`} c={T.brandPrimaryActive} />
            <Badge label="Emails" value={`${doneEmails}/${emails}`} c={T.brandPrimaryActive} />
            <Badge label="LinkedIn" value={`${dailyActions.filter(a=>a.type==='LINKEDIN'&&completed.has(a.id)).length}/${lis}`} c="#0a66c2" />
            <Badge label="Other" value={`${dailyActions.filter(a=>['FOLLOW-UP','RESEARCH','CREATE DEAL'].includes(a.type)&&completed.has(a.id)).length}/${others}`} c="#7526c4" />
          </div>
          <span style={{ fontSize: 12, color: T.textPlaceholder, display: 'flex', alignItems: 'center', gap: 3 }}>{I.clock()} ~2.5 hrs</span>
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {dailyActions.map(a => <ActionRow key={a.id} a={a} isDone={completed.has(a.id)} isExp={expanded===a.id} isRecent={recent.has(a.id)} toggle={()=>toggle(a.id)} markDone={()=>markDone(a.id)} goAcct={()=>goAcct(a.accountId)} />)}
      </div>
    </div>
  );
}

function Badge({ label, value, c }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, background: T.bgAlt, border: `1px solid ${T.borderDefault}`, borderRadius: T.radius, padding: '2px 8px' }}>
      <span style={{ color: T.textPlaceholder }}>{label}:</span>
      <span style={{ color: c || T.textDefault, fontWeight: 700 }}>{value}</span>
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ACTION ROW
   ═══════════════════════════════════════════════════════════════ */
function ActionRow({ a, isDone, isExp, isRecent, toggle, markDone, goAcct }) {
  const cfg = actionCfg[a.type]; const pri = priCfg[a.priority];
  return (
    <div style={{
      background: isDone ? '#f8fcf8' : T.bgAlt,
      borderRadius: T.radius,
      border: `1px solid ${isExp ? T.brandPrimary : isRecent ? T.success : T.borderDefault}`,
      boxShadow: isExp ? `0 0 0 1px ${T.brandPrimary}` : T.shadow,
      opacity: isDone && !isRecent ? .45 : 1,
      overflow: 'hidden', transition: 'all .2s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', gap: 8, cursor: 'pointer' }} onClick={toggle}>
        <div style={{ width: 26, height: 26, borderRadius: T.radius, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, background: isDone ? T.successLight : pri.bg, color: isDone ? T.success : pri.color }}>
          {isDone ? I.check(T.success) : `${a.id}`}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: cfg.bg, color: cfg.color, padding: '1px 7px', borderRadius: T.radius, fontSize: 10, fontWeight: 700, letterSpacing: '.3px', textTransform: 'uppercase', flexShrink: 0 }}>
          {cfg.icon(cfg.color)} {cfg.label}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.textDefault, textDecoration: isDone ? 'line-through' : 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {a.contactName && <span>{a.contactName} — </span>}
            <span onClick={e=>{e.stopPropagation();goAcct()}} style={{ color: T.textLink, cursor: 'pointer', fontWeight: 400 }}>{a.company}</span>
          </div>
          <div style={{ fontSize: 12, color: T.textPlaceholder, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.reason}</div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.textDefault }}>{a.timeSlot}</div>
          <div style={{ fontSize: 11, color: T.textPlaceholder }}>{a.duration}</div>
        </div>
        {!isDone && (
          isExp
            ? <BtnNeutral onClick={e=>{e.stopPropagation();toggle()}} style={{height:26,fontSize:11,padding:'0 8px'}}>Close</BtnNeutral>
            : <BtnBrand onClick={e=>{e.stopPropagation();toggle()}} style={{height:26,fontSize:11,padding:'0 8px'}}>{I.play()} Start</BtnBrand>
        )}
      </div>
      {isExp && !isDone && <ExpandedPanel a={a} markDone={markDone} goAcct={goAcct} />}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPANDED PANELS
   ═══════════════════════════════════════════════════════════════ */
function ExpandedPanel({ a, markDone, goAcct }) {
  if (a.type === 'CALL') return <CallPanel a={a} markDone={markDone} goAcct={goAcct} />;
  if (a.type === 'EMAIL' || a.type === 'FOLLOW-UP') return <EmailPanel a={a} markDone={markDone} />;
  if (a.type === 'LINKEDIN') return <LIPanel a={a} markDone={markDone} />;
  if (a.type === 'RESEARCH') return <ResearchPanel a={a} markDone={markDone} goAcct={goAcct} />;
  if (a.type === 'CREATE DEAL') return <DealPanel a={a} markDone={markDone} />;
  return null;
}

function CallPanel({ a, markDone, goAcct }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${T.borderDefault}`, animation: 'fadeIn .2s ease' }}>
      <div style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 220px', background: T.bgHighlight, borderRadius: T.radius, padding: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.brandPrimaryActive, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 3 }}>Contact</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.textDefault }}>{a.contactName}</div>
            <div style={{ fontSize: 12, color: T.textWeak, marginBottom: 6 }}>{a.contactTitle} — {a.company}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: T.bgAlt, border: `2px solid ${T.success}`, borderRadius: T.radius, padding: '5px 12px', cursor: 'pointer' }}>
              {I.phone(T.success)}
              <span style={{ fontSize: 14, fontWeight: 700, color: T.success, letterSpacing: '.5px' }}>{a.contactPhone}</span>
            </div>
          </div>
          <div style={{ flex: '1 1 260px', background: T.bgDefault, borderRadius: T.radius, padding: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 3 }}>Quick Brief</div>
            <ul style={{ margin: 0, paddingLeft: 14, fontSize: 12, color: T.textWeak, lineHeight: 1.7 }}>
              {a.callBrief?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
        <div style={{ background: T.bgDefault, border: `1px solid ${T.borderDefault}`, borderRadius: T.radius, padding: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.brandPrimaryActive, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 3 }}>Opening Line</div>
          <div style={{ fontSize: 13, color: T.textDefault, lineHeight: 1.6, fontStyle: 'italic' }}>"{a.openingLine}"</div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 220px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 3 }}>Discovery Questions</div>
            {a.discoveryQuestions?.map((q, i) => (
              <div key={i} style={{ fontSize: 12, color: T.textDefault, padding: '4px 8px', marginBottom: 2, background: T.bgAlt, border: `1px solid ${T.borderDefault}`, borderRadius: T.radius, lineHeight: 1.5 }}>{i+1}. {q}</div>
            ))}
          </div>
          <div style={{ flex: '1 1 220px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 3 }}>Objection Handler</div>
            <div style={{ fontSize: 12, color: T.textDefault, padding: '5px 8px', background: T.warningLight, borderRadius: T.radius, lineHeight: 1.5, marginBottom: 6 }}>{a.objectionHandler}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 3 }}>Suggested CTA</div>
            <div style={{ fontSize: 12, color: T.success, fontWeight: 600, padding: '5px 8px', background: T.successLight, borderRadius: T.radius }}>{a.suggestedCTA}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <BtnSuccess onClick={markDone}>{I.check('#fff')} Mark Complete</BtnSuccess>
          <BtnNeutral>Reschedule</BtnNeutral>
          <BtnNeutral onClick={goAcct} style={{color:T.textLink}}>View Account</BtnNeutral>
        </div>
      </div>
    </div>
  );
}

function EmailPanel({ a, markDone }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${T.borderDefault}`, animation: 'fadeIn .2s ease' }}>
      <div style={{ paddingTop: 10 }}>
        <div style={{ background: T.bgAlt, border: `1px solid ${T.borderInput}`, borderRadius: T.radius, overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ padding: '7px 12px', borderBottom: `1px solid ${T.borderDefault}`, fontSize: 12, display: 'flex', gap: 6 }}>
            <span style={{ color: T.textPlaceholder }}>To:</span><span style={{ fontWeight: 500 }}>{a.contactName} &lt;{a.contactEmail}&gt;</span>
          </div>
          <div style={{ padding: '7px 12px', borderBottom: `1px solid ${T.borderDefault}`, fontSize: 12, display: 'flex', gap: 6 }}>
            <span style={{ color: T.textPlaceholder }}>Subject:</span><span style={{ fontWeight: 600 }}>{a.emailSubject}</span>
          </div>
          <div style={{ padding: 12, fontSize: 13, lineHeight: 1.7, whiteSpace: 'pre-line', background: '#fafbfc' }}>{a.emailBody}</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <BtnBrand onClick={markDone}>{I.send()} Send Email</BtnBrand>
          <BtnNeutral>Edit Draft</BtnNeutral>
          <BtnNeutral>Reschedule</BtnNeutral>
        </div>
      </div>
    </div>
  );
}

function LIPanel({ a, markDone }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${T.borderDefault}`, animation: 'fadeIn .2s ease' }}>
      <div style={{ paddingTop: 10 }}>
        <div style={{ background: '#f0f5f8', border: '1px solid #ccd8e4', borderRadius: T.radius, padding: 12, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            {I.linkedin('#0a66c2')}
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0a66c2' }}>LinkedIn Message</span>
          </div>
          <div style={{ background: T.bgAlt, borderRadius: T.radius, padding: 10, fontSize: 13, lineHeight: 1.7, whiteSpace: 'pre-line', border: '1px solid #ccd8e4' }}>{a.linkedinMessage}</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <BtnBrand onClick={markDone} style={{background:'#0a66c2',borderColor:'#0a66c2'}}>{I.check('#fff')} Mark Complete</BtnBrand>
          <BtnNeutral>Open LinkedIn</BtnNeutral>
        </div>
      </div>
    </div>
  );
}

function ResearchPanel({ a, markDone, goAcct }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${T.borderDefault}`, animation: 'fadeIn .2s ease' }}>
      <div style={{ paddingTop: 10 }}>
        <div style={{ background: T.bgDefault, borderRadius: T.radius, padding: 12, marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6 }}>Research Checklist</div>
          {a.researchTasks?.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '4px 0', borderBottom: i < a.researchTasks.length - 1 ? `1px solid ${T.borderDefault}` : 'none' }}>
              <div style={{ width: 16, height: 16, borderRadius: 3, border: `2px solid ${T.borderInput}`, flexShrink: 0, marginTop: 1, cursor: 'pointer' }} />
              <span style={{ fontSize: 12, lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <BtnSuccess onClick={markDone}>{I.check('#fff')} Mark Complete</BtnSuccess>
          <BtnNeutral onClick={goAcct} style={{color:T.textLink}}>View Account</BtnNeutral>
        </div>
      </div>
    </div>
  );
}

function DealPanel({ a, markDone }) {
  const d = a.dealDetails;
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${T.borderDefault}`, animation: 'fadeIn .2s ease' }}>
      <div style={{ paddingTop: 10 }}>
        <div style={{ background: T.successLight, borderRadius: T.radius, padding: 12, marginBottom: 10, border: `1px solid #a3d89c` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.success, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6 }}>Opportunity to Create</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 16px' }}>
            <DF l="Opp Name" v={d.dealName} /><DF l="Amount" v={d.amount} /><DF l="Locations" v={d.seats} /><DF l="Stage" v={d.stage} /><DF l="Close Date" v={d.closeDate} /><DF l="Primary Contact" v={d.primaryContact} />
          </div>
          <div style={{ marginTop: 4 }}><DF l="Notes" v={d.notes} /></div>
        </div>
        <BtnSuccess onClick={markDone}>{I.check('#fff')} Create Opportunity</BtnSuccess>
      </div>
    </div>
  );
}
function DF({ l, v }) {
  return <div><div style={{ fontSize: 10, color: T.textPlaceholder, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.3px' }}>{l}</div><div style={{ fontSize: 13, fontWeight: 500 }}>{v}</div></div>;
}


/* ═══════════════════════════════════════════════════════════════
   ACCOUNT DETAIL
   ═══════════════════════════════════════════════════════════════ */
function AccountDetail({ account: ac, onBack, goAcct }) {
  const acts = dailyActions.filter(a => a.accountId === ac.id);
  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', color: T.textLink, fontSize: 12, cursor: 'pointer', padding: 0, marginBottom: 8 }}>{I.arrowLeft(T.textLink)} Back to Action Queue</button>

      <Card style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: T.radius, background: '#7f8de1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#fff' }}>{ac.company[0]}</div>
            <div>
              <div style={{ fontSize: 11, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px' }}>Account</div>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{ac.company}</h2>
              <div style={{ fontSize: 12, color: T.textPlaceholder }}>{ac.size} &middot; {ac.location} &middot; {ac.industry}</div>
            </div>
          </div>
          <span style={{ background: ac.aiScore >= 85 ? T.errorLight : T.warningLight, color: ac.aiScore >= 85 ? T.destructive : T.warning, padding: '3px 10px', borderRadius: T.radiusPill, fontSize: 13, fontWeight: 700 }}>AI Score: {ac.aiScore}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 8 }}>
          <DF l="Revenue" v={ac.revenue} /><DF l="Current Tools" v={ac.currentTools} /><DF l="Deal Value" v={ac.dealValue} /><DF l="Locations" v={ac.seats} /><DF l="Website" v={ac.website} /><DF l="Founded" v={ac.founded} />
        </div>
      </Card>

      <Card title="Why AI Prioritized This Account" style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: T.textWeak, lineHeight: 1.7, marginBottom: 10 }}>{ac.whyPrioritized}</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <SB l="Fit" v={ac.fitScore} c={T.brandPrimaryActive} /><SB l="Intent" v={ac.intentScore} c={T.warning} /><SB l="Timing" v={ac.timingScore} c="#7526c4" />
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <Card title="Key Contacts">
          {ac.contacts.filter(c => c.name !== 'TBD').map((ct, i) => (
            <div key={i} style={{ padding: '6px 0', borderBottom: i < ac.contacts.length - 1 ? `1px solid ${T.borderDefault}` : 'none' }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{ct.name}</span>
                {ct.isPrimary && <span style={{ fontSize: 9, fontWeight: 700, color: T.brandPrimaryActive, background: T.bgHighlight, padding: '1px 4px', borderRadius: T.radius, textTransform: 'uppercase' }}>Primary</span>}
              </div>
              <div style={{ fontSize: 12, color: T.textPlaceholder }}>{ct.title}</div>
              {ct.phone && <div style={{ fontSize: 12, color: T.success }}>{ct.phone}</div>}
              {ct.email && <div style={{ fontSize: 12, color: T.textPlaceholder }}>{ct.email}</div>}
            </div>
          ))}
        </Card>
        <Card title={`Today's Actions (${acts.length})`}>
          {acts.map((a, i) => { const c = actionCfg[a.type]; return (
            <div key={i} style={{ padding: '5px 0', borderBottom: i < acts.length-1 ? `1px solid ${T.borderDefault}` : 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: c.color, background: c.bg, padding: '1px 5px', borderRadius: T.radius }}>{c.label}</span>
              <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 500 }}>{a.action}</div><div style={{ fontSize: 11, color: T.textPlaceholder }}>{a.timeSlot} &middot; {a.duration}</div></div>
            </div>
          ); })}
          {!acts.length && <div style={{ fontSize: 12, color: T.textPlaceholder, padding: 10 }}>No actions scheduled.</div>}
        </Card>
      </div>

      <Card title="Signal Timeline" style={{ marginBottom: 12 }}>
        {ac.signals.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: i < ac.signals.length-1 ? `1px solid ${T.borderDefault}` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, marginTop: 4, background: s.strength==='hot' ? T.error : T.warning }} />
            <div><div style={{ fontSize: 12, fontWeight: 500 }}>{s.type}</div><div style={{ fontSize: 12, color: T.textWeak, lineHeight: 1.5 }}>{s.detail}</div><div style={{ fontSize: 11, color: T.textPlaceholder }}>{s.time}</div></div>
          </div>
        ))}
      </Card>

      {ac.callScript && (
        <Card title="AI Call Script" style={{ marginBottom: 12 }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.brandPrimaryActive, textTransform: 'uppercase', marginBottom: 2 }}>Opening</div>
            <div style={{ fontSize: 13, fontStyle: 'italic', background: T.bgDefault, padding: 8, borderRadius: T.radius, lineHeight: 1.6 }}>"{ac.callScript.opening}"</div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', marginBottom: 2 }}>Discovery Questions</div>
            {ac.callScript.discoveryQuestions.map((q, i) => <div key={i} style={{ fontSize: 12, padding: '3px 8px', marginBottom: 2, background: T.bgDefault, borderRadius: T.radius, lineHeight: 1.5 }}>{i+1}. {q}</div>)}
          </div>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', marginBottom: 2 }}>Objection Handler</div>
            <div style={{ fontSize: 12, padding: '4px 8px', background: T.warningLight, borderRadius: T.radius, lineHeight: 1.5 }}>{ac.callScript.objectionHandler}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', marginBottom: 2 }}>Suggested CTA</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.success, padding: '4px 8px', background: T.successLight, borderRadius: T.radius }}>{ac.callScript.suggestedCTA}</div>
          </div>
        </Card>
      )}
    </div>
  );
}

function SB({ l, v, c }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}><span style={{ fontSize: 11, color: T.textPlaceholder }}>{l}</span><span style={{ fontSize: 11, fontWeight: 700, color: c }}>{v}</span></div>
      <div style={{ height: 6, background: T.borderDefault, borderRadius: T.radiusPill, overflow: 'hidden' }}><div style={{ height: '100%', width: `${v}%`, background: c, borderRadius: T.radiusPill, transition: 'width .5s' }} /></div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   SIGNAL FEED
   ═══════════════════════════════════════════════════════════════ */
function SignalFeed({ goAcct }) {
  return (
    <div style={{ maxWidth: 920, margin: '0 auto' }}>
      <Card title="Signal Feed" headerRight={<div style={{ display: 'flex', gap: 4 }}><Chip label="All" active /><Chip label="Hot" /><Chip label="Warm" /></div>} noPad>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: T.bgDefault }}>
              <th style={{ padding: '6px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', borderBottom: `1px solid ${T.borderDefault}` }}></th>
              <th style={{ padding: '6px 8px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', borderBottom: `1px solid ${T.borderDefault}` }}>Account</th>
              <th style={{ padding: '6px 8px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', borderBottom: `1px solid ${T.borderDefault}` }}>Signal</th>
              <th style={{ padding: '6px 8px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', borderBottom: `1px solid ${T.borderDefault}` }}>Time</th>
              <th style={{ padding: '6px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textPlaceholder, textTransform: 'uppercase', letterSpacing: '.5px', borderBottom: `1px solid ${T.borderDefault}` }}>Strength</th>
            </tr>
          </thead>
          <tbody>
            {signalFeed.map((s, i) => (
              <tr key={s.id} style={{ borderBottom: `1px solid ${T.borderDefault}`, background: i%2===0 ? T.bgAlt : '#fafaf9' }}>
                <td style={{ padding: '8px 16px', width: 24 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: s.strength==='hot' ? T.error : T.warning }} /></td>
                <td style={{ padding: '8px 8px' }}><span onClick={()=>goAcct(s.accountId)} style={{ color: T.textLink, cursor: 'pointer', fontWeight: 600 }}>{s.account}</span></td>
                <td style={{ padding: '8px 8px', color: T.textWeak, fontSize: 12 }}>{s.action}</td>
                <td style={{ padding: '8px 8px', color: T.textPlaceholder, whiteSpace: 'nowrap', fontSize: 12 }}>{s.time}</td>
                <td style={{ padding: '8px 16px' }}><span style={{ fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: T.radius, textTransform: 'uppercase', background: s.strength==='hot' ? T.errorLight : T.warningLight, color: s.strength==='hot' ? T.destructive : T.warning }}>{s.strength}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function Chip({ label, active }) {
  return <button style={{ fontSize: 11, fontWeight: active ? 700 : 400, padding: '2px 10px', borderRadius: T.radius, cursor: 'pointer', background: active ? T.brandPrimaryActive : 'transparent', color: active ? '#fff' : T.textPlaceholder, border: active ? 'none' : `1px solid ${T.borderDefault}` }}>{label}</button>;
}


/* ═══════════════════════════════════════════════════════════════
   PERFORMANCE
   ═══════════════════════════════════════════════════════════════ */
function Performance({ done, total, doneCalls, doneEmails }) {
  const pd = performanceData;
  const pipe = accounts.reduce((s, a) => s + parseInt(a.dealValue?.replace(/[^0-9]/g,'') || '0'), 0);
  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: T.radius, background: '#e87e04', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        </div>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Performance Dashboard</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>
        <MC l="Actions Completed" v={`${done}/${total}`} p={total?(done/total)*100:0} c={T.brandPrimaryActive} />
        <MC l="Calls Made" v={`${doneCalls}/${pd.callsTotal}`} p={pd.callsTotal?(doneCalls/pd.callsTotal)*100:0} c={T.warning} />
        <MC l="Emails Sent" v={`${doneEmails}/${pd.emailsTotal}`} p={pd.emailsTotal?(doneEmails/pd.emailsTotal)*100:0} c={T.brandPrimaryActive} />
        <MC l="Pipeline Influenced" v={`$${(done*4800).toLocaleString()}`} sub={`Target: $${pipe.toLocaleString()}`} c={T.success} />
      </div>

      <Card title="Weekly Completion Rate" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 100 }}>
          {pd.weeklyCompletion.map((d, i) => {
            const p = d.total ? (d.completed/d.total)*100 : 0; const today = d.day==='Mon';
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 600 }}>{d.completed}/{d.total}</span>
                <div style={{ width: '100%', maxWidth: 48, background: T.borderDefault, borderRadius: T.radius, height: 64, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
                  <div style={{ width: '100%', borderRadius: T.radius, height: `${p}%`, background: T.brandPrimaryActive, transition: 'height .5s', minHeight: p>0?3:0 }} />
                </div>
                <span style={{ fontSize: 11, color: today ? T.brandPrimaryActive : T.textPlaceholder, fontWeight: today ? 700 : 400 }}>{d.day}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Card title="Conversion Funnel">
          {Object.entries(pd.conversionRates).map(([k, v]) => {
            const labels = { signalToCall:'Signal → Call', callToMeeting:'Call → Meeting', meetingToDemo:'Meeting → Demo', demoToClose:'Demo → Close' };
            return (
              <div key={k} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}><span style={{ fontSize: 12, color: T.textPlaceholder }}>{labels[k]}</span><span style={{ fontSize: 12, fontWeight: 700 }}>{v}</span></div>
                <div style={{ height: 6, background: T.borderDefault, borderRadius: T.radiusPill, overflow: 'hidden' }}><div style={{ height: '100%', width: `${parseInt(v)}%`, borderRadius: T.radiusPill, background: T.brandPrimaryActive }} /></div>
              </div>
            );
          })}
        </Card>
        <Card title="Top Performing Signals">
          {pd.topPerformingSignals.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0', borderBottom: i<pd.topPerformingSignals.length-1?`1px solid ${T.borderDefault}`:'none' }}>
              <span style={{ fontSize: 12, fontWeight: 700, width: 28, textAlign: 'right' }}>{s.conversion}%</span>
              <div style={{ flex: 1, height: 6, background: T.borderDefault, borderRadius: T.radiusPill, overflow: 'hidden' }}><div style={{ height: '100%', width: `${s.conversion}%`, borderRadius: T.radiusPill, background: i===0?T.error:i<3?T.warning:T.brandPrimaryActive }} /></div>
              <span style={{ fontSize: 12, color: T.textPlaceholder, minWidth: 100 }}>{s.signal}</span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function MC({ l, v, p, c, sub }) {
  return (
    <div style={{ background: T.bgAlt, borderRadius: T.radius, border: `1px solid ${T.borderDefault}`, boxShadow: T.shadow, padding: 12 }}>
      <div style={{ fontSize: 11, color: T.textPlaceholder, marginBottom: 3 }}>{l}</div>
      <div style={{ fontSize: 22, fontWeight: 700 }}>{v}</div>
      {sub && <div style={{ fontSize: 11, color: T.textPlaceholder, marginTop: 1 }}>{sub}</div>}
      {p !== undefined && <div style={{ height: 4, background: T.borderDefault, borderRadius: T.radiusPill, marginTop: 6, overflow: 'hidden' }}><div style={{ height: '100%', width: `${p}%`, background: c, borderRadius: T.radiusPill, transition: 'width .5s' }} /></div>}
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */
function HowItWorks() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 24px 40px' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: T.bgHighlight, color: T.brandPrimaryActive, padding: '4px 12px', borderRadius: T.radiusPill, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
          {I.lightning(T.brandPrimaryActive)} Salesforce Native
        </span>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px' }}>This Runs Natively in Salesforce</h1>
        <p style={{ fontSize: 14, color: T.textPlaceholder, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
          No separate app. No tab switching. Your SDRs work the AI-powered action queue directly inside Salesforce using Lightning Web Components.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 36 }}>
        <FS n="1" icon={I.database} c={T.brandPrimary} t="Signals Flow In" d="Clay enrichment, website tracking, and email engagement pipe into Salesforce objects in real-time." items={['Clay enriches contacts','Web-to-Lead tracking','Email engagement scored','LinkedIn via Sales Navigator','News alerts via triggers']} />
        <FS n="2" icon={I.cpu} c={T.brandPrimaryActive} t="AI Prioritizes" d="Daily at 6 AM, AI scores all accounts, generates the queue, and drafts outreach." items={['Fit + Intent + Timing scoring','Priority sequencing','Personalized call scripts','Contextual email drafts','Conversion-optimized queue']} />
        <FS n="3" icon={I.monitor} c={T.bgInverseLight} t="SDR Executes" d="Reps work the queue inside Salesforce using native dialer and email." items={['Lightning dashboard queue','Click-to-call dialer','Pre-drafted emails','Auto-logged activities','Real-time tracking']} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
        <div style={{ background: T.bgInverseLight, color: '#fff', padding: '10px 24px', borderRadius: T.radius, fontSize: 14, fontWeight: 600, boxShadow: '0 4px 12px rgba(0,0,0,.2)' }}>
          No separate app. No tab switching. No learning curve.
        </div>
      </div>

      <Card title="Built on Salesforce's Platform" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: T.textPlaceholder, lineHeight: 1.6, margin: '0 0 12px' }}>Leverages Salesforce's native extensibility — no third-party iframe hacks.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <TB t="Lightning Web Components" d="Action queue, call scripts, and AI insights render directly on records as Lightning components." />
          <TB t="Salesforce Flows" d="Automated flows handle signal scoring, queue generation, and outreach drafting on a daily schedule." />
          <TB t="Salesforce API" d="Real-time sync between Clay enrichment, AI scoring, and Salesforce objects via custom APIs." />
          <TB t="Native Dialer + Email" d="Calls and emails through Salesforce's built-in tools. Everything auto-logged to the CRM." />
        </div>
      </Card>

      <Card title="FAQ">
        <FQ q="Can this really run inside Salesforce?" a="Yes. Using LWC, Salesforce Flows, and the API, the entire experience lives on contact/account records within Sales Cloud." />
        <FQ q="What Salesforce edition do I need?" a="Sales Cloud Enterprise or above with Lightning Experience enabled." />
        <FQ q="How long does implementation take?" a="2-3 weeks. Week 1: Config + enrichment. Week 2: AI calibration + flows. Week 3: Training + go-live." />
        <FQ q="Does this replace existing workflows?" a="No — it enhances them. Existing flows and templates continue to work. The AI queue layers on top." />
      </Card>
    </div>
  );
}

function FS({ n, icon, c, t, d, items }) {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div style={{ width: 30, height: 30, borderRadius: T.radius, background: `${c}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon(c)}</div>
        <div><div style={{ fontSize: 10, fontWeight: 700, color: c, textTransform: 'uppercase', letterSpacing: '.5px' }}>Step {n}</div><div style={{ fontSize: 14, fontWeight: 700 }}>{t}</div></div>
      </div>
      <p style={{ fontSize: 12, color: T.textPlaceholder, lineHeight: 1.6, margin: '0 0 8px' }}>{d}</p>
      <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>{items.map((it, i) => <li key={i} style={{ fontSize: 12, color: T.textPlaceholder, padding: '1px 0', display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 4, height: 4, borderRadius: '50%', background: c, flexShrink: 0 }} />{it}</li>)}</ul>
    </Card>
  );
}

function TB({ t, d }) {
  return <div style={{ background: T.bgDefault, borderRadius: T.radius, padding: 10 }}><div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{t}</div><div style={{ fontSize: 12, color: T.textPlaceholder, lineHeight: 1.6 }}>{d}</div></div>;
}

function FQ({ q, a }) {
  const [o, setO] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${T.borderDefault}`, padding: '8px 0' }}>
      <div onClick={() => setO(!o)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>{q}</span>
        <span style={{ transform: o ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s' }}>{I.chevDown(T.textPlaceholder)}</span>
      </div>
      {o && <div style={{ fontSize: 13, color: T.textPlaceholder, lineHeight: 1.7, marginTop: 4, animation: 'fadeIn .2s ease' }}>{a}</div>}
    </div>
  );
}
