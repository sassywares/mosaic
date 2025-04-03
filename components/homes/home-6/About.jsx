import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="row">
      <div className="col-sm-4 mb-xs-50">
        <div className="me-xl-4 pe-sm-2">
          <div className="composition-1">
            <div className="composition-1-image-1">
              <Image
                src="/assets/images/man-working-on-laptop.png"
                width={480}
                height={358}
                alt="Man working on laptop"
              />
            </div>
            <div className="composition-1-image-2">
              <Image
                src="/assets/images/woman-listening-to-music.png"
                width={440}
                height={330}
                alt="Woman listening to music"
              />
            </div>
            <div
              className="composition-1-decoration-1"
              data-rellax-y=""
              data-rellax-speed="-0.5"
              data-rellax-percentage="0.65"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-1.svg"
                width={159}
                height={74}
                alt=""
              />
            </div>
            <div
              className="composition-1-decoration-2"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.2"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-2.svg"
                width={102}
                height={113}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4 mb-xs-50">
        <div className="ms-xl-5 ps-sm-2 me-xl-4 pe-sm-2 pe-xl-3">
          <div className="composition-2">
            <div className="composition-2-image-1 mt-xs-0">
              <Image
                src="/assets/images/boy-working-on-laptop.png"
                width={372}
                height={500}
                alt="Boy working on laptop"
              />
            </div>
            <div className="composition-2-image-2">
              <Image
                src="/assets/images/woman-working-on-laptop.png"
                alt="Woman working on laptop"
                width={440}
                height={330}
              />
            </div>
            <div
              className="composition-2-decoration"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.2"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-3.svg"
                width={102}
                height={97}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="ms-xl-4 ps-sm-2">
          <div className="composition-3">
            <div className="composition-3-image-1">
              <Image
                src="/assets/images/boy-working-on-tablet.png"
                width={500}
                height={372}
                alt="Boy working on tablet"
              />
            </div>
            <div className="composition-3-image-2">
              <Image
                src="/assets/images/girl-working-on-dashboard.png"
                width={440}
                height={330}
                alt="Girl working on dashboard"
              />
            </div>
            <div
              className="composition-3-decoration-1"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.7"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-4.svg"
                width={108}
                height={106}
                alt=""
              />
            </div>
            <div
              className="composition-3-decoration-2"
              data-rellax-y=""
              data-rellax-speed="-0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-5.svg"
                width={148}
                height={148}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
