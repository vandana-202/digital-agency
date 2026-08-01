import "./Contact.css";
function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-box">

        <h2>Contact Us</h2>

        <input 
          type="text" 
          placeholder="Your Name"
        />

        <input 
          type="email" 
          placeholder="Your Email"
        />

        <input 
          type="text" 
          placeholder="Your Phone"
        />

        <textarea 
          placeholder="Your Message"
        ></textarea>


        <button>
          Send Message
        </button>

      </div>

    </section>
  );
}

export default Contact;