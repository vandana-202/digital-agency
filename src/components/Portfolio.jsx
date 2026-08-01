import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">

      <div className="portfolio-heading">
        <h2>Our Portfolio</h2>
        <p>
          Explore some of our latest projects that showcase our creativity,
          innovation, and technical expertise.
        </p>
      </div>

      <div className="portfolio-container">

        <div className="portfolio-card">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Project"
          />
          <div className="portfolio-content">
            <h3>E-Commerce Website</h3>
            <p>
              Responsive online shopping platform built using React and modern
              UI design.
            </p>
            <button>View Project</button>
          </div>
        </div>

        <div className="portfolio-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Project"
          />
          <div className="portfolio-content">
            <h3>Business Dashboard</h3>
            <p>
              Analytics dashboard with charts, tables and responsive layout.
            </p>
            <button>View Project</button>
          </div>
        </div>

        <div className="portfolio-card">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            alt="Project"
          />
          <div className="portfolio-content">
            <h3>Digital Agency</h3>
            <p>
              Modern landing page with attractive UI and smooth animations.
            </p>
            <button>View Project</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Portfolio;