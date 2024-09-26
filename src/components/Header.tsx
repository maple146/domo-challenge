import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center my-4 bg-white">
      <div className="d-flex mx-1 mx-lg-3">
        <Link
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-bootstrap-fill d-inline-block me-2"
            viewBox="0 0 16 16"
          >
            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
          </svg>
        </Link>
        <div className="vr mx-1 mx-lg-3"></div>
        <div className="d-none d-md-block">
          <Link
            className="mx-1 mx-lg-3"
            href="/"
            target="_blank"
            rel="noopener"
          >
            Home
          </Link>
          <Link
            className="mx-1 mx-lg-3"
            href="/"
            target="_blank"
            rel="noopener"
          >
            About
          </Link>
          <Link
            className="mx-1 mx-lg-3"
            href="/"
            target="_blank"
            rel="noopener"
          >
            Pages
          </Link>
          <Link
            className="mx-1 mx-lg-3"
            href="/"
            target="_blank"
            rel="noopener"
          >
            Packages
          </Link>
          <Link
            className="mx-1 mx-lg-3"
            href="/"
            target="_blank"
            rel="noopener"
          >
            Contact
          </Link>
          <Link
            className="mx-1 mx-lg-3"
            href="/"
            target="_blank"
            rel="noopener"
          >
            Cart [0]
          </Link>
        </div>
      </div>

      <button type="button" className="btn btn-primary">
        Free consultation
      </button>
    </header>
  );
};

export default Header;
function useCheckIsDesktop(): { isDesktop: any } {
  throw new Error("Function not implemented.");
}
