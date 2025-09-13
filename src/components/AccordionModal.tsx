import React, { useEffect, useState } from "react";
import image1 from "../images/annie-spratt.jpg"
import image2 from "../images/bill-wegener.jpg"
import image3 from "../images/nico-smit.jpg"
import image4 from "../images/ph_54335_216832.jpg"
import image5 from "../images/connor-h.jpg"
import image6 from "../images/connor-hall.jpg"
import image7 from "../images/genimg.png"

function Jumbotron() {
  const stockPhotos = [
    image1,
    image3,
    image7,
    image2, // Boxes of donated goods
    "https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg", 
    image5,// Food donation
    "https://images.pexels.com/photos/6646930/pexels-photo-6646930.jpeg",
    image6, // Volunteers packing supplies
    image4// Relief aid distribution
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev < stockPhotos.length-1? prev+1: 0);
    }, 5000);
    return () => clearInterval(timer);
  }, [stockPhotos.length]);

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="my-4 flex gap-8">
        <img
          src={stockPhotos[currentIndex]}
          alt="Stock photo"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
        />
        <img
          src={
            stockPhotos[
              currentIndex < stockPhotos.length - 2 ? currentIndex + 1 : 0
            ]
          }
          alt="Stock photo"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
        />
      </div>
      <div className="rounded-2xl p-1 bg-slate-800 flex gap-2 w-fit mx-auto my-5">
        <button
          className="bg-white rounded-full h-1 w-1"
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          className="bg-gray-400 rounded-full h-1 w-1"
          onClick={() => setCurrentIndex(1)}
        ></button>
        <button
          className="bg-gray-600 rounded-full h-1 w-1"
          onClick={() => setCurrentIndex(stockPhotos.length - 1)}
        ></button>
      </div>
    </div>
  );
}

export default Jumbotron;
