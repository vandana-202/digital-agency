import "./Testimonials.css";

function Testimonial() {
  return (
    <section className="testimonial-section">

      <div className="heading">
        <h2>What Our Clients Say</h2>
        <p>Our clients trust us for delivering high-quality digital solutions.</p>
      </div>

      <div className="testimonial-container">

        <div className="card">
          <p className="review">
            "The team delivered a modern and responsive website exactly as we
            expected. Their communication and professionalism were excellent."
          </p>

          <div className="client">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="Client"
            />

            <div>
              <h3>Sarah Johnson</h3>
              <span>CEO, TechNova</span>
            </div>
          </div>
        </div>

        <div className="card">
          <p className="review">
            "Outstanding service! The website looks amazing and works perfectly
            on every device. Highly recommended."
          </p>

          <div className="client">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Client"
            />

            <div>
              <h3>Michael Brown</h3>
              <span>Startup Founder</span>
            </div>
          </div>
        </div>

        <div className="card">
          <p className="review">
            "Very creative team. They completed our project on time and
            exceeded our expectations."
          </p>

          <div className="client">
            <img
              src="https://i.pravatar.cc/100?img=20"
              alt="Client"
            />

            <div>
              <h3>Emily Davis</h3>
              <span>Marketing Manager</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Testimonial;