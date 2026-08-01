import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-title">
        <h2>Our Services</h2>
        <p>
          We provide creative and innovative digital solutions to help your
          business grow online.
        </p>
      </div>

      <div className="services-container">

        <div className="service-card">
          <div className="icon">💻</div>
          <h3>Web Development</h3>
          <p>
            We build responsive, fast, and modern websites using the latest
            technologies.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🎨</div>
          <h3>UI/UX Design</h3>
          <p>
            Attractive and user-friendly interfaces that improve user
            experience.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📱</div>
          <h3>App Development</h3>
          <p>
            Create high-performance mobile applications for Android and iOS.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📈</div>
          <h3>Digital Marketing</h3>
          <p>
            Grow your business with SEO, social media marketing, and online
            advertising.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">☁️</div>
          <h3>Cloud Solutions</h3>
          <p>
            Secure cloud hosting and scalable infrastructure for your business.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🛠️</div>
          <h3>Maintenance</h3>
          <p>
            Regular updates, security improvements, and technical support.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;