import Contact from "./contact";

export default function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <Contact />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <h4 className="text-uppercase mb-3">Location</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-lg-4 mb-3 mb-lg-0">
              <h4 className="text-uppercase mb-3">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </div>

            <div className="col-lg-4">
              <h4 className="text-uppercase mb-3">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-3 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2023</small>
        </div>
      </div>
    </>
  );
}
