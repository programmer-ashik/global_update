"use client"
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
const Banner = () => {
  const [images, setImages] = useState([
    "/bnr02.jpg",
    "/bnr01.jpg",
    // Add more image URLs here
  ]);

  const currentImageIndex = useRef(0);

  useEffect(() => {
    const animateSlide = () => {
      const imageElements = sliderRef.current.querySelectorAll('img');
      const currentImage = imageElements[currentImageIndex.current];
      const nextImageIndex = (currentImageIndex.current + 1) % images.length;
      const nextImage = imageElements[nextImageIndex];

      gsap.to(currentImage, {
        duration: 2, // Adjust slide duration
        ease: "power3.out", // Adjust easing function
        // x: '-200', // Slide out to the left
        opacity: 0
      });

      gsap.to(nextImage, {
        duration: 2, // Adjust slide duration
        ease: "power3.out", // Adjust easing function
        // x: 0, // Slide in from the right
        opacity: 1
      });

      currentImageIndex.current = nextImageIndex;
    };

    const intervalId = setInterval(animateSlide, 5000); // Adjust interval (ms)

    return () => clearInterval(intervalId);
  }, [images]);

  const sliderRef = useRef(null);
  return (
    <div className=" w-full h-screen">
      <div className=" w-full h-screen relative" ref={sliderRef}>
        {/* Decorative image and overlay */}
        {images.map((imageUrl, index) => (
          <Image
            layout="fill" // Makes the image fill the parent container
            key={index}
            src={imageUrl}
            alt=""
            className={`object-cover object-center ${index === 0 ? '' : 'opacity-0'}`}
          />
        ))}
      </div>

    </div>
  );
};



export default Banner