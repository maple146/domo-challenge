import { Container } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Container className="px-3 mx-auto d-flex row">
        <div className="hero__left-side col-12 col-lg-6 grid">
          <div className="hero__left-side__title d-flex flex-column">
            <button type="button" className="btn btn-secondary">
              Welcome to Businezz X
            </button>
            <h1>
              Join us in growing your <span>business</span>.
            </h1>
          </div>
          <div className="hero__left-side__button d-flex flex-column">
            <h3>
              Elevate your business with Businezz X, a professional Webflow
              template.
            </h3>
            <button type="button" className="btn btn-primary">
              Contact us
            </button>
          </div>
        </div>

        <div className="hero__right-side col-12 col-lg-6">
          <div className="hero__right-side__background" />
          <form className="hero__right-side__form grid py-5 px-4">
            <div className="mb-4">
              <button type="button" className="btn btn-outline-secondary mb-2">
                Book your free consultation
              </button>
              <h2>Get a free consultation</h2>
            </div>
            <div className="row">
              <div className="mb-3 col-12 col-md-6">
                <input
                  type="string"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="contact@email.com"
                />
              </div>
            </div>
            <div className="col-12 mb-3">
              <textarea
                id="test"
                name="test"
                className="form-control"
                placeholder="Please type your message here..."
              />
            </div>
            <div className="hero__right-side__form--button d-grid col-12">
              <button type="submit" className="btn btn-primary">
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
