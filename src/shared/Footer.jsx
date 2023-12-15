import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-clight mt-4 py-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <img src="/image/rice-logo02.png" height={250} alt="" />
          </div>
          <div className="col">
            <h2 className="fw-bold">যোগাযোগ</h2>
            <div className="card-body text-sm-start">
              <div className="d-sm-block">
                <h5 className="card-title gap-3">
                  <span className="fw-bold fs-4 main-color">কল করুন</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">+৮৮ ০১৭১৮৯৪৮৮০৪</p>
              <hr className="w-75 m-0" />
            </div>
            <div className="card-body text-sm-start mt-3">
              <div className="d-sm-block">
                <h5 className="card-title d-flex align-items-center gap-3">
                  <span className="fw-bold fs-4 main-color">ইমেল</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">
                <Link
                  className="text-muted text-decoration-none"
                  to="mailto:newrafiqautoricemill@gmail.com"
                >
                  newrafiqautoricemill@gmail.com
                </Link>
              </p>
              <hr className="w-75 m-0" />
            </div>
            <div className="card-body text-sm-start mt-3">
              <div className="d-sm-block">
                <h5 className="card-title gap-3">
                  <span className="fw-bold fs-4 main-color">ঠিকানা</span>
                </h5>
              </div>
              <p className="fs-5 mb-0">এনায়েতপুর, রহনপুর</p>
              <p className="fs-5 mb-0">গোমস্তাপুর, চাঁপাইনবাবগঞ্জ, বাংলাদেশ</p>
              <p className="fs-5 mb-0">পোষ্ট কোড: ৬৩২০</p>
              <hr className="w-75 m-0" />
            </div>
          </div>
          <div className="col">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100090665948530&tabs=timeline&width=300&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="130"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
