"use client";

import React from "react";
import Image from "next/image";
import { footerLinks, navigationLinks } from "@/data/footer";
import Link from "next/link";
import { services3 } from "@/data/services";

export default function Footer6() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="row pb-120 pb-sm-80 pb-xs-50">
        <div className="col-lg-3 text-gray mb-md-50">
          <div className="mb-30">
            <Image
              src="/assets/images/demo-fancy/logo-white.png"
              alt="Your Company Logo"
              width={154}
              height={35}
            />
          </div>
          <p>We make warm websites for you</p>
        </div>
        <div className="col-lg-7 offset-lg-2">
          <div className="row mt-n30">
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Company</h3>
              <ul className="fw-menu clearlist local-scroll">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Services</h3>
              <ul className="fw-menu clearlist">
                {services3.map((service) => (
                  <li key={service.title}>
                    <a href="#">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Legal &amp; Press</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <Link href={elm.path}>{elm.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="row text-gray">
        <div className="col-md-4 col-lg-3">
          <b>© Mosaic Digital {new Date().getFullYear()}.</b>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
          {/* Back to Top Link */}
          <div
            onClick={scrollToTop}
            className="local-scroll float-end mt-n20 mt-sm-10"
          >
            <a href="#top" className="link-to-top">
              <i className="mi-arrow-up size-24" />
              <span className="visually-hidden">Scroll to top</span>
            </a>
          </div>
          {/* End Back to Top Link */}
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
