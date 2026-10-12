import Link from "next/link";
import styles from "./HowToRegister.module.css";

const steps = [
  {
    number: 1,
    title: "Create Account or Login",
    content: (
      <>
        Click the <strong>&quot;Registration&quot;</strong> button on the Navbar, then
        select <strong>&quot;Online Registration&quot;</strong> from the dropdown menu to
        create an account or login.
        <br />
        <br />
        Fill out the registration form, accept the Terms and Conditions, then
        click <strong>&quot;Register&quot;</strong>.
        <br />
        <br />
        Go to the email address you supplied to verify your account. Once in
        your inbox, click on <strong>&quot;Verify email address&quot;</strong>. You will
        then be taken to Step 2, or login to your account if you have already
        registered.
      </>
    ),
    dark: false,
  },
  {
    number: 2,
    title: "Register your Business Premises",
    content: (
      <>
        Login with the email and password you supplied when creating the
        account in Step 1.
        <br />
        <br />
        Once in your Dashboard, click on <strong>&quot;Business&quot;</strong> in the
        sidebar on the left side of your dashboard.
        <br />
        <br />
        Under <strong>&quot;My Registered Business&quot;</strong>, click on{" "}
        <strong>&quot;Click here to register your business&quot;</strong>.
        <br />
        <br />
        Fill in the required fields and then click <strong>&quot;Save&quot;</strong>.
      </>
    ),
    dark: true,
  },
  {
    number: 3,
    title: "Generate Invoice and Make Payment",
    content: (
      <>
        Once you click <strong>&quot;Save&quot;</strong> in Step 2, a summary of all the
        information entered in Step 2 will be displayed.
        <br />
        <br />
        Click <strong>&quot;Pay Now&quot;</strong> at the bottom of the page to make your
        payment. You will be taken to the Nasarawa Central Billing System to
        complete your payment.
        <br />
        <br />
        Select your preferred payment method. If you select{" "}
        <strong>&quot;Online Payment&quot;</strong>, click <strong>&quot;Pay&quot;</strong>.
      </>
    ),
    dark: false,
  },
  {
    number: 4,
    title: "Online Payment",
    content: (
      <>
        Once you click <strong>&quot;Pay&quot;</strong> in Step 3, a pop-up window will
        be displayed with your <strong>&quot;Payment Reference&quot;</strong>.
        <br />
        <br />
        Take note of your payment reference, then click{" "}
        <strong>&quot;Proceed to Payment&quot;</strong>.
        <br />
        <br />
        Fill in your debit card details and confirm your payment. Once your
        payment is successful, you will be redirected to the MTII Portal.
        <br />
        <br />
        Download your receipt after successful payment.
      </>
    ),
    dark: true,
  },
  {
    number: 5,
    title: "Upload Documents",
    content: (
      <>
        If you are registering a{" "}
        <strong>Co-operative Society, NGO, CBO, or FBO</strong>, this step is
        necessary.
        <br />
        <br />
        You are required to upload your by-laws and the names of ten members of
        the organisation at the time of registration.
        <br />
        <br />
        If you do not have by-laws, click <strong>&quot;Download By-laws&quot;</strong>{" "}
        according to your organisation type.
        <br />
        <br />
        Fill in the names of all ten people online in the case of FBOs. Save
        all information and print out the summary for your records.
      </>
    ),
    dark: false,
  },
  {
    number: 6,
    title: "Registration Successful",
    content: (
      <>
        Once you have completed the five steps above and the administrator
        approves your registration, an email will be sent to you containing
        your registration certificate.
        <br />
        <br />
        This means that your registration has been successfully completed.
      </>
    ),
    dark: true,
  },
];

export default function HowToRegister() {
  return (
    <div className={styles.howToRegister}>
      {/* Heading */}
      <div className={styles.intro}>
        <span className={styles.contentLabel}>STEPS</span>

        <h2>How To Register</h2>

        <p>
          To register a business name, business premises, or a cooperative
          society, you need to follow specific procedures defined by Nasarawa
          State MTII. Follow the six (6) steps below to register your
          organisation:
        </p>
      </div>

      {/* Steps */}
      <div className={styles.steps}>
        {steps.map((step) => (
          <div className={styles.step} key={step.number}>
            {/* Step Number */}
            <div className={styles.stepNumberWrapper}>
              <div className={styles.stepNumber}>{step.number}</div>

              <span>Step</span>
            </div>

            {/* Step Content */}
            <div
              className={`${styles.stepCard} ${
                step.dark ? styles.darkCard : styles.lightCard
              }`}
            >
              <h3>{step.title}</h3>

              <div className={styles.stepText}>{step.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Buttons */}
      <div className={styles.registrationSection}>
        <p>
          To Register Business Premises, Co-operative Society, NGO/CBO, or FBO,
          click the applicable button below:
        </p>

        <div className={styles.registrationButtons}>
          <Link
            href="/registration/business"
            className={styles.registrationButton}
          >
            Register Business Premises/Name
            <span>→</span>
          </Link>

          <Link
            href="/registration/cooperative"
            className={styles.registrationButton}
          >
            Register Cooperative/NGO/FBO/CBO
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}