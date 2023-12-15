import React from "react";

const MostSell = () => {
  return (
    <div className="container py-3">
      <h2 className="main-color fw-bold">বেশি বিক্রিত চাউল</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card">
            <img src="/image/social-media1.jpg" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/image/social-media2.jpg" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/image/social-media3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostSell;
