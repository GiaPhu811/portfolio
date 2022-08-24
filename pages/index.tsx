import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import avt_img from "../public/images/Ronni_img.png";
import avt_img_circle from "../public/images/Ronni_avt.png";
import linkedin from "../public/images/linkedin.png";
import next_generation from "../public/images/next_generation.png";
import R_logo from "../public/images/R_logo.png";
import VN_scholarship from "../public/images/VN_scholarship.png";
import aesirx_logo from "../public/images/aesirx_logo.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ronni K. Gothard Christiansen</title>
        <meta name="description" content="Ronni K. Gothard Christiansen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio position-xl-fixed start-0 end-0 top-0 bottom-0 bg-white d-xl-flex align-items-center pt-5 pt-xl-0 text-center text-xl-start">
        <div className="portfolio-image position-xl-absolute end-0 z-0 d-none d-xl-block">
          <Image
            quality={100}
            src={avt_img}
            layout={"intrinsic"}
            objectFit="contain"
            alt="Ronni K. Gothard Christiansen"
          />
        </div>
        <div className="portfolio-content container position-relative z-1 fs-6">
          <div className="row">
            <div className="col-12 col-xl-7">
              <div className="d-xl-none mb-3">
                <Image
                  quality={100}
                  src={avt_img_circle}
                  layout={"intrinsic"}
                  alt="Ronni K. Gothard Christiansen"
                />
              </div>
              <h1 className="fw-semibold text-primary mb-14px">
                Ronni K. Gothard Christiansen
              </h1>
              <p className="mb-36px lh-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur non elit mollis, tristique turpis et, mattis metus.
                Etiam nisi erat, facilisis in lorem eu, condimentum tincidunt
                urna. Nunc accumsan tempus mauris eu ornare. Donec tincidunt
                nulla non magna elementum, at pretium mauris imperdiet. Duis at
                leo at tortor dictum ultrices. Maecenas eget eros magna
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-6">
              <p className="fw-bold mb-3">Follow me on</p>
              <div className="d-flex flex-wrap justify-content-center justify-content-xl-start">
                <a
                  className="portfolio-link rounded-pill mb-3 me-sm-3 border"
                  href="https://www.linkedin.com/in/ronnikc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedin}
                    layout={"intrinsic"}
                    objectFit="contain"
                    alt="Linkedin"
                  />
                </a>
                <a
                  className="portfolio-link rounded-pill mb-3 me-sm-3 border"
                  href="https://dma.aesirx.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={aesirx_logo}
                    layout={"intrinsic"}
                    objectFit="contain"
                    alt="R-digital"
                  />
                </a>
                <a
                  className="portfolio-link rounded-pill mb-3 me-sm-3 border"
                  href="https://r-digital.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={R_logo}
                    layout={"intrinsic"}
                    objectFit="contain"
                    alt="R-digital"
                  />
                </a>
                <a
                  className="portfolio-link rounded-pill mb-3 me-sm-3 border"
                  href="https://r-digital.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={next_generation}
                    layout={"intrinsic"}
                    objectFit="contain"
                    alt="R-digital"
                  />
                </a>
                <a
                  className="portfolio-link rounded-pill mb-3 me-sm-3 border"
                  href="https://vnscholarship.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={VN_scholarship}
                    layout={"intrinsic"}
                    objectFit="contain"
                    alt="R-digital"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
