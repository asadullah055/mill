import React, { useEffect, useState } from "react";

const Parti = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("/database/ifter.json");
      const res = await data.json();
      setImages(res);
    })();
  }, []);
  return (
    <div>
      <div className="container py-3">
        <h2 className="text-muted fw-bold">ইফতারের কিছু ছবি</h2>
        <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 p-2">
          {images &&
            images.map((img, i) => (
              <div className="col overflow-hidden p-0" key={i}>
                <div className="card">
                  <img src={img.image} className="c-img" alt="" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Parti;
