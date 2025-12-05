"use client"

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon, CirclePlus, CircleMinus } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState(345600);
  const days = Math.floor(timeRemaining/86400);
  const hours = Math.floor((timeRemaining % 86400) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = (timeRemaining % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          return 345600
        }
        return prev - 1;
      })
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />

      {/* Flash Sale */}
      <section className="px-4 lg:px-10">
        <p>Today&apos;s</p>

        <div className="flex items-center gap-8">
          <span className="block text-4xl font-semibold">Flash Sales</span>

          <section className="flex gap-2">
            <div className="flex flex-col">
              <p>Days</p>
              <span className="text-2xl font-semibold">{String(days).padStart(2, '0')} <span className="text-red-500"></span></span>
            </div>
            
            <div className="flex flex-col">
              <p>Hours</p>
              <span className="text-2xl font-semibold">{String(hours).padStart(2, '0')} <span className="text-red-500"></span></span>
            </div>
            
            <div className="flex flex-col">
              <p>Mins</p>
              <span className="text-2xl font-semibold">{String(minutes).padStart(2, '0')} <span className="text-red-500"></span></span>
            </div>
            
            <div className="flex flex-col">
              <p>Seconds</p>
              <span className="text-2xl font-semibold">{String(seconds).padStart(2, '0')}</span>
            </div>
          </section>
        </div>

        {/* product section */}
        <section className="my-4 grid grid-cols-2 md:grid-cols-4 gap-2">

          <div  className="flex flex-col justify-between relative">
            <Image 
              src="/flash-sales/test-gamepad2.jpg"
              width={250}
              height={250}
              alt="game pad"
              className="block rounded-sm"
            />

            <Button
              className="absolute bottom-2 top-30 right-22 flex gap-2"
            >
              <CircleMinus className="hidden lg:block" />
              Add to Cart
              <CirclePlus className="hidden lg:block" />
            </Button>

            <section>
              <p>Havit HV-G92 Gamepad</p>

              <div className="flex items-center gap-4">
                <p className="text-lg text-red-500">₦250</p>
                <p className="line-through text-gray-500">₦400</p>
              </div>

              <div className='flex items-center gap-1'>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 stroke-amber-500 dark:stroke-amber-400'></StarIcon>
              </div>

            </section>
          </div>

          <div className="flex flex-col justify-between relative">
            <Image 
              src="/flash-sales/keyboard.jpg"
              width={250}
              height={250}
              alt="keyboard"
              className="block rounded-sm"
            />

            <Button
              className="absolute bottom-2 top-30 right-22 flex gap-2"
            >
              <CircleMinus className="hidden lg:block" />
              Add to Cart
              <CirclePlus className="hidden lg:block" />
            </Button>

            <section>
              <p>AK-900 Wired Keyboard</p>

              <div className="flex items-center gap-4">
                <p className="text-lg text-red-500">₦500</p>
                <p className="line-through text-gray-500">₦1000</p>
              </div>

               <div className='flex items-center gap-1'>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 stroke-amber-500 dark:stroke-amber-400'></StarIcon>
              </div>

            </section>
          </div>

          <div className="flex flex-col justify-between relative">
            <Image 
              src="/flash-sales/test-tv.jpg"
              width={250}
              height={250}
              alt="monitor"
              className="block rounded-sm"
            />
            
            <Button
              className="absolute bottom-2 top-30 right-22 flex gap-2"
            >
              <CircleMinus className="hidden lg:block" />
              Add to Cart
              <CirclePlus className="hidden lg:block" />
            </Button>

            <section className="py-4 space-y-2">
              <p className="text-2xl">LCD Gaming Monitor</p>

              <div className="flex items-center gap-4">
                <p className="text-lg text-red-500">₦15000</p>
                <p className="line-through text-gray-500">₦35000</p>
              </div>

               <div className='flex items-center gap-1'>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 stroke-amber-500 dark:stroke-amber-400'></StarIcon>
              </div>
            </section>
          </div>

          <div className="flex flex-col justify-between relative">
            <Image 
              src="/flash-sales/shoes.jpg"
              width={250}
              height={250}
              alt="shoes"
              className="block rounded-sm"
            />

            <Button
              className="absolute bottom-2 top-30 right-22 flex gap-2"
              >
                <CircleMinus className="hidden lg:block" />
                Add to Cart
                <CirclePlus className="hidden lg:block" />
              </Button>

            <section className="py-4 space-y-2">
              <p className="text-2xl">Yeezy&apos;s pair of Sneakers</p>

              <div className="flex items-center gap-4">
                <p className="text-lg text-red-500">₦4000</p>
                <p className="line-through text-gray-500">₦7000</p>
              </div>

              <div className='flex items-center gap-1'>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
                <StarIcon className='size-5 stroke-amber-500 dark:stroke-amber-400'></StarIcon>
              </div>

            </section>
          </div>

        </section>
      </section>

      <Footer />
    </div>
  );
}
