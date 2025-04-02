"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Newsletter() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target["newsletter-email"].value;

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(
      "Thank you for subscribing, be prepared for hot new cookies in your inbox every week."
    );

    try {
      await fetch("https://api.sassywares.com/v1/newsletter", {
        body: JSON.stringify({ email }),
        method: "POST",
        headers: {
          "X-Source": "mosaic-digital-agency",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        {/* Image */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-20">
              <Image
                src="/assets/images/demo-fancy/section-image-8.png"
                alt="Image Description"
                width={1200}
                height={684}
                className="w-100"
              />
            </div>
            <div className="small text-gray text-center">
              Illustration by{" "}
              <a
                href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5"
                rel="noopener nofollow"
                target="_blank"
              >
                Oleg Shcherba{" "}
              </a>
              from{" "}
              <a
                href="https://icons8.com/illustrations"
                rel="noopener nofollow"
                target="_blank"
              >
                Ouch
              </a>
              !
            </div>
          </div>
        </div>
        {/* End Images */}
        {/* Section Text */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10">Newsletter</h2>
            <h3 className="section-title-small mb-30">
              Sync with hot new things in the world of design.
            </h3>
            <p className="section-descr mb-30">
              Whether you're looking into our services or just want to stay in
              loop with the world of design, we've got you covered.
            </p>
            <form onSubmit={onFormSubmit} className="form">
              <div className="d-sm-flex justify-content-between mb-3">
                <label htmlFor="newsletter-email" className="visually-hidden">
                  Your email
                </label>
                <input
                  placeholder="Enter your email"
                  className="newsletter-field input-lg round"
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="newsletter-button btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                >
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="form-tip">
                <i className="icon-info size-16" /> By sending the form you
                agree to the{" "}
                <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
                and <Link href="/privacy-policy">Privacy Policy</Link>.
              </div>
              <div
                id="subscribe-result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
              />
            </form>
          </div>
        </div>
        {/* End Section Text */}
      </div>
    </div>
  );
}
