import "./FAQ.css";

function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-box">

        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Have questions? We've got answers.
        </p>

        <details className="faq-item">
          <summary>What services do you offer?</summary>
          <p>
            We offer Web Development, UI/UX Design, Mobile App Development,
            Digital Marketing, and Branding solutions.
          </p>
        </details>

        <details className="faq-item">
          <summary>How long does it take to complete a project?</summary>
          <p>
            Most projects are completed within 2–6 weeks depending on the
            complexity and requirements.
          </p>
        </details>

        <details className="faq-item">
          <summary>Do you provide support after project delivery?</summary>
          <p>
            Yes, we provide maintenance, updates, and technical support after
            project delivery.
          </p>
        </details>

        <details className="faq-item">
          <summary>Can I request custom features?</summary>
          <p>
            Absolutely! We build custom solutions tailored to your business
            needs.
          </p>
        </details>

        <details className="faq-item">
          <summary>How can I contact your team?</summary>
          <p>
            You can contact us through the Contact Form, Email, or Phone
            available on our website.
          </p>
        </details>

      </div>
    </section>
  );
}

export default Faq;