"use client"
import { Button } from '@headlessui/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
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

        <div className=' bg-[#C96868] bg-opacity-10  absolute top-1/4 md:left-8 font-lilita text-center sm:text-start px-4  rounded-md
        w-full sm:w-[800px] h-[300px] sm:h-[350px] flex justify-center items-center flex-col sm:justify-center sm:items-start space-y-3 sm:space-y-5
        '>
          <h1 className=' text-[30px] sm:text-[45px] text-start leading-10 text-wrap tracking-wide text-orange-500'>
            Upgrade
          </h1>
          <span className='text-[20px] sm:text-[40px] text-start leading-10 text-wrap tracking-wide font-mono text-[#1C82AD]'>
            Your Life with Cutting-Edge Electronics
          </span>
          <div className="flex justify-center items-center gap-4">
            <Link href={'#products'}>
              <Button className="rounded font-prompt bg-[#D49B54] py-2 px-4 text-sm text-white data-[hover]:bg-orange-500 data-[hover]:data-[active]:bg-orange-700">
                View Products
              </Button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};



export default Banner