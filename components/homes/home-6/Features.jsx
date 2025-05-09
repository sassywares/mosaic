import { features3 } from "@/data/features";
import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Image */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-20">
              <Image
                src="/assets/images/man-riding-a-rocket.png"
                alt="Man riding a rocket"
                style={{
                  height: 600,
                  objectFit: "contain",
                }}
                width={1200}
                height={658}
                className="w-100"
              />
            </div>
          </div>
        </div>
        {/* End Images */}
        {/* Section Text */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10">
              Why Choose Us?
            </h2>
            <h3 className="section-title-small mb-30">
              We care for your brand just like we care for our own.
            </h3>
            <p className="section-descr mb-30">
              Your brand is your identity — With us, you're not just getting a
              website, you're getting a partner who will help you grow to the
              next level.
            </p>
            {/* Features List */}
            <div className="row features-list">
              {/* Features List Item */}
              {features3.map((feature, index) => (
                <div
                  key={index}
                  className="col-sm-6 col-lg-12 col-xl-6 d-flex mb-3"
                >
                  <div className="features-list-icon">
                    <i className="mi-check" />
                  </div>
                  <div className="features-list-text">{feature.text}</div>
                </div>
              ))}
              {/* End Features List Item */}
            </div>
            {/* End Features List */}
          </div>
        </div>
        {/* End Section Text */}
      </div>
    </div>
  );
}
