import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurProducts.css";
const OurProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/database/product.json");
      const res = await data.json();
      setProduct(res);
    })();
  }, []);

  if (product === null) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="bg-clight">
      <div className="container-lg py-3">
        <div className="row">
          <h2 className="fw-bold why-title py-3">
            {" "}
            <span className="why">আমাদের পণ্য সমুহ</span>{" "}
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {product &&
            product.map((item, i) => (
              <div className="col" key={i}>
                <div className="card p-3 h-100 border-0">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title main-color fw-bold">
                      {item.name}
                    </h4>
                    <p className="fs-5 m-0 fw-bold">
                      <span>নীট ওজন:</span>{" "}
                      <span className="text-muted"> {item.weight}</span>
                    </p>
                    {item.marka && (
                      <p className="fs-5 m-0 fw-bold">
                        <span>মার্কা:</span>{" "}
                        <span className="text-muted"> {item.marka}</span>
                      </p>
                    )}
                    <h5 className="py-1 text-muted fw-bold">
                      {" "}
                      মূল্য জানতে এবং ওর্ডার করতে হোয়াটসঅ্যাপ করুন
                    </h5>
                  </div>
                  <div className="">
                    <Link
                      className="main-bg text-white whatsApp rounded"
                      to="https://wa.me/+8801718948804"
                      target="_blank"
                    >
                      <i className="fa-brands fa-whatsapp"></i>{" "}
                      <span>০১৭১৮৯৪৮৮০৪</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
