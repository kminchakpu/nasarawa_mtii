
"use client";

import { FormEvent, useState } from "react";
import styles from "./GRMApplicationForm.module.css";

const complaintCategories = [
  "Harassment",
  "Unauthorized payments",
  "Extortion",
  "Delay in service delivery",
  "Unfair treatment",
  "Misconduct by an officer",
  "Improper handling of business registration",
  "Other",
];

const receiptModes = ["Writing", "Verbal", "Phone", "SMS", "Email"];

const initialForm = {
  receivingOfficer: "",
  receiptMode: "",
  fullName: "",
  residentialAddress: "",
  businessAddress: "",
  telephone: "",
  email: "",
  vehicleNumber: "",
  complaintType: "",
  otherComplaintType: "",
  responsibleMda: "",
  description: "",
  evidenceDetails: "",
  amountLost: "",
  respondentName: "",
  respondentMda: "",
  respondentDesignation: "",
  respondentTelephone: "",
  respondentEmail: "",
  redressSought: "",
  responseDate: "",
  consent: false,
};

type FormData = typeof initialForm;

export default function GRMApplicationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  function updateField<K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleEvidenceChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const files = Array.from(event.target.files ?? []);
    const maxFileSize = 5 * 1024 * 1024;
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const invalidFile = files.find(
      (file) =>
        file.size > maxFileSize || !allowedTypes.includes(file.type),
    );

    if (invalidFile) {
      window.alert(
        "Please select PDF, JPG, PNG, or WEBP files no larger than 5 MB each.",
      );
      event.target.value = "";
      return;
    }

    setEvidenceFiles(files);
  }

  function handleContinue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;

    if (!formElement.reportValidity()) {
      return;
    }

    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.consent) {
      window.alert("Please confirm the declaration before continuing.");
      return;
    }

    /*
     * DEMO ONLY:
     * This generates a temporary reference in the browser.
     * It does not submit or save a complaint to the ministry.
     * Replace this section with a POST request to your secure API.
     */
    const reference = `MTII-GRM-${new Date().getFullYear()}-${Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase()}`;

    setReferenceNumber(reference);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setForm(initialForm);
    setEvidenceFiles([]);
    setStep(1);
    setSubmitted(false);
    setReferenceNumber("");
  }

  if (submitted) {
    return (
      <section className={styles.successCard} aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">
          ✓
        </div>
        <p className={styles.eyebrow}>APPLICATION PREVIEW COMPLETE</p>
        <h2>Your complaint form is ready</h2>
        <p>
          Your form has passed the browser demonstration workflow. No
          complaint has been sent to MTII, and the reference below is not
          an official ministry reference number.
        </p>

        <div className={styles.referenceBox}>
          <span>Demo reference number</span>
          <strong>{referenceNumber}</strong>
        </div>

        <button
          type="button"
          className={styles.primaryButton}
          onClick={resetForm}
        >
          Start a new application
        </button>
      </section>
    );
  }

  return (
    <section className={styles.formWrapper}>
      <div className={styles.formIntro}>
        <div>
          <p className={styles.eyebrow}>GRIEVANCE REDRESS MECHANISM</p>
          <h2>Complaint Application Form</h2>
          <p>
            Complete the form as accurately as possible. Fields marked
            with an asterisk (*) are required.
          </p>
        </div>

        <div className={styles.stepIndicator}>
          <span className={step === 1 ? styles.activeStep : ""}>1</span>
          <div />
          <span className={step === 2 ? styles.activeStep : ""}>2</span>
        </div>
        <p className={styles.stepLabel}>
          Step {step} of 2: {step === 1 ? "Complaint details" : "Review"}
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleContinue} className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend>
              <span>01</span> Complaint registration
            </legend>

            <div className={styles.fieldGrid}>
              <label className={styles.field}>
                Date of complaint
                <input
                  type="date"
                  value={undefined}
                  disabled
                  aria-label="Date of complaint is recorded by the ministry"
                />
                <small>
                  The official receiving date should be recorded by the
                  ministry when the complaint is received.
                </small>
              </label>

              <label className={styles.field}>
                Complaint number
                <input
                  type="text"
                  value="Assigned by MTII"
                  disabled
                />
                <small>
                  An official complaint number must be assigned by the
                  ministry system.
                </small>
              </label>

              <label className={styles.field}>
                Name of receiving officer
                <input
                  value={form.receivingOfficer}
                  onChange={(e) =>
                    updateField("receivingOfficer", e.target.value)
                  }
                  placeholder="For ministry staff use"
                  maxLength={120}
                />
              </label>

              <label className={styles.field}>
                Mode of receipt <span>*</span>
                <select
                  required
                  value={form.receiptMode}
                  onChange={(e) =>
                    updateField("receiptMode", e.target.value)
                  }
                >
                  <option value="">Select mode</option>
                  {receiptModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>
              <span>02</span> Complainant details
            </legend>

            <div className={styles.fieldGrid}>
              <label className={styles.field}>
                Full name <span>*</span>
                <input
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) =>
                    updateField("fullName", e.target.value)
                  }
                  placeholder="Enter your full name"
                  maxLength={150}
                />
              </label>

              <label className={styles.field}>
                Telephone number <span>*</span>
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  value={form.telephone}
                  onChange={(e) =>
                    updateField("telephone", e.target.value)
                  }
                  placeholder="+234..."
                  maxLength={30}
                />
              </label>

              <label className={styles.field}>
                Email address
                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  maxLength={254}
                />
              </label>

              <label className={styles.field}>
                Vehicle number (if applicable)
                <input
                  value={form.vehicleNumber}
                  onChange={(e) =>
                    updateField("vehicleNumber", e.target.value)
                  }
                  placeholder="Enter vehicle registration number"
                  maxLength={30}
                />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                Residential address <span>*</span>
                <textarea
                  required
                  rows={2}
                  autoComplete="street-address"
                  value={form.residentialAddress}
                  onChange={(e) =>
                    updateField("residentialAddress", e.target.value)
                  }
                  placeholder="Enter your residential address"
                  maxLength={1000}
                />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                Business or office address
                <textarea
                  rows={2}
                  value={form.businessAddress}
                  onChange={(e) =>
                    updateField("businessAddress", e.target.value)
                  }
                  placeholder="Enter your business or office address, if applicable"
                  maxLength={1000}
                />
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>
              <span>03</span> Complaint details
            </legend>

            <div className={styles.fieldGrid}>
              <label className={styles.field}>
                Type of complaint <span>*</span>
                <select
                  required
                  value={form.complaintType}
                  onChange={(e) =>
                    updateField("complaintType", e.target.value)
                  }
                >
                  <option value="">Select complaint type</option>
                  {complaintCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              {form.complaintType === "Other" && (
                <label className={styles.field}>
                  Specify complaint type <span>*</span>
                  <input
                    required
                    value={form.otherComplaintType}
                    onChange={(e) =>
                      updateField("otherComplaintType", e.target.value)
                    }
                    maxLength={150}
                    placeholder="Describe the complaint category"
                  />
                </label>
              )}

              <label className={styles.field}>
                Responsible MDA <span>*</span>
                <input
                  required
                  value={form.responsibleMda}
                  onChange={(e) =>
                    updateField("responsibleMda", e.target.value)
                  }
                  placeholder="Ministry, department or agency"
                  maxLength={200}
                />
              </label>

              <label className={styles.field}>
                Amount lost (₦), if applicable
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.amountLost}
                  onChange={(e) =>
                    updateField("amountLost", e.target.value)
                  }
                  placeholder="0.00"
                />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                Description of complaint <span>*</span>
                <textarea
                  required
                  rows={6}
                  value={form.description}
                  onChange={(e) =>
                    updateField("description", e.target.value)
                  }
                  placeholder="Explain what happened, where and when it happened, and any relevant details."
                  maxLength={10000}
                />
                <small>
                  Do not include passwords, bank PINs, or unrelated
                  sensitive personal information.
                </small>
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>
              <span>04</span> Supporting evidence
            </legend>

            <div className={styles.fieldGrid}>
              <label className={`${styles.field} ${styles.fullWidth}`}>
                Details of accompanying evidence
                <textarea
                  rows={3}
                  value={form.evidenceDetails}
                  onChange={(e) =>
                    updateField("evidenceDetails", e.target.value)
                  }
                  placeholder="Describe any receipts, letters, photographs, or other supporting documents."
                  maxLength={3000}
                />
              </label>

              <label className={`${styles.field} ${styles.fullWidth}`}>
                Attach supporting documents
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  onChange={handleEvidenceChange}
                />
                <small>
                  PDF or image files only, up to 5 MB per file. Do not
                  upload documents you are not authorized to share.
                </small>
              </label>

              {evidenceFiles.length > 0 && (
                <div className={`${styles.fullWidth} ${styles.fileList}`}>
                  <strong>Selected files</strong>
                  {evidenceFiles.map((file) => (
                    <div key={`${file.name}-${file.size}`}>
                      <span>{file.name}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setEvidenceFiles((current) =>
                            current.filter((item) => item !== file),
                          )
                        }
                        aria-label={`Remove ${file.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>
              <span>05</span> Respondent details
            </legend>

            <p className={styles.fieldsetHelp}>
              Complete these fields if you know the details of the person
              or office involved.
            </p>

            <div className={styles.fieldGrid}>
              <label className={styles.field}>
                Full name
                <input
                  value={form.respondentName}
                  onChange={(e) =>
                    updateField("respondentName", e.target.value)
                  }
                  maxLength={150}
                />
              </label>

              <label className={styles.field}>
                Responsible MDA
                <input
                  value={form.respondentMda}
                  onChange={(e) =>
                    updateField("respondentMda", e.target.value)
                  }
                  maxLength={200}
                />
              </label>

              <label className={styles.field}>
                Designation
                <input
                  value={form.respondentDesignation}
                  onChange={(e) =>
                    updateField("respondentDesignation", e.target.value)
                  }
                  maxLength={150}
                />
              </label>

              <label className={styles.field}>
                Telephone number
                <input
                  type="tel"
                  value={form.respondentTelephone}
                  onChange={(e) =>
                    updateField("respondentTelephone", e.target.value)
                  }
                  maxLength={30}
                />
              </label>

              <label className={styles.field}>
                Email address
                <input
                  type="email"
                  value={form.respondentEmail}
                  onChange={(e) =>
                    updateField("respondentEmail", e.target.value)
                  }
                  maxLength={254}
                />
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>
              <span>06</span> Redress sought
            </legend>

            <label className={styles.field}>
              What action or resolution are you seeking? <span>*</span>
              <textarea
                required
                rows={5}
                value={form.redressSought}
                onChange={(e) =>
                  updateField("redressSought", e.target.value)
                }
                placeholder="Explain what you would like MTII or the responsible MDA to do to address your complaint."
                maxLength={5000}
              />
            </label>
          </fieldset>

          <div className={styles.notice}>
            <strong>Before you continue</strong>
            <p>
              Review your information for accuracy. Only provide details
              relevant to your complaint. The ministry should publish its
              privacy notice and official complaint-handling procedure
              before this form is used to collect real submissions.
            </p>
          </div>

          <div className={styles.formActions}>
            <button type="reset" className={styles.secondaryButton} onClick={resetForm}>
              Clear form
            </button>
            <button type="submit" className={styles.primaryButton}>
              Review application <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.reviewNotice}>
            <strong>Review your application</strong>
            <p>
              Confirm that the information below is correct before
              completing the demonstration workflow.
            </p>
          </div>

          <div className={styles.reviewGrid}>
            <ReviewItem label="Full name" value={form.fullName} />
            <ReviewItem label="Telephone" value={form.telephone} />
            <ReviewItem label="Email" value={form.email} />
            <ReviewItem label="Mode of receipt" value={form.receiptMode} />
            <ReviewItem
              label="Complaint type"
              value={
                form.complaintType === "Other"
                  ? form.otherComplaintType
                  : form.complaintType
              }
            />
            <ReviewItem
              label="Responsible MDA"
              value={form.responsibleMda}
            />
            <ReviewItem
              label="Residential address"
              value={form.residentialAddress}
            />
            <ReviewItem
              label="Business address"
              value={form.businessAddress}
            />
            <ReviewItem
              label="Amount lost"
              value={
                form.amountLost
                  ? `₦${Number(form.amountLost).toLocaleString("en-NG")}`
                  : "Not specified"
              }
            />
            <ReviewItem
              label="Description"
              value={form.description}
            />
            <ReviewItem
              label="Evidence details"
              value={form.evidenceDetails}
            />
            <ReviewItem
              label="Evidence files"
              value={
                evidenceFiles.length
                  ? evidenceFiles.map((file) => file.name).join(", ")
                  : "No files attached"
              }
            />
            <ReviewItem
              label="Respondent"
              value={form.respondentName}
            />
            <ReviewItem
              label="Respondent MDA"
              value={form.respondentMda}
            />
            <ReviewItem
              label="Respondent designation"
              value={form.respondentDesignation}
            />
            <ReviewItem
              label="Respondent telephone"
              value={form.respondentTelephone}
            />
            <ReviewItem
              label="Respondent email"
              value={form.respondentEmail}
            />
            <ReviewItem
              label="Redress sought"
              value={form.redressSought}
            />
          </div>

          <label className={styles.consent}>
            <input
              type="checkbox"
              required
              checked={form.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
            />
            <span>
              I confirm that the information I have provided is accurate
              to the best of my knowledge and understand that it may be
              reviewed by authorized personnel for the purpose of
              addressing this complaint.
            </span>
          </label>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => {
                setStep(1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ← Edit application
            </button>
            <button type="submit" className={styles.primaryButton}>
              Complete demo submission
            </button>
          </div>

          <p className={styles.demoWarning}>
            Demo only — this action does not transmit your complaint to
            MTII.
          </p>
        </form>
      )}
    </section>
  );
}

function ReviewItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className={styles.reviewItem}>
      <span>{label}</span>
      <p>{value.trim() || "Not provided"}</p>
    </div>
  );
}
