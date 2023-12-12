import React from "react";
import "./WhyAre.css";
const WhyAre = () => {
  return (
    <div className="why-are-area py-4">
      <div className="container">
        <h2 className="fw-bold why-title py-3">
          {" "}
          <span className="why">কেন আমরা সেরা</span>{" "}
        </h2>
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <img
                className="rounded img-fluid"
                src="/image/social-media1.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 rounded py-4">
              <ul className="ul">
                <li className="witems d-flex align-items-start ">
                  {" "}
                  <i className="fa-solid fa-square-check"></i>প্রশিক্ষিত জনবল
                  দ্বারা কৃষকের নিকট হতে ধানের সঠিক জাত নির্ণয় ও গুনগত মান
                  সুনিশ্চিত করে ধান সংগ্রহ করে থাকি।
                </li>
                <li className="witems d-flex align-items-start">
                  {" "}
                  <i className="fa-solid fa-square-check"></i>
                  আমাদের অত্যাধুনিক ড্রায়ার ও মিলিং সিস্টেম এর মাধ্যমে চাউলের{" "}
                  ১০০% গুনগত মান নিশ্চিত করে থাকি।
                </li>

                <li className="witems d-flex align-items-start ">
                  {" "}
                  <i className="fa-solid fa-square-check"></i> কম্পিউটারইজড
                  সর্টিং মেশিনের মাধ্যমে সকল প্রকার ডাস্ট,অবাঞ্ছিত ও তামড়ী চাউল
                  পৃথক করে চাউলের কোয়ালিটি নিশ্চিত করে থাকি।
                </li>

                <li className="witems d-flex align-items-start">
                  {" "}
                  <i className="fa-solid fa-square-check"></i>আমাদের রয়েছে
                  স্মার্ট ম্যানেজমেন্ট সিস্টেম ও টিম।
                </li>
                <li className="witems d-flex align-items-start">
                  {" "}
                  <i className="fa-solid fa-square-check"></i>নিজস্ব
                  ট্রান্সপোর্ট এর মাধ্যমে পন্য সরবারাহের নিশ্চিত করে থাকি।
                </li>
                <li className="witems d-flex align-items-start">
                  {" "}
                  <i className="fa-solid fa-square-check"></i>সর্বোচ্চ পরিমানে
                  পন্য সরবারহের সক্ষমতা।
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAre;
