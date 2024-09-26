import { Button, Container } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Container className="px-3 mx-auto d-flex">
        <div className="hero__cta grid">
          <div className="hero__cta__title d-flex flex-column">
            <button type="button" className="btn btn-secondary">
              Welcome to Businezz X
            </button>
            <h1>
              Join us in growing your <span>business</span>.
            </h1>
          </div>
          <div className="hero__cta__button d-flex flex-column">
            <h2>
              Elevate your business with Businezz X, a professional Webflow
              template.
            </h2>
            <button type="button" className="btn btn-primary">
              Contact us
            </button>
          </div>
        </div>
        <div className="hero__cta grid">
          <div className="hero__cta__title d-flex flex-column">
            <button type="button" className="btn btn-secondary">
              Welcome to Businezz X
            </button>
            <h1>
              Join us in growing your <span>business</span>.
            </h1>
          </div>
          <div className="hero__cta__button d-flex flex-column">
            <h2>
              Elevate your business with Businezz X, a professional Webflow
              template.
            </h2>
            <button type="button" className="btn btn-primary">
              Contact us
            </button>
          </div>
        </div>
      </Container>

      {/* <div className="hero__form col-6">Hola soy hero 2</div> */}
    </div>
  );
};

export default Hero;
