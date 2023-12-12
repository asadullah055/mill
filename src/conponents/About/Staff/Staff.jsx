// import React from "react";
import "./Staff.css";
const Staff = () => {
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <h2 className="fw-bold why-title py-3">
          {" "}
          <span className="why">ব্যবস্থাপনা পরিচালক বৃন্দ</span>{" "}
        </h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center row-cols-md-3 g-2">
          <div className="col">
            <div className="card border-0 h-100 ">
              <div className="p-2 pb-0">
                <img
                  src="/image/rofik.JPG"
                  className="card-img-top rounded"
                  alt="..."
                />
              </div>
              <div className="p-2 pt-0">
                <div className="card-body text-center staff-bg">
                  <h3 className="card-title fw-bold text-muted ">
                    মো: রফিকুল ইসলাম
                  </h3>
                  <h4 className="main-color fw-bold">চেয়ারম্যান </h4>
                  <h5 className="space-letter">০১৭১৬৪১২৭০৭</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 h-100">
              <div className="p-2 pb-0">
                <img
                  src="/image/manun.JPG"
                  className="card-img-top rounded"
                  alt="..."
                />
              </div>
              <div className="p-2 pt-0">
                <div className="card-body text-center staff-bg">
                  <h3 className="card-title fw-bold text-muted ">
                    মো: মামুন অর রশিদ
                  </h3>
                  <h4 className="main-color fw-bold">ব্যবস্থাপনা পরিচালক</h4>
                  <h5 className="space-letter">০১৭১৮৯৪৮৮০৪</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 h-100">
              <div className="p-2 pb-0">
                <img
                  src="/image/harun.jpg"
                  className="card-img-top rounded"
                  alt="..."
                />
              </div>
              <div className="p-2 pt-0">
                <div className="card-body text-center staff-bg">
                  <h3 className="card-title fw-bold text-muted ">
                    মো: হারুন অর রশিদ
                  </h3>
                  <h4 className="main-color fw-bold">
                    উপ-ব্যবস্থাপনা পরিচালক{" "}
                  </h4>
                  <h5 className="space-letter">০১৭১৭৫৬০৮৯৫ </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
