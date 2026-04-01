import { useState, useEffect, useRef } from 'react';
import { accounts, dailyActions, signalFeed, performanceData } from './mockData';

/* ═══════════════════════════════════════════
   COLOR TOKENS — Salesforce Lightning Design System
   ═══════════════════════════════════════════ */
const C = {
  brand: '#0176d3',
  brandHover: '#014486',
  brandLight: '#eef4ff',
  navBg: '#032d60',
  navBgDeep: '#001639',
  white: '#ffffff',
  bg: '#f3f3f3',
  bgCard: '#ffffff',
  text: '#181818',
  textLight: '#444444',
  textMuted: '#706e6b',
  border: '#c9c9c9',
  borderLight: '#dddbda',
  hot: '#ba0517',
  hotBg: '#fef1ee',
  warm: '#dd7a01',
  warmBg: '#fef3e8',
  green: '#2e844a',
  greenBg: '#cdefc4',
  blue: '#0176d3',
  blueBg: '#d8edff',
  purple: '#7526c4',
  purpleBg: '#ece1f9',
  cardShadow: '0 2px 2px 0 rgba(0,0,0,.1)',
  cardRadius: '.25rem',
};

/* ═══════════════════════════════════════════
   SVG ICONS (SLDS-style)
   ═══════════════════════════════════════════ */
const Icon = {
  waffle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><circle cx="4" cy="4" r="2.5"/><circle cx="12" cy="4" r="2.5"/><circle cx="20" cy="4" r="2.5"/><circle cx="4" cy="12" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="20" cy="12" r="2.5"/><circle cx="4" cy="20" r="2.5"/><circle cx="12" cy="20" r="2.5"/><circle cx="20" cy="20" r="2.5"/></svg>
  ),
  lightning: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  signal: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 20V4"/></svg>
  ),
  chart: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
  ),
  info: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
  ),
  phone: (c = C.green) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  mail: (c = C.textMuted) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  linkedin: (c = '#0077b5') => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  check: (c = C.green) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  clock: (c = C.textMuted) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  zap: (c = C.warm) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  arrowLeft: (c = C.brand) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
  ),
  search: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  bell: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  ),
  send: (c = '#fff') => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  chevronDown: (c = C.textMuted) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
  ),
  play: (c = '#fff') => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
  ),
  refresh: (c = C.textMuted) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
  ),
  globe: (c = C.textMuted) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
  ),
  briefcase: (c = C.textMuted) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
  ),
  database: (c = C.brand) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  ),
  cpu: (c = C.brand) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
  ),
  monitor: (c = C.navBg) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  ),
  cloud: () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
      <path d="M18.5 7.5a5.5 5.5 0 0 0-10.78-1.09A4.002 4.002 0 0 0 4 10.5C4 12.71 5.79 14.5 8 14.5h10.5c1.93 0 3.5-1.57 3.5-3.5S20.43 7.5 18.5 7.5Z" fill="#fff"/>
    </svg>
  ),
};

const signalTypeIcon = { website: Icon.globe, email: Icon.mail, linkedin: Icon.linkedin, job: Icon.briefcase };

/* ═══════════════════════════════════════════
   ACTION TYPE / PRIORITY CONFIG
   ═══════════════════════════════════════════ */
const actionTypeConfig = {
  'CALL':        { color: '#0176d3', bg: '#d8edff', icon: Icon.phone, label: 'CALL' },
  'EMAIL':       { color: '#0176d3', bg: '#d8edff', icon: Icon.mail, label: 'EMAIL' },
  'LINKEDIN':    { color: '#0077b5', bg: '#e0f0f6', icon: Icon.linkedin, label: 'LINKEDIN' },
  'FOLLOW-UP':   { color: '#7526c4', bg: '#ece1f9', icon: Icon.refresh, label: 'FOLLOW-UP' },
  'RESEARCH':    { color: '#444', bg: '#eee', icon: Icon.search, label: 'RESEARCH' },
  'CREATE DEAL': { color: '#2e844a', bg: '#cdefc4', icon: Icon.check, label: 'CREATE DEAL' },
};

const priorityConfig = {
  urgent:   { color: C.hot,  bg: C.hotBg,  label: 'Urgent' },
  high:     { color: C.warm, bg: C.warmBg, label: 'High' },
  standard: { color: C.blue, bg: C.blueBg, label: 'Standard' },
};

/* ═══════════════════════════════════════════
   SLDS-style button helpers
   ═══════════════════════════════════════════ */
const sldsBtnBrand = {
  background: C.brand, color: '#fff', border: 'none', borderRadius: '.25rem',
  padding: '0 1rem', height: 32, fontSize: 13, fontWeight: 600, cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center', gap: 6,
};
const sldsBtnNeutral = {
  background: C.white, color: C.text, border: `1px solid ${C.border}`, borderRadius: '.25rem',
  padding: '0 1rem', height: 32, fontSize: 13, fontWeight: 400, cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center', gap: 6,
};
const sldsBtnDestructive = {
  ...sldsBtnBrand, background: C.hot,
};
const sldsBtnSuccess = {
  ...sldsBtnBrand, background: C.green,
};

/* ═══════════════════════════════════════════
   SLDS Card wrapper
   ═══════════════════════════════════════════ */
function SLDSCard({ title, children, style: extra, headerRight, noPad }) {
  return (
    <div style={{ background: C.white, borderRadius: C.cardRadius, boxShadow: C.cardShadow, overflow: 'hidden', ...extra }}>
      {title && (
        <div style={{
          padding: '0.75rem 1rem', borderBottom: `1px solid ${C.borderLight}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{title}</span>
          {headerRight}
        </div>
      )}
      <div style={noPad ? {} : { padding: '0.75rem 1rem' }}>{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [activeView, setActiveView] = useState('queue');
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [expandedAction, setExpandedAction] = useState(null);
  const [completedActions, setCompletedActions] = useState(new Set());
  const [toast, setToast] = useState(null);
  const [recentlyCompleted, setRecentlyCompleted] = useState(new Set());

  const selectedAccount = accounts.find(a => a.id === selectedAccountId) || null;
  const completedCount = completedActions.size;
  const totalActions = dailyActions.length;
  const callCount = dailyActions.filter(a => a.type === 'CALL').length;
  const emailCount = dailyActions.filter(a => a.type === 'EMAIL').length;
  const linkedinCount = dailyActions.filter(a => a.type === 'LINKEDIN').length;
  const followUpCount = dailyActions.filter(a => ['FOLLOW-UP','RESEARCH','CREATE DEAL'].includes(a.type)).length;
  const completedCalls = dailyActions.filter(a => a.type === 'CALL' && completedActions.has(a.id)).length;
  const completedEmails = dailyActions.filter(a => a.type === 'EMAIL' && completedActions.has(a.id)).length;

  const navigateToAccount = (id) => { setSelectedAccountId(id); setActiveView('detail'); };
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); };
  const markComplete = (actionId) => {
    setCompletedActions(p => { const n = new Set(p); n.add(actionId); return n; });
    setRecentlyCompleted(p => { const n = new Set(p); n.add(actionId); return n; });
    setTimeout(() => { setRecentlyCompleted(p => { const n = new Set(p); n.delete(actionId); return n; }); setExpandedAction(null); }, 800);
    showToast('Action completed');
  };
  const toggleExpand = (id) => setExpandedAction(expandedAction === id ? null : id);

  const tabs = [
    { id: 'queue', label: 'Action Queue' },
    { id: 'signal', label: 'Signal Feed' },
    { id: 'performance', label: 'Performance' },
    { id: 'howItWorks', label: 'How It Works' },
  ];
  const staticTabs = ['Leads','Accounts','Contacts','Opportunities','Reports'];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: C.bg }}>

      {/* ═══ SALESFORCE GLOBAL HEADER ═══ */}
      <header style={{
        height: 48, background: C.navBg, display: 'flex', alignItems: 'center',
        padding: '0 12px', flexShrink: 0, gap: 12,
      }}>
        {/* App launcher waffle */}
        <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderRadius: '.25rem', flexShrink: 0 }}>
          {Icon.waffle()}
        </div>

        {/* App name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>Weave SDR</span>
        </div>

        {/* Tab navigation */}
        <nav style={{ display: 'flex', gap: 0, height: '100%', alignItems: 'stretch' }}>
          {tabs.map(t => {
            const isActive = activeView === t.id || (activeView === 'detail' && t.id === 'queue');
            return (
              <button key={t.id} onClick={() => setActiveView(t.id)} style={{
                background: 'none', border: 'none', color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: 13, fontWeight: isActive ? 600 : 400, padding: '0 14px',
                cursor: 'pointer', position: 'relative', letterSpacing: 0,
              }}>
                {t.label}
                {isActive && <div style={{ position: 'absolute', bottom: 0, left: 8, right: 8, height: 3, background: '#fff', borderRadius: '3px 3px 0 0' }}/>}
              </button>
            );
          })}
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)', margin: '10px 4px' }}/>
          {staticTabs.map(t => (
            <button key={t} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
              fontSize: 13, padding: '0 12px', cursor: 'default',
            }}>{t}</button>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Global search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)',
            borderRadius: '.25rem', padding: '5px 12px', minWidth: 200,
          }}>
            {Icon.search('rgba(255,255,255,0.7)')}
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Search Salesforce...</span>
          </div>
          {/* Bell */}
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            {Icon.bell('rgba(255,255,255,0.8)')}
            <div style={{
              position: 'absolute', top: -6, right: -6, width: 16, height: 16,
              background: C.hot, borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 700, border: `2px solid ${C.navBg}`,
            }}>5</div>
          </div>
          {/* Avatar */}
          <div style={{
            width: 28, height: 28, borderRadius: '50%', background: '#1b96ff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 700, color: '#fff', cursor: 'pointer',
          }}>AR</div>
        </div>
      </header>

      {/* ═══ CONTENT ═══ */}
      <main style={{ flex: 1, overflow: 'auto', padding: activeView === 'howItWorks' ? 0 : '1rem 1.5rem' }}>
        {activeView === 'queue' && <QueueView {...{completedActions,completedCount,totalActions,expandedAction,toggleExpand,markComplete,navigateToAccount,recentlyCompleted,callCount,emailCount,linkedinCount,followUpCount,completedCalls,completedEmails}} />}
        {activeView === 'detail' && selectedAccount && <AccountDetailView account={selectedAccount} onBack={() => setActiveView('queue')} navigateToAccount={navigateToAccount} />}
        {activeView === 'signal' && <SignalFeedView navigateToAccount={navigateToAccount} />}
        {activeView === 'performance' && <PerformanceView {...{completedCount,totalActions,completedCalls,completedEmails}} />}
        {activeView === 'howItWorks' && <HowItWorksView />}
      </main>

      {/* ═══ SFDC-STYLE TOAST ═══ */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)',
          background: '#04844b', color: '#fff',
          padding: '0 1rem', height: 40, borderRadius: '.25rem', fontSize: 13, fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: 8, zIndex: 10000,
          boxShadow: '0 4px 12px rgba(0,0,0,.25)', animation: 'slideUp 0.3s ease',
        }}>
          {Icon.check('#fff')} {toast}
        </div>
      )}
    </div>
  );
}


/* ═══════════════════════════════════════════
   VIEW 1: ACTION QUEUE
   ═══════════════════════════════════════════ */
function QueueView({ completedActions, completedCount, totalActions, expandedAction, toggleExpand, markComplete, navigateToAccount, recentlyCompleted, callCount, emailCount, linkedinCount, followUpCount, completedCalls, completedEmails }) {
  const pct = (completedCount / totalActions) * 100;

  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      {/* SLDS Page Header */}
      <div style={{
        background: C.white, borderRadius: C.cardRadius, boxShadow: C.cardShadow,
        padding: '1rem 1.25rem', marginBottom: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '.25rem', background: '#0176d3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Icon.lightning('#fff')}
            </div>
            <div>
              <div style={{ fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px', fontWeight: 400 }}>SDR Action Queue</div>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: 0, lineHeight: 1.2 }}>Alex's Daily Queue</h1>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: C.textMuted }}>March 31, 2026</div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: C.greenBg, color: C.green, padding: '2px 8px',
              borderRadius: '.75rem', fontSize: 11, fontWeight: 600, marginTop: 2,
            }}>
              {Icon.zap(C.green)} AI Confidence: High
            </span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ background: '#e5e5e5', borderRadius: '1rem', height: 6, marginBottom: 10, overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: '1rem', background: C.brand, width: `${pct}%`, transition: 'width 0.5s ease' }} />
        </div>

        {/* Stats pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Pill label="Actions" value={`${completedCount}/${totalActions}`} />
            <Pill label="Calls" value={`${completedCalls}/${callCount}`} color={C.brand} />
            <Pill label="Emails" value={`${completedEmails}/${emailCount}`} color={C.brand} />
            <Pill label="LinkedIn" value={`${dailyActions.filter(a=>a.type==='LINKEDIN'&&completedActions.has(a.id)).length}/${linkedinCount}`} color="#0077b5" />
            <Pill label="Other" value={`${dailyActions.filter(a=>['FOLLOW-UP','RESEARCH','CREATE DEAL'].includes(a.type)&&completedActions.has(a.id)).length}/${followUpCount}`} color={C.purple} />
          </div>
          <div style={{ fontSize: 12, color: C.textMuted, display: 'flex', alignItems: 'center', gap: 4 }}>
            {Icon.clock()} Est. 2.5 hours
          </div>
        </div>
      </div>

      {/* Action cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {dailyActions.map(action => (
          <ActionCard key={action.id} action={action}
            isCompleted={completedActions.has(action.id)}
            isExpanded={expandedAction === action.id}
            isRecentlyCompleted={recentlyCompleted.has(action.id)}
            onToggle={() => toggleExpand(action.id)}
            onComplete={() => markComplete(action.id)}
            onNavigate={() => navigateToAccount(action.accountId)}
          />
        ))}
      </div>
    </div>
  );
}

function Pill({ label, value, color }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12,
      background: C.white, border: `1px solid ${C.borderLight}`, borderRadius: '.25rem',
      padding: '3px 8px',
    }}>
      <span style={{ color: C.textMuted }}>{label}:</span>
      <span style={{ color: color || C.text, fontWeight: 600 }}>{value}</span>
    </span>
  );
}


/* ═══════════════════════════════════════════
   ACTION CARD
   ═══════════════════════════════════════════ */
function ActionCard({ action, isCompleted, isExpanded, isRecentlyCompleted, onToggle, onComplete, onNavigate }) {
  const cfg = actionTypeConfig[action.type];
  const pri = priorityConfig[action.priority];
  const [hov, setHov] = useState(false);

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: isCompleted ? '#f9fdf9' : C.white,
      borderRadius: C.cardRadius,
      boxShadow: isExpanded ? `0 0 0 1px ${C.brand}` : isRecentlyCompleted ? `0 0 0 2px ${C.green}` : C.cardShadow,
      transition: 'all 0.2s',
      opacity: isCompleted && !isRecentlyCompleted ? 0.5 : 1,
      overflow: 'hidden',
    }}>
      {/* Row */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 12px', gap: 10, cursor: 'pointer' }} onClick={onToggle}>
        {/* Priority # */}
        <div style={{
          width: 28, height: 28, borderRadius: '.25rem', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700,
          background: isCompleted ? C.greenBg : pri.bg, color: isCompleted ? C.green : pri.color,
        }}>
          {isCompleted ? Icon.check(C.green) : `#${action.id}`}
        </div>

        {/* Type badge */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          background: cfg.bg, color: cfg.color,
          padding: '2px 8px', borderRadius: '.25rem', fontSize: 10,
          fontWeight: 700, letterSpacing: '.3px', textTransform: 'uppercase', flexShrink: 0,
        }}>
          {cfg.icon(cfg.color)} {cfg.label}
        </span>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: C.text,
            textDecoration: isCompleted ? 'line-through' : 'none',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {action.contactName && <span>{action.contactName} — </span>}
            <span onClick={e => { e.stopPropagation(); onNavigate(); }} style={{ color: C.brand, cursor: 'pointer', fontWeight: 500 }}>{action.company}</span>
          </div>
          <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {action.reason}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{action.timeSlot}</div>
            <div style={{ fontSize: 11, color: C.textMuted }}>{action.duration}</div>
          </div>
          {!isCompleted && (
            <button onClick={e => { e.stopPropagation(); onToggle(); }} style={{
              ...(isExpanded ? sldsBtnNeutral : sldsBtnBrand),
              height: 28, fontSize: 12, padding: '0 10px',
            }}>
              {isExpanded ? 'Close' : <>{Icon.play()} Start</>}
            </button>
          )}
        </div>
      </div>

      {/* Expanded */}
      {isExpanded && !isCompleted && <ExpandedPanel action={action} onComplete={onComplete} onNavigate={onNavigate} />}
    </div>
  );
}


/* ═══════════════════════════════════════════
   EXPANDED PANELS
   ═══════════════════════════════════════════ */
function ExpandedPanel({ action, onComplete, onNavigate }) {
  if (action.type === 'CALL') return <CallPanel action={action} onComplete={onComplete} onNavigate={onNavigate} />;
  if (action.type === 'EMAIL' || action.type === 'FOLLOW-UP') return <EmailPanel action={action} onComplete={onComplete} />;
  if (action.type === 'LINKEDIN') return <LinkedInPanel action={action} onComplete={onComplete} />;
  if (action.type === 'RESEARCH') return <ResearchPanel action={action} onComplete={onComplete} onNavigate={onNavigate} />;
  if (action.type === 'CREATE DEAL') return <DealPanel action={action} onComplete={onComplete} />;
  return null;
}

function CallPanel({ action, onComplete, onNavigate }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${C.borderLight}`, animation: 'fadeIn 0.2s ease' }}>
      <div style={{ paddingTop: 12 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 240px', background: C.blueBg, borderRadius: C.cardRadius, padding: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.brand, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>Contact</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{action.contactName}</div>
            <div style={{ fontSize: 12, color: C.textLight, marginBottom: 6 }}>{action.contactTitle} — {action.company}</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: C.white, border: `2px solid ${C.green}`, borderRadius: '.25rem', padding: '6px 14px', cursor: 'pointer',
            }}>
              {Icon.phone(C.green)}
              <span style={{ fontSize: 15, fontWeight: 700, color: C.green, letterSpacing: '.5px' }}>{action.contactPhone}</span>
            </div>
          </div>
          <div style={{ flex: '1 1 280px', background: C.bg, borderRadius: C.cardRadius, padding: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>Quick Brief</div>
            <ul style={{ margin: 0, paddingLeft: 14, fontSize: 12, color: C.textLight, lineHeight: 1.7 }}>
              {action.callBrief?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>

        <div style={{ background: C.bg, border: `1px solid ${C.borderLight}`, borderRadius: C.cardRadius, padding: 12, marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.brand, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>Opening Line</div>
          <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6, fontStyle: 'italic' }}>"{action.openingLine}"</div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>Discovery Questions</div>
            {action.discoveryQuestions?.map((q, i) => (
              <div key={i} style={{ fontSize: 12, color: C.text, padding: '5px 8px', marginBottom: 3, background: C.white, border: `1px solid ${C.borderLight}`, borderRadius: C.cardRadius, lineHeight: 1.5 }}>
                {i+1}. {q}
              </div>
            ))}
          </div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>Objection Handler</div>
            <div style={{ fontSize: 12, color: C.text, padding: '6px 8px', background: C.warmBg, borderRadius: C.cardRadius, lineHeight: 1.5, marginBottom: 6 }}>{action.objectionHandler}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }}>Suggested CTA</div>
            <div style={{ fontSize: 12, color: C.green, fontWeight: 600, padding: '6px 8px', background: C.greenBg, borderRadius: C.cardRadius }}>{action.suggestedCTA}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={onComplete} style={sldsBtnSuccess}>{Icon.check('#fff')} Mark Complete</button>
          <button style={sldsBtnNeutral}>Reschedule</button>
          <button onClick={onNavigate} style={{...sldsBtnNeutral, color: C.brand}}>View Account</button>
        </div>
      </div>
    </div>
  );
}

function EmailPanel({ action, onComplete }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${C.borderLight}`, animation: 'fadeIn 0.2s ease' }}>
      <div style={{ paddingTop: 12 }}>
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: C.cardRadius, overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ padding: '8px 12px', borderBottom: `1px solid ${C.borderLight}`, display: 'flex', gap: 6, fontSize: 12 }}>
            <span style={{ color: C.textMuted }}>To:</span>
            <span style={{ color: C.text, fontWeight: 500 }}>{action.contactName} &lt;{action.contactEmail}&gt;</span>
          </div>
          <div style={{ padding: '8px 12px', borderBottom: `1px solid ${C.borderLight}`, display: 'flex', gap: 6, fontSize: 12 }}>
            <span style={{ color: C.textMuted }}>Subject:</span>
            <span style={{ color: C.text, fontWeight: 600 }}>{action.emailSubject}</span>
          </div>
          <div style={{ padding: 12, fontSize: 13, color: C.text, lineHeight: 1.7, whiteSpace: 'pre-line', background: '#fafbfc' }}>
            {action.emailBody}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={onComplete} style={sldsBtnBrand}>{Icon.send()} Send Email</button>
          <button style={sldsBtnNeutral}>Edit Draft</button>
          <button style={sldsBtnNeutral}>Reschedule</button>
        </div>
      </div>
    </div>
  );
}

function LinkedInPanel({ action, onComplete }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${C.borderLight}`, animation: 'fadeIn 0.2s ease' }}>
      <div style={{ paddingTop: 12 }}>
        <div style={{ background: '#f0f5f8', border: '1px solid #d0dbe4', borderRadius: C.cardRadius, padding: 14, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            {Icon.linkedin('#0077b5')}
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0077b5' }}>LinkedIn Message</span>
          </div>
          <div style={{ background: C.white, borderRadius: C.cardRadius, padding: 12, fontSize: 13, color: C.text, lineHeight: 1.7, whiteSpace: 'pre-line', border: '1px solid #d0dbe4' }}>
            {action.linkedinMessage}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={onComplete} style={{...sldsBtnBrand, background: '#0077b5'}}>{Icon.check('#fff')} Mark Complete</button>
          <button style={sldsBtnNeutral}>Open LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

function ResearchPanel({ action, onComplete, onNavigate }) {
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${C.borderLight}`, animation: 'fadeIn 0.2s ease' }}>
      <div style={{ paddingTop: 12 }}>
        <div style={{ background: C.bg, borderRadius: C.cardRadius, padding: 14, marginBottom: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6 }}>Research Checklist</div>
          {action.researchTasks?.map((task, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 0', borderBottom: i < action.researchTasks.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
              <div style={{ width: 16, height: 16, borderRadius: '.125rem', border: `2px solid ${C.border}`, flexShrink: 0, marginTop: 1, cursor: 'pointer' }} />
              <span style={{ fontSize: 12, color: C.text, lineHeight: 1.5 }}>{task}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={onComplete} style={sldsBtnSuccess}>{Icon.check('#fff')} Mark Complete</button>
          <button onClick={onNavigate} style={{...sldsBtnNeutral, color: C.brand}}>View Account</button>
        </div>
      </div>
    </div>
  );
}

function DealPanel({ action, onComplete }) {
  const d = action.dealDetails;
  return (
    <div style={{ padding: '0 12px 12px', borderTop: `1px solid ${C.borderLight}`, animation: 'fadeIn 0.2s ease' }}>
      <div style={{ paddingTop: 12 }}>
        <div style={{ background: C.greenBg, borderRadius: C.cardRadius, padding: 14, marginBottom: 10, border: `1px solid #a8dda0` }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: C.green, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Opportunity to Create</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }}>
            <DealField label="Deal Name" value={d.dealName} />
            <DealField label="Amount" value={d.amount} />
            <DealField label="Locations" value={d.seats} />
            <DealField label="Stage" value={d.stage} />
            <DealField label="Close Date" value={d.closeDate} />
            <DealField label="Primary Contact" value={d.primaryContact} />
          </div>
          <div style={{ marginTop: 6 }}><DealField label="Notes" value={d.notes} /></div>
        </div>
        <button onClick={onComplete} style={sldsBtnSuccess}>{Icon.check('#fff')} Create Opportunity</button>
      </div>
    </div>
  );
}

function DealField({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 10, color: C.textMuted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.3px' }}>{label}</div>
      <div style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{value}</div>
    </div>
  );
}


/* ═══════════════════════════════════════════
   VIEW 2: ACCOUNT DETAIL
   ═══════════════════════════════════════════ */
function AccountDetailView({ account, onBack, navigateToAccount }) {
  const accountActions = dailyActions.filter(a => a.accountId === account.id);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      {/* Breadcrumb */}
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', color: C.brand, fontSize: 12, cursor: 'pointer', padding: 0, marginBottom: 8 }}>
        {Icon.arrowLeft(C.brand)} Back to Action Queue
      </button>

      {/* Record header */}
      <SLDSCard style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '.25rem', background: '#0176d3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#fff' }}>
              {account.company[0]}
            </div>
            <div>
              <div style={{ fontSize: 11, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '.5px' }}>Account</div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: 0 }}>{account.company}</h2>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{account.size} &middot; {account.location} &middot; {account.industry}</div>
            </div>
          </div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: account.aiScore >= 85 ? C.hotBg : C.warmBg,
            color: account.aiScore >= 85 ? C.hot : C.warm,
            padding: '4px 12px', borderRadius: '.75rem', fontSize: 13, fontWeight: 700,
          }}>
            AI Score: {account.aiScore}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10 }}>
          <InfoBlock label="Revenue" value={account.revenue} />
          <InfoBlock label="Current Tools" value={account.currentTools} />
          <InfoBlock label="Deal Value" value={account.dealValue} />
          <InfoBlock label="Locations" value={account.seats} />
          <InfoBlock label="Website" value={account.website} />
          <InfoBlock label="Founded" value={account.founded} />
        </div>
      </SLDSCard>

      {/* AI rationale */}
      <SLDSCard title="Why AI Prioritized This Account" style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: C.textLight, lineHeight: 1.7, marginBottom: 12 }}>{account.whyPrioritized}</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <ScoreBar label="Fit" value={account.fitScore} color={C.brand} />
          <ScoreBar label="Intent" value={account.intentScore} color={C.warm} />
          <ScoreBar label="Timing" value={account.timingScore} color={C.purple} />
        </div>
      </SLDSCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <SLDSCard title="Key Contacts">
          {account.contacts.filter(c => c.name !== 'TBD').map((ct, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: i < account.contacts.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{ct.name}</span>
                {ct.isPrimary && <span style={{ fontSize: 9, fontWeight: 700, color: C.brand, background: C.blueBg, padding: '1px 5px', borderRadius: '.25rem', textTransform: 'uppercase' }}>Primary</span>}
              </div>
              <div style={{ fontSize: 12, color: C.textMuted }}>{ct.title}</div>
              {ct.phone && <div style={{ fontSize: 12, color: C.green, marginTop: 1 }}>{ct.phone}</div>}
              {ct.email && <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1 }}>{ct.email}</div>}
            </div>
          ))}
        </SLDSCard>

        <SLDSCard title={`Today's Actions (${accountActions.length})`}>
          {accountActions.map((a, i) => {
            const cfg = actionTypeConfig[a.type];
            return (
              <div key={i} style={{ padding: '6px 0', borderBottom: i < accountActions.length - 1 ? `1px solid ${C.borderLight}` : 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: cfg.color, background: cfg.bg, padding: '1px 6px', borderRadius: '.25rem', flexShrink: 0 }}>{cfg.label}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: C.text, fontWeight: 500 }}>{a.action}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>{a.timeSlot} &middot; {a.duration}</div>
                </div>
              </div>
            );
          })}
          {accountActions.length === 0 && <div style={{ fontSize: 12, color: C.textMuted, padding: '12px 0' }}>No actions scheduled.</div>}
        </SLDSCard>
      </div>

      {/* Signal Timeline */}
      <SLDSCard title="Signal Timeline" style={{ marginBottom: 12 }}>
        {account.signals.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 0', borderBottom: i < account.signals.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, marginTop: 4, background: s.strength === 'hot' ? C.hot : C.warm }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: C.text }}>{s.type}</div>
              <div style={{ fontSize: 12, color: C.textLight, lineHeight: 1.5 }}>{s.detail}</div>
              <div style={{ fontSize: 11, color: C.textMuted, marginTop: 1 }}>{s.time}</div>
            </div>
          </div>
        ))}
      </SLDSCard>

      {/* Call Script */}
      {account.callScript && (
        <SLDSCard title="AI Call Script" style={{ marginBottom: 12 }}>
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.brand, textTransform: 'uppercase', marginBottom: 3 }}>Opening</div>
            <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6, fontStyle: 'italic', background: C.bg, padding: 10, borderRadius: C.cardRadius }}>"{account.callScript.opening}"</div>
          </div>
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', marginBottom: 3 }}>Discovery Questions</div>
            {account.callScript.discoveryQuestions.map((q, i) => (
              <div key={i} style={{ fontSize: 12, color: C.text, padding: '4px 8px', marginBottom: 2, background: C.bg, borderRadius: C.cardRadius, lineHeight: 1.5 }}>{i+1}. {q}</div>
            ))}
          </div>
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', marginBottom: 3 }}>Objection Handler</div>
            <div style={{ fontSize: 12, color: C.text, padding: '6px 8px', background: C.warmBg, borderRadius: C.cardRadius, lineHeight: 1.5 }}>{account.callScript.objectionHandler}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', marginBottom: 3 }}>Suggested CTA</div>
            <div style={{ fontSize: 12, color: C.green, fontWeight: 600, padding: '6px 8px', background: C.greenBg, borderRadius: C.cardRadius }}>{account.callScript.suggestedCTA}</div>
          </div>
        </SLDSCard>
      )}
    </div>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 10, color: C.textMuted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.3px' }}>{label}</div>
      <div style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{value}</div>
    </div>
  );
}

function ScoreBar({ label, value, color }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <span style={{ fontSize: 11, color: C.textMuted }}>{label}</span>
        <span style={{ fontSize: 11, fontWeight: 700, color }}>{value}</span>
      </div>
      <div style={{ height: 6, background: '#e5e5e5', borderRadius: '1rem', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: '1rem', transition: 'width 0.5s' }} />
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════
   VIEW 3: SIGNAL FEED
   ═══════════════════════════════════════════ */
function SignalFeedView({ navigateToAccount }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <SLDSCard title="Signal Feed" headerRight={
        <div style={{ display: 'flex', gap: 4 }}>
          <FilterChip label="All" active />
          <FilterChip label="Hot" />
          <FilterChip label="Warm" />
        </div>
      } noPad>
        <div>
          {signalFeed.map((s, i) => (
            <div key={s.id} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 1rem',
              borderBottom: i < signalFeed.length - 1 ? `1px solid ${C.borderLight}` : 'none',
              background: i % 2 === 0 ? '#fafaf9' : C.white,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, background: s.strength === 'hot' ? C.hot : C.warm }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <span onClick={() => navigateToAccount(s.accountId)} style={{ fontSize: 13, color: C.brand, cursor: 'pointer', fontWeight: 600 }}>{s.account}</span>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1 }}>{s.action}</div>
              </div>
              <div style={{ fontSize: 11, color: C.textMuted, whiteSpace: 'nowrap', flexShrink: 0 }}>{s.time}</div>
              <span style={{
                fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: '.25rem',
                textTransform: 'uppercase',
                background: s.strength === 'hot' ? C.hotBg : C.warmBg,
                color: s.strength === 'hot' ? C.hot : C.warm,
              }}>{s.strength}</span>
            </div>
          ))}
        </div>
      </SLDSCard>
    </div>
  );
}

function FilterChip({ label, active }) {
  return (
    <button style={{
      fontSize: 11, fontWeight: active ? 600 : 400, padding: '3px 10px', borderRadius: '.25rem', cursor: 'pointer',
      background: active ? C.brand : 'transparent', color: active ? '#fff' : C.textMuted,
      border: active ? 'none' : `1px solid ${C.borderLight}`,
    }}>{label}</button>
  );
}


/* ═══════════════════════════════════════════
   VIEW 4: PERFORMANCE
   ═══════════════════════════════════════════ */
function PerformanceView({ completedCount, totalActions, completedCalls, completedEmails }) {
  const pd = performanceData;
  const totalPipeline = accounts.reduce((s, a) => s + parseInt(a.dealValue?.replace(/[^0-9]/g,'') || '0'), 0);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: '.25rem', background: '#0176d3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.chart('#fff')}</div>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: C.text, margin: 0 }}>Performance Dashboard</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 12 }}>
        <MetricCard label="Actions Completed" value={`${completedCount}/${totalActions}`} progress={(completedCount/totalActions)*100} color={C.brand} />
        <MetricCard label="Calls Made" value={`${completedCalls}/${pd.callsTotal}`} progress={(completedCalls/pd.callsTotal)*100} color={C.warm} />
        <MetricCard label="Emails Sent" value={`${completedEmails}/${pd.emailsTotal}`} progress={(completedEmails/pd.emailsTotal)*100} color={C.brand} />
        <MetricCard label="Pipeline Influenced" value={`$${(completedCount * 4800).toLocaleString()}`} subtitle={`Target: $${totalPipeline.toLocaleString()}`} color={C.green} />
      </div>

      <SLDSCard title="Weekly Completion Rate" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 100 }}>
          {pd.weeklyCompletion.map((day, i) => {
            const pct = day.total > 0 ? (day.completed / day.total) * 100 : 0;
            const isToday = day.day === 'Mon';
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.text }}>{day.completed}/{day.total}</div>
                <div style={{ width: '100%', maxWidth: 50, background: '#e5e5e5', borderRadius: '.25rem', height: 70, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
                  <div style={{ width: '100%', borderRadius: '.25rem', height: `${pct}%`, background: C.brand, transition: 'height 0.5s', minHeight: pct > 0 ? 3 : 0 }} />
                </div>
                <div style={{ fontSize: 11, fontWeight: isToday ? 700 : 400, color: isToday ? C.brand : C.textMuted }}>{day.day}{isToday ? ' (today)' : ''}</div>
              </div>
            );
          })}
        </div>
      </SLDSCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <SLDSCard title="Conversion Funnel">
          {Object.entries(pd.conversionRates).map(([key, val]) => {
            const labels = { signalToCall: 'Signal to Call', callToMeeting: 'Call to Meeting', meetingToDemo: 'Meeting to Demo', demoToClose: 'Demo to Close' };
            return (
              <div key={key} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>{labels[key]}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{val}</span>
                </div>
                <div style={{ height: 5, background: '#e5e5e5', borderRadius: '1rem', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${parseInt(val)}%`, borderRadius: '1rem', background: C.brand }} />
                </div>
              </div>
            );
          })}
        </SLDSCard>
        <SLDSCard title="Top Performing Signals">
          {pd.topPerformingSignals.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: i < pd.topPerformingSignals.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 28, textAlign: 'right' }}>{s.conversion}%</span>
              <div style={{ flex: 1, height: 5, background: '#e5e5e5', borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.conversion}%`, borderRadius: '1rem', background: i === 0 ? C.hot : i < 3 ? C.warm : C.brand }} />
              </div>
              <span style={{ fontSize: 12, color: C.textMuted, minWidth: 110 }}>{s.signal}</span>
            </div>
          ))}
        </SLDSCard>
      </div>
    </div>
  );
}

function MetricCard({ label, value, subtitle, progress, color }) {
  return (
    <div style={{ background: C.white, borderRadius: C.cardRadius, boxShadow: C.cardShadow, padding: '0.75rem 1rem' }}>
      <div style={{ fontSize: 11, color: C.textMuted, fontWeight: 400, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>{value}</div>
      {subtitle && <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{subtitle}</div>}
      {progress !== undefined && (
        <div style={{ height: 4, background: '#e5e5e5', borderRadius: '1rem', marginTop: 6, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: color, borderRadius: '1rem', transition: 'width 0.5s' }} />
        </div>
      )}
    </div>
  );
}


/* ═══════════════════════════════════════════
   VIEW 5: HOW IT WORKS
   ═══════════════════════════════════════════ */
function HowItWorksView() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: C.blueBg, color: C.brand, padding: '4px 14px', borderRadius: '.75rem', fontSize: 12, fontWeight: 600, marginBottom: 12 }}>
          {Icon.info(C.brand)} Salesforce Native Experience
        </span>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: C.text, margin: '0 0 10px', lineHeight: 1.3 }}>
          This Runs Natively in Salesforce
        </h1>
        <p style={{ fontSize: 14, color: C.textMuted, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          No separate app. No tab switching. Your SDRs work the AI-powered action queue directly inside Salesforce using Lightning Web Components and native Sales Cloud features.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 40 }}>
        <FlowStep n="1" icon={Icon.database} color={C.brand} title="Signals Flow In"
          desc="Clay enrichment, website tracking, email engagement, and LinkedIn signals pipe into Salesforce objects in real-time."
          items={['Clay enriches contacts with firmographic data','Website visits tracked via Web-to-Lead','Email opens, clicks, and replies scored','LinkedIn engagement via Sales Navigator','Job postings and news alerts via triggers']}
        />
        <FlowStep n="2" icon={Icon.cpu} color={C.brand} title="AI Prioritizes & Sequences"
          desc="Daily at 6 AM, AI scores all accounts, generates the action queue, and drafts personalized outreach."
          items={['Account scoring: Fit + Intent + Timing','Action sequencing by priority','Personalized call scripts generated','Email drafts written with context','Queue optimized for conversion']}
        />
        <FlowStep n="3" icon={Icon.monitor} color={C.navBg} title="SDR Executes from Salesforce"
          desc="Reps work the queue inside Salesforce using the native dialer, email composer, and Lightning components."
          items={['Action queue on Lightning dashboard','Click-to-call with Salesforce dialer','Pre-drafted emails sent via Salesforce','Activities auto-logged to CRM','Real-time pipeline tracking']}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <div style={{
          background: C.navBg, color: '#fff', padding: '12px 28px', borderRadius: '.25rem',
          fontSize: 14, fontWeight: 600, boxShadow: '0 4px 12px rgba(0,0,0,.2)',
        }}>
          No separate app. No tab switching. No learning curve.
        </div>
      </div>

      <SLDSCard title="Built on Salesforce's Platform" style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6, margin: '0 0 14px' }}>
          This entire experience leverages Salesforce's native extensibility — no third-party iframe hacks or external tools.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <TechBlock title="Lightning Web Components" desc="The action queue, call scripts, and AI insights render directly on contact and account records. SDRs see everything in context without leaving the record." />
          <TechBlock title="Salesforce Flows" desc="Automated flows handle signal scoring, action queue generation, and outreach drafting. The 6 AM daily queue build runs as a scheduled Salesforce Flow." />
          <TechBlock title="Salesforce API Integration" desc="Real-time data sync between Clay enrichment, AI scoring engine, and Salesforce objects. Custom objects store action queue state and AI recommendations." />
          <TechBlock title="Native Dialer + Email" desc="Calls are made through Salesforce's built-in dialer. Emails sent through Salesforce email actions. Everything is automatically logged." />
        </div>
      </SLDSCard>

      <SLDSCard title="Frequently Asked Questions">
        <FAQItem q="Can this really run inside Salesforce?" a="Yes. Using Lightning Web Components, Salesforce Flows, and the Salesforce API, the entire experience lives on the contact and account record within Sales Cloud. Your SDRs never leave Salesforce." />
        <FAQItem q="What Salesforce edition do I need?" a="This requires Salesforce Sales Cloud Enterprise or above, with Lightning Experience enabled. Most mid-market companies already have these editions." />
        <FAQItem q="How long does implementation take?" a="Typical implementation is 2-3 weeks. Week 1: Salesforce configuration and data enrichment setup. Week 2: AI scoring calibration and action queue flows. Week 3: SDR training and go-live." />
        <FAQItem q="Does this replace our existing Salesforce workflows?" a="No — it enhances them. Your existing flows, email templates, and automation continue to work. The AI action queue layers on top, providing intelligent prioritization and pre-built outreach through your existing Salesforce infrastructure." />
      </SLDSCard>
    </div>
  );
}

function FlowStep({ n, icon, color, title, desc, items }) {
  return (
    <SLDSCard>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: '.25rem', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon(color)}</div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '.5px' }}>Step {n}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{title}</div>
        </div>
      </div>
      <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6, margin: '0 0 10px' }}>{desc}</p>
      <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 12, color: C.textMuted, padding: '2px 0', display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: color, flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>
    </SLDSCard>
  );
}

function TechBlock({ title, desc }) {
  return (
    <div style={{ background: C.bg, borderRadius: C.cardRadius, padding: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 3 }}>{title}</div>
      <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.borderLight}`, padding: '10px 0' }}>
      <div onClick={() => setOpen(!open)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{q}</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>{Icon.chevronDown(C.textMuted)}</span>
      </div>
      {open && <div style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.7, marginTop: 6, animation: 'fadeIn 0.2s ease' }}>{a}</div>}
    </div>
  );
}
