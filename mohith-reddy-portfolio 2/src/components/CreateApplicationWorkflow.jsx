import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, AlertCircle, FileCheck, ShieldCheck } from 'lucide-react';

export default function CreateApplicationWorkflow({ onApplicationCreated, onShowToast }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phone: '',
    organization: '',
    taxId: '',
    orgType: 'Non-Profit 501(c)(3)',
    program: 'Rural Nutrition & Food Access Grant',
    amountRequested: '',
    projectScope: '',
    agreeCompliance: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function per step
  const validateStep = (step) => {
    const errs = {};
    if (step === 1) {
      if (!formData.applicantName.trim()) errs.applicantName = 'Primary applicant full name is required.';
      if (!formData.email.trim()) {
        errs.email = 'Official contact email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Enter a valid corporate or agency email address.';
      }
      if (!formData.phone.trim()) errs.phone = 'Contact telephone is required.';
    } else if (step === 2) {
      if (!formData.organization.trim()) errs.organization = 'Legal entity or organization name is required.';
      if (!formData.taxId.trim()) {
        errs.taxId = 'Federal Tax ID (EIN) is required.';
      } else if (!/^\d{2}-\d{7}$/.test(formData.taxId)) {
        errs.taxId = 'Tax ID must follow standard XX-XXXXXXX format.';
      }
    } else if (step === 3) {
      if (!formData.amountRequested.trim()) {
        errs.amountRequested = 'Requested funding allocation amount is required.';
      } else if (isNaN(Number(formData.amountRequested.replace(/[^0-9.-]+/g, '')))) {
        errs.amountRequested = 'Please specify a valid numeric currency value.';
      }
      if (!formData.projectScope.trim()) errs.projectScope = 'Executive summary of program scope is required.';
    } else if (step === 4) {
      if (!formData.agreeCompliance) errs.agreeCompliance = 'You must certify compliance with state and federal regulations.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((s) => s - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(4)) {
      const newId = `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const formattedAmount = formData.amountRequested.startsWith('$')
        ? formData.amountRequested
        : `$${Number(formData.amountRequested).toLocaleString()}`;

      const newRecord = {
        id: newId,
        applicantName: formData.applicantName,
        organization: formData.organization,
        program: formData.program,
        submittedDate: new Date().toISOString().slice(0, 10),
        amountRequested: formattedAmount,
        status: 'Pending Review',
        priority: 'High',
        reviewedBy: 'Awaiting Assignment',
        complianceScore: '95%'
      };

      onApplicationCreated(newRecord);
      setIsSubmitted(true);
      onShowToast(`Application ${newId} recorded successfully.`);
    }
  };

  const handleResetForm = () => {
    setFormData({
      applicantName: '',
      email: '',
      phone: '',
      organization: '',
      taxId: '',
      orgType: 'Non-Profit 501(c)(3)',
      program: 'Rural Nutrition & Food Access Grant',
      amountRequested: '',
      projectScope: '',
      agreeCompliance: false
    });
    setErrors({});
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--card-shadow)' }}>
      {/* Stepper Progress */}
      <div className="workflow-stepper" aria-label="Application Progress Steps">
        {[
          { step: 1, title: 'Applicant' },
          { step: 2, title: 'Organization' },
          { step: 3, title: 'Program & Budget' },
          { step: 4, title: 'Review & Attest' }
        ].map((item) => (
          <div
            key={item.step}
            className={`step-indicator ${
              currentStep === item.step ? 'active' : currentStep > item.step ? 'completed' : ''
            }`}
          >
            <div className="step-bubble" aria-current={currentStep === item.step ? 'step' : undefined}>
              {currentStep > item.step ? <Check size={18} /> : item.step}
            </div>
            <span className="step-title">{item.title}</span>
          </div>
        ))}
      </div>

      {isSubmitted ? (
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
          <div style={{ width: '64px', height: '64px', background: 'var(--color-success-100)', color: 'var(--color-success-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <FileCheck size={36} />
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Application Successfully Filed</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 1.5rem' }}>
            Your application payload has passed all schema checks and is committed to the application state. It is immediately available in the Data Grid registry.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={handleResetForm}>
              Submit Another Application
            </button>
            <a href="#datagrid-section" className="btn btn-secondary">
              View in Data Grid
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Step 1: Applicant Information */}
          {currentStep === 1 && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Step 1: Primary Applicant Details</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Enter the authorized representative contact details for this filing.
              </p>

              <div className="form-group">
                <label className="form-label" htmlFor="applicantName">
                  <span>Full Legal Name</span>
                  <span className="form-label-required">*Required</span>
                </label>
                <input
                  id="applicantName"
                  name="applicantName"
                  type="text"
                  className={`form-control ${errors.applicantName ? 'has-error' : ''}`}
                  value={formData.applicantName}
                  onChange={handleChange}
                  placeholder="e.g. Margaret Sullivan"
                  aria-invalid={!!errors.applicantName}
                />
                {errors.applicantName && (
                  <div className="form-error-msg"><AlertCircle size={14} /> {errors.applicantName}</div>
                )}
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    <span>Email Address</span>
                    <span className="form-label-required">*Required</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? 'has-error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.org"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <div className="form-error-msg"><AlertCircle size={14} /> {errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    <span>Telephone</span>
                    <span className="form-label-required">*Required</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`form-control ${errors.phone ? 'has-error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 234-5678"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <div className="form-error-msg"><AlertCircle size={14} /> {errors.phone}</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Organization Details */}
          {currentStep === 2 && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Step 2: Organization & Entity Information</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Verify legal enterprise registry and tax identification credentials.
              </p>

              <div className="form-group">
                <label className="form-label" htmlFor="organization">
                  <span>Organization Legal Name</span>
                  <span className="form-label-required">*Required</span>
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  className={`form-control ${errors.organization ? 'has-error' : ''}`}
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Community Health & Food Security Alliance"
                  aria-invalid={!!errors.organization}
                />
                {errors.organization && (
                  <div className="form-error-msg"><AlertCircle size={14} /> {errors.organization}</div>
                )}
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="taxId">
                    <span>Federal Tax ID (EIN)</span>
                    <span className="form-label-required">*Required (XX-XXXXXXX)</span>
                  </label>
                  <input
                    id="taxId"
                    name="taxId"
                    type="text"
                    className={`form-control ${errors.taxId ? 'has-error' : ''}`}
                    value={formData.taxId}
                    onChange={handleChange}
                    placeholder="12-3456789"
                    aria-invalid={!!errors.taxId}
                  />
                  {errors.taxId && (
                    <div className="form-error-msg"><AlertCircle size={14} /> {errors.taxId}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="orgType">
                    <span>Entity Classification</span>
                  </label>
                  <select
                    id="orgType"
                    name="orgType"
                    className="form-control"
                    value={formData.orgType}
                    onChange={handleChange}
                  >
                    <option value="Non-Profit 501(c)(3)">Non-Profit 501(c)(3)</option>
                    <option value="Municipal Government">Municipal / County Government</option>
                    <option value="Public School District">Public School District / ESD</option>
                    <option value="Healthcare Provider">Healthcare Facility / Provider</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Program & Budget */}
          {currentStep === 3 && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Step 3: Program Selection & Funding Allocation</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Specify target initiative grant and requested capital expenditure.
              </p>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="program">
                    <span>Program Grant Line</span>
                  </label>
                  <select
                    id="program"
                    name="program"
                    className="form-control"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="Rural Nutrition & Food Access Grant">Rural Nutrition & Food Access Grant</option>
                    <option value="Senior Commodity Food Initiative">Senior Commodity Food Initiative</option>
                    <option value="Early Childhood Supplemental Nutrition">Early Childhood Supplemental Nutrition</option>
                    <option value="Cold-Chain Infrastructure Modernization">Cold-Chain Infrastructure Modernization</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="amountRequested">
                    <span>Requested Grant Amount ($ USD)</span>
                    <span className="form-label-required">*Required</span>
                  </label>
                  <input
                    id="amountRequested"
                    name="amountRequested"
                    type="text"
                    className={`form-control ${errors.amountRequested ? 'has-error' : ''}`}
                    value={formData.amountRequested}
                    onChange={handleChange}
                    placeholder="75,000"
                    aria-invalid={!!errors.amountRequested}
                  />
                  {errors.amountRequested && (
                    <div className="form-error-msg"><AlertCircle size={14} /> {errors.amountRequested}</div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectScope">
                  <span>Executive Statement of Scope</span>
                  <span className="form-label-required">*Required</span>
                </label>
                <textarea
                  id="projectScope"
                  name="projectScope"
                  rows="3"
                  className={`form-control ${errors.projectScope ? 'has-error' : ''}`}
                  value={formData.projectScope}
                  onChange={handleChange}
                  placeholder="Outline key deliverables, beneficiary population, and milestone schedule..."
                  aria-invalid={!!errors.projectScope}
                ></textarea>
                {errors.projectScope && (
                  <div className="form-error-msg"><AlertCircle size={14} /> {errors.projectScope}</div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Review and Submit */}
          {currentStep === 4 && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Step 4: Audit Review & Legal Certification</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Verify all parameters prior to committing this transaction into the system.
              </p>

              <div className="cs-box" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary-600)' }}>
                  <ShieldCheck size={18} /> Filing Summary Preview
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '0.75rem', fontSize: '0.88rem' }}>
                  <div><strong>Applicant:</strong> {formData.applicantName || 'N/A'}</div>
                  <div><strong>Email:</strong> {formData.email || 'N/A'}</div>
                  <div><strong>Organization:</strong> {formData.organization || 'N/A'}</div>
                  <div><strong>EIN:</strong> {formData.taxId || 'N/A'}</div>
                  <div><strong>Program:</strong> {formData.program}</div>
                  <div><strong>Requested Funding:</strong> ${Number(formData.amountRequested.replace(/[^0-9.-]+/g, '') || 0).toLocaleString()}</div>
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '0.88rem' }}>
                  <input
                    type="checkbox"
                    name="agreeCompliance"
                    checked={formData.agreeCompliance}
                    onChange={handleChange}
                    style={{ marginTop: '0.2rem', width: '18px', height: '18px' }}
                  />
                  <span>
                    I hereby certify that all information submitted in this electronic grant application is true, accurate, and in full compliance with Title 2 CFR Part 200 and relevant statutory guidelines.
                  </span>
                </label>
                {errors.agreeCompliance && (
                  <div className="form-error-msg" style={{ marginTop: '0.5rem' }}><AlertCircle size={14} /> {errors.agreeCompliance}</div>
                )}
              </div>
            </div>
          )}

          {/* Workflow Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
            {currentStep > 1 ? (
              <button type="button" className="btn btn-secondary" onClick={handleBack}>
                <ArrowLeft size={16} /> Previous Step
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 4 ? (
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary" style={{ background: 'var(--color-success-600)' }}>
                Confirm & Submit Application <Check size={16} />
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
