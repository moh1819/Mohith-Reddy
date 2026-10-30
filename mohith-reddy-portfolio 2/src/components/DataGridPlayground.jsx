import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, Download, Filter, Eye, X, Check, AlertCircle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DataGridPlayground({ applications, onShowToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortField, setSortField] = useState('submittedDate');
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const pageSize = 5;

  // Filter and Sort Logic
  const filteredAndSortedRecords = useMemo(() => {
    return applications
      .filter((item) => {
        const matchesSearch =
          item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.program.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
  }, [applications, searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedRecords.length / pageSize) || 1;
  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAndSortedRecords.slice(start, start + pageSize);
  }, [filteredAndSortedRecords, currentPage, pageSize]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // CSV Export Functionality
  const handleExportCSV = () => {
    const headers = ['Application ID,Applicant Name,Organization,Program,Submitted Date,Amount Requested,Status,Compliance Score\n'];
    const rows = filteredAndSortedRecords.map(r =>
      `"${r.id}","${r.applicantName}","${r.organization}","${r.program}","${r.submittedDate}","${r.amountRequested}","${r.status}","${r.complianceScore}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + headers.concat(rows).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Applications_Registry_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast(`Exported ${filteredAndSortedRecords.length} records to CSV`);
  };

  return (
    <div className="data-grid-container">
      {/* Grid Toolbar */}
      <div className="data-grid-toolbar">
        <div className="grid-search-wrap">
          <Search size={16} className="grid-search-icon" aria-hidden="true" />
          <input
            type="search"
            className="grid-input"
            placeholder="Search by ID, applicant, or org..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            aria-label="Search application records"
          />
        </div>

        <div className="grid-filters">
          <label htmlFor="status-select" className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>Filter by Status</label>
          <select
            id="status-select"
            className="grid-select"
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
          >
            <option value="All">All Statuses ({applications.length})</option>
            <option value="Approved">Approved</option>
            <option value="Under Review">Under Review</option>
            <option value="Pending Review">Pending Review</option>
            <option value="Rejected">Rejected</option>
          </select>

          <button
            className="btn btn-secondary btn-sm"
            onClick={() => { setSearchTerm(''); setStatusFilter('All'); setCurrentPage(1); }}
            title="Reset Filters"
          >
            <RefreshCw size={14} /> Clear
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={handleExportCSV}
            title="Export filtered records to CSV"
          >
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <table className="enterprise-table" aria-label="Enterprise Application Records Table">
          <thead>
            <tr>
              <th scope="col" className="sortable" onClick={() => handleSort('id')}>
                Application ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th scope="col" className="sortable" onClick={() => handleSort('applicantName')}>
                Applicant & Organization {sortField === 'applicantName' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th scope="col" className="sortable" onClick={() => handleSort('program')}>
                Grant / Program {sortField === 'program' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th scope="col" className="sortable" onClick={() => handleSort('submittedDate')}>
                Submitted {sortField === 'submittedDate' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th scope="col" className="sortable" onClick={() => handleSort('amountRequested')}>
                Amount {sortField === 'amountRequested' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRecords.length > 0 ? (
              paginatedRecords.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-primary-600)' }}>
                    {item.id}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{item.applicantName}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.organization}</div>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{item.program}</td>
                  <td style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>{item.submittedDate}</td>
                  <td style={{ fontWeight: 600 }}>{item.amountRequested}</td>
                  <td>
                    <span className={`table-status-pill ${
                      item.status === 'Approved' ? 'pill-approved' :
                      item.status === 'Rejected' ? 'pill-rejected' : 'pill-review'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedRecord(item)}
                      aria-label={`View audit record for application ${item.id}`}
                    >
                      <Eye size={13} /> View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '3rem 1.5rem', color: 'var(--text-muted)' }}>
                  <AlertCircle size={32} style={{ display: 'block', margin: '0 auto 0.5rem', color: 'var(--text-subtle)' }} />
                  <p style={{ fontWeight: 600 }}>No application records match your current filter parameters.</p>
                  <button
                    className="btn btn-sm btn-outline"
                    style={{ marginTop: '0.75rem' }}
                    onClick={() => { setSearchTerm(''); setStatusFilter('All'); }}
                  >
                    Reset Filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Grid Pagination Footer */}
      <div className="grid-pagination-bar">
        <span>
          Showing <strong>{filteredAndSortedRecords.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}</strong> to{' '}
          <strong>{Math.min(currentPage * pageSize, filteredAndSortedRecords.length)}</strong> of{' '}
          <strong>{filteredAndSortedRecords.length}</strong> enterprise records
        </span>

        <div className="pagination-controls">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span style={{ display: 'flex', alignItems: 'center', padding: '0 0.5rem', fontWeight: 600, fontSize: '0.82rem' }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage >= totalPages}
            aria-label="Next page"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Record Audit Details Modal */}
      {selectedRecord && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-record-title">
          <div className="modal-dialog">
            <div className="modal-header">
              <h3 id="modal-record-title" style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                Application Record Audit: {selectedRecord.id}
              </h3>
              <button
                className="theme-toggle-btn"
                onClick={() => setSelectedRecord(null)}
                aria-label="Close record modal"
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="cs-box">
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Primary Applicant</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginTop: '0.2rem' }}>{selectedRecord.applicantName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{selectedRecord.organization}</div>
                </div>

                <div className="cs-box">
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 600 }}>Filing Status</div>
                  <div style={{ marginTop: '0.2rem' }}>
                    <span className={`table-status-pill ${
                      selectedRecord.status === 'Approved' ? 'pill-approved' :
                      selectedRecord.status === 'Rejected' ? 'pill-rejected' : 'pill-review'
                    }`}>
                      {selectedRecord.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Adjudicator: {selectedRecord.reviewedBy}</div>
                </div>
              </div>

              <div className="cs-box">
                <h4 style={{ marginBottom: '0.5rem' }}>Program & Funding Allocation</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Target Program:</span>
                  <span style={{ fontWeight: 600 }}>{selectedRecord.program}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Requested Amount:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-primary-600)' }}>{selectedRecord.amountRequested}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Automated Compliance Score:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-success-600)' }}>{selectedRecord.complianceScore}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedRecord(null)}>Close</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  onShowToast(`Audit report for ${selectedRecord.id} generated`);
                  setSelectedRecord(null);
                }}
              >
                Print Audit Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
