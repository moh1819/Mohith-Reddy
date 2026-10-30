import React, { useState } from 'react';
import { LayoutDashboard, FileText, BarChart3, Users, Bell, CheckCircle2, Clock, AlertTriangle, FileSpreadsheet, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';
import { monthlyChartData } from '../data/mockData';

export default function CivicFlowDashboard({ applications, onNavigateToForm, onNavigateToGrid }) {
  const [activeNav, setActiveNav] = useState('overview');

  // Compute live metrics dynamically from the application state
  const totalApps = applications.length;
  const approvedApps = applications.filter(a => a.status === 'Approved').length;
  const pendingApps = applications.filter(a => a.status.includes('Review')).length;
  const rejectedApps = applications.filter(a => a.status === 'Rejected').length;

  const approvalRate = totalApps > 0 ? Math.round((approvedApps / totalApps) * 100) : 0;

  return (
    <div className="civicflow-container">
      {/* Enterprise System Status Bar */}
      <div className="civicflow-disclaimer" style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success-600)' }}></span>
          <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>CIVICFLOW PRODUCTION CORE • SYSTEM OPERATIONAL</span>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
          <span>LATENCY: 14ms</span>
          <span>UPTIME: 99.98%</span>
          <span>CLUSTER: US-CENTRAL-AZURE</span>
        </div>
      </div>

      <div className="civicflow-app-layout">
        {/* Enterprise Vertical Sidebar */}
        <aside className="civicflow-sidebar" aria-label="CivicFlow Navigation">
          <div className="civicflow-nav-group">
            <h4>Application Modules</h4>
            <button
              className={`cf-nav-item ${activeNav === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveNav('overview')}
            >
              <LayoutDashboard size={16} /> Operational Overview
            </button>
            <button
              className={`cf-nav-item ${activeNav === 'applications' ? 'active' : ''}`}
              onClick={() => { setActiveNav('applications'); onNavigateToGrid(); }}
            >
              <FileSpreadsheet size={16} /> Applications Registry
            </button>
            <button
              className={`cf-nav-item ${activeNav === 'new' ? 'active' : ''}`}
              onClick={() => { setActiveNav('new'); onNavigateToForm(); }}
            >
              <FileText size={16} /> New Application Intake
            </button>
          </div>

          <div className="civicflow-nav-group" style={{ marginTop: '2rem' }}>
            <h4>Backend Telemetry</h4>
            <div style={{ padding: '0.85rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Architecture Stack
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, marginTop: '0.35rem', color: 'var(--color-primary-600)' }}>
                ASP.NET Core 8 Web API
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Entity Framework Core • SQL Server • Oracle DB
              </div>
            </div>
          </div>
        </aside>

        {/* Dashboard Main Content Panel */}
        <div className="civicflow-main-panel">
          {/* Top Bar inside Application */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Program Grants & Service Administration</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Fiscal Year 2026 • Real-Time Application Intake, Adjudication & Audit Metrics
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn btn-secondary btn-sm" onClick={onNavigateToGrid}>
                <FileSpreadsheet size={14} /> Open Full Registry
              </button>
              <button className="btn btn-primary btn-sm" onClick={onNavigateToForm}>
                <FileText size={14} /> + New Application
              </button>
            </div>
          </div>

          {/* 4 KPI Metrics */}
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-card-info">
                <p>Total Filings</p>
                <h3>{totalApps}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success-600)', fontWeight: 600 }}>
                  ↑ 14% vs previous quarter
                </span>
              </div>
              <div className="kpi-icon-wrap" style={{ background: 'var(--color-primary-100)', color: 'var(--color-primary-700)' }}>
                <FileText size={22} />
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-card-info">
                <p>Approved & Disbursed</p>
                <h3 style={{ color: 'var(--color-success-600)' }}>{approvedApps}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {approvalRate}% overall approval rate
                </span>
              </div>
              <div className="kpi-icon-wrap" style={{ background: 'var(--color-success-100)', color: 'var(--color-success-700)' }}>
                <CheckCircle2 size={22} />
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-card-info">
                <p>Under Adjudication</p>
                <h3 style={{ color: 'var(--color-warning-600)' }}>{pendingApps}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Avg. 3.8 days review time
                </span>
              </div>
              <div className="kpi-icon-wrap" style={{ background: 'var(--color-warning-100)', color: 'var(--color-warning-700)' }}>
                <Clock size={22} />
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-card-info">
                <p>Disallowed / Incomplete</p>
                <h3 style={{ color: 'var(--color-danger-600)' }}>{rejectedApps}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Awaiting remediation
                </span>
              </div>
              <div className="kpi-icon-wrap" style={{ background: 'var(--color-danger-100)', color: 'var(--color-danger-700)' }}>
                <AlertTriangle size={22} />
              </div>
            </div>
          </div>

          {/* Charts & Status Breakdown Grid */}
          <div className="charts-split-grid">
            {/* Monthly Trend Bar Chart */}
            <div className="chart-card">
              <div className="chart-card-header">
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Monthly Application Volume Trends</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Approved vs In-Progress Filings</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ width: '10px', height: '10px', background: 'var(--color-primary-600)', borderRadius: '2px' }}></span> Approved
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ width: '10px', height: '10px', background: '#f59e0b', borderRadius: '2px' }}></span> Pending
                  </span>
                </div>
              </div>

              {/* Accessible SVG Bar Chart */}
              <div className="custom-bar-chart" role="img" aria-label="Monthly application submission trend bar chart">
                {monthlyChartData.map((d, idx) => {
                  const maxH = 100;
                  const approvedHeight = (d.approved / maxH) * 140;
                  const pendingHeight = (d.pending / maxH) * 140;
                  return (
                    <div key={idx} className="bar-col">
                      <div className="bar-fill-track">
                        <div
                          className="bar-fill-approved"
                          style={{ height: `${approvedHeight}px` }}
                          title={`${d.month}: ${d.approved} approved`}
                        ></div>
                        <div
                          className="bar-fill-pending"
                          style={{ height: `${pendingHeight}px` }}
                          title={`${d.month}: ${d.pending} pending`}
                        ></div>
                      </div>
                      <span className="bar-label">{d.month.split(' ')[0]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Program Portfolio Health */}
            <div className="chart-card">
              <div className="chart-card-header">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Program Compliance & Health</h4>
              </div>

              <div className="donut-stat-row">
                <div className="status-progress-item">
                  <div className="status-label-row">
                    <span>Approved & Validated</span>
                    <span style={{ color: 'var(--color-success-600)' }}>{approvalRate}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${approvalRate}%`, background: 'var(--color-success-600)' }}></div>
                  </div>
                </div>

                <div className="status-progress-item">
                  <div className="status-label-row">
                    <span>Adjudication Pending</span>
                    <span style={{ color: 'var(--color-warning-600)' }}>
                      {totalApps > 0 ? Math.round((pendingApps / totalApps) * 100) : 0}%
                    </span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${totalApps > 0 ? (pendingApps / totalApps) * 100 : 0}%`, background: 'var(--color-warning-600)' }}></div>
                  </div>
                </div>

                <div className="status-progress-item">
                  <div className="status-label-row">
                    <span>Disallowed / Returned</span>
                    <span style={{ color: 'var(--color-danger-600)' }}>
                      {totalApps > 0 ? Math.round((rejectedApps / totalApps) * 100) : 0}%
                    </span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${totalApps > 0 ? (rejectedApps / totalApps) * 100 : 0}%`, background: 'var(--color-danger-600)' }}></div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', padding: '0.85rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.82rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={15} color="var(--color-success-600)" /> Statutory Compliance
                  </div>
                  <div style={{ color: 'var(--text-muted)' }}>
                    97.2% of program applications meet the statutory 5-business-day adjudication requirement.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Recent Applications Row */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700 }}>Recent Submissions Log</h4>
              <button
                className="btn btn-outline btn-sm"
                onClick={onNavigateToGrid}
              >
                View Complete Registry <ArrowUpRight size={13} />
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {applications.slice(0, 3).map((item) => (
                <div key={item.id} style={{ padding: '0.85rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.8rem', color: 'var(--color-primary-600)' }}>{item.id}</span>
                    <span className={`table-status-pill ${item.status === 'Approved' ? 'pill-approved' : item.status === 'Rejected' ? 'pill-rejected' : 'pill-review'}`}>
                      {item.status}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{item.applicantName}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.organization}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, marginTop: '0.4rem', color: 'var(--text-main)' }}>{item.amountRequested}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
