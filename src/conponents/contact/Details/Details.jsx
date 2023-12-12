import React from "react";
import "./Details.css";
const Details = () => {
  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0 ">
            <div className="card-body text-center text-sm-start">
              <div className="d-flex justify-content-center d-sm-block">
                <h5 className="card-title d-flex align-items-center gap-3">
                  <i className="fa-solid fa-location-dot icon2 shadow-sm"></i>{" "}
                  <span className="fw-bold fs-4"> আমাদের ঠিকানা</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">
                {" "}
                মেসার্স নিউ রফিক অটো রাইস মিল{" "}
              </p>
              <p className="fs-5 mb-0">এনায়েতপুর, রহনপুর</p>
              <p className="fs-5 mb-0">গোমস্তাপুর, চাঁপাইনবাবগঞ্জ, বাংলাদেশ</p>
              <p className="fs-5 mb-0">
                <span>পোষ্ট কোড:</span> ৬৩২০
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body text-center text-sm-start">
              <div className="d-flex justify-content-center d-sm-block">
                <h5 className="card-title d-flex align-items-center gap-3">
                  <i className="fa-solid fa-phone icon2 shadow-sm"></i>{" "}
                  <span className="fw-bold fs-4"> কল করুন</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">
                +৮৮ ০১৭১৮৯৪৮৮০৪ <br />
                <span className=" fs-6">সকাল ৯টা - রাত ৯টা</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0">
            <div className="card-body text-center text-sm-start">
              <div className="d-flex justify-content-center d-sm-block">
                <h5 className="card-title d-flex align-items-center gap-3 text-center text-sm-start">
                  <i className="fa-solid fa-clock icon2 shadow-sm"></i>{" "}
                  <span className="fw-bold fs-4">খোলার সময়</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">
                ২৪/৭ খোলা <br />
                <span className=" fs-6">আজই যোগাযোগ করুন</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body text-center text-sm-start">
              <div className="d-flex justify-content-center d-sm-block">
                <h5 className="card-title d-flex align-items-center gap-3 text-center text-sm-start">
                  <i className="fa-regular fa-envelope icon2 shadow-sm"></i>{" "}
                  <span className="fw-bold fs-4">ইমেল করুন</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">newrafiqautoricemill@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body text-center text-sm-start">
              <div className="d-flex justify-content-center d-sm-block">
                <h5 className="card-title d-flex align-items-center gap-3 text-center text-sm-start">
                  <i className="fa-brands fa-whatsapp icon2 shadow-sm"></i>{" "}
                  <span className="fw-bold fs-4">হোয়াটসঅ্যাপ করুন</span>
                </h5>
              </div>
              <p className="fs-5 mb-0 fw-400">+৮৮ ০১৭১৮৯৪৮৮০৪</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
