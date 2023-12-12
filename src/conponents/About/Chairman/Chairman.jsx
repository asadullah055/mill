import React from "react";
import "./Chaitman.css";
const Chairman = () => {
  return (
    <div className="bg-clight2 ">
      <div className="container">
        <div className="row">
          <h2 className="fw-bold why-title py-3">
            {" "}
            <span className="why">প্রতিষ্ঠাতা</span>{" "}
          </h2>

          <div className="row">
            <div className="col-md-3">
              <img
                src="/image/rofik2.jpg"
                className="rounded img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="row pt-4 pt-md-0">
                <h3 className="text-muted fw-bold">মো: রফিকুল ইসলাম</h3>
                <h4 className="main-color fw-bold">
                  প্রতিষ্ঠাতা ও চেয়ারম্যান{" "}
                </h4>
              </div>
              <p className="fs-5 fw-bold text-muted speak ">
                আসসালামু আলাইকুম, আমি মো: রফিকুল ইসলাম আমার প্রতিষ্ঠান{" "}
                <span className="main-color">
                  ‘মেসার্স নিউ রফিক অটো রাইস মিল’
                </span>{" "}
                এর পথচলা ২০১৭ সাল থেকে শুরু হলেও আতপ চাউলের ব্যবসায় ১৯৭৮ সাল
                থেকে সম্পৃক্ত। দীর্ঘকাল ট্রেডিং ব্যবসায় নিজের সততা ও গ্রাহকের
                বিশ্বস্ততা ও সর্বোপরি মহান আল্লাহর অনুগ্রহের মাধ্যমে ধীরে ধীরে
                ব্যবসার পরিধি বেড়ে এই পর্যায়ে এসেছি। আমার লক্ষ্য শুধুমাত্র
                ব্যক্তি-প্রতিষ্ঠান এর উন্নয়ন নয়, শিল্পায়নের মাধ্যমে অত্র এলাকার
                মানুষদের কর্মসংস্থান ও কর্মদক্ষতা বাড়িয়ে তাদের জীবন মান উন্নত
                করা। সর্বোপরি, অসহায় ও সুবিধাবঞ্চিত মানুষদের সেবা করা। আমার এই
                পথচলায়, আমি আপনাদের দোয়া কামনা করি
              </p>
              <h5 className="space-letter">
                <span>মোবাইল নাম্বার: </span>০১৭১৬৪১২৭০৭
              </h5>
            </div>
            {/* <div className="col-md-3 justify-content-center">
              <img src="/image/rice-logo02.png" className="img-fluid" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
