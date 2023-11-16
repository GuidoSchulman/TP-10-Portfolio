import React from "react";

export default function Contact() {
  return (
    <>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 text-white">Contact Me</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-5">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-6">Full Name</label>
                  <input className="form-control fs-6" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                  <div className="invalid-feedback fs-6" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fs-6">Email Address</label>
                  <input className="form-control fs-6" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <div className="invalid-feedback fs-6" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback fs-6" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fs-6">Phone Number</label>
                  <input className="form-control fs-6" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                  <div className="invalid-feedback fs-6" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fs-6">Message</label>
                  <textarea className="form-control fs-6" id="message" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                  <div className="invalid-feedback fs-6" data-sb-feedback="message:required">A message is required.</div>
                </div>
                <div className="text-center">
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="fw-bolder fs-6">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms" className="fs-6">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                  <div className="d-none text-danger mb-3 fs-6" id="submitErrorMessage">Error sending message!</div>
                  <button className="btn btn-primary btn-sm" id="submitButton" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
