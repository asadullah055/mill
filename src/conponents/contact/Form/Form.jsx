import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="form-area p-md-3 p-lg-3 px-2 py-4 rounded">
            <h2 className="fw-bold">যোগাযোগ ফর্ম</h2>
            <form action="">
              <div className="col-md-12 mt-1">
                <label className="form-label fw-bold fs-5 ">আপনার নাম</label>
                <input
                  type="text"
                  className="form-control  py-2 input"
                  placeholder=" আপনার নাম"
                />
              </div>
              <div className="col-md-12 mt-1">
                <label className="form-label fw-bold fs-5 ">ইমেইল</label>
                <input
                  type="email"
                  className="form-control  py-2 input"
                  placeholder=" ইমেইল দিন"
                />
              </div>
              <div className="col-md-12 mt-1">
                <label className="form-label fw-bold fs-5 ">ফোন নাম্বার</label>
                <input
                  type="tel"
                  className="form-control  py-2 input"
                  placeholder=" ফোন নাম্বার"
                />
              </div>
              <div className="col-md-12 mt-1">
                <label className="form-label fw-bold fs-5 ">ম্যাসেজ</label>
                <textarea
                  type="tel"
                  cols={5}
                  rows={5}
                  className="form-control  py-2 input"
                  placeholder=" আপনি যে সব বিষয়ে যানতে চান"
                />
              </div>
              <button className="btn send-btn">সেন্ড ম্যাসেজ</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-area p-md-3 p-lg-3 px-2 py-4 rounded">
            <h2 className="fw-bold">দিকনির্দেশ</h2>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6218643510197!2d88.39166837495695!3d24.842601945972675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fba72940ace563%3A0xd707866cd9431438!2sNew%20Rafiq%20Auto%20Rice%20Mill!5e0!3m2!1sen!2sbd!4v1702183775855!5m2!1sen!2sbd"
                width="100%"
                height="470"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Form;
