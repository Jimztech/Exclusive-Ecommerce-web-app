"use client"

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";

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

          <div  className="border-2 border-yellow-300">
            <Image 
              src="/flash-sales/game-pad.jpg"
              width={100}
              height={100}
              alt="game pad"
              className="block"
            />

            <div>
              <p>Havit HV-G92 Gamepad</p>
              <p>₦250</p>
              <p>₦400</p>
            </div>
          </div>

          <div className="border-2 border-yellow-300">
            <Image 
              src="/flash-sales/keyboard.jpg"
              width={100}
              height={100}
              alt="keyboard"
              className="block"
            />

            <div>
              <p>AK-900 Wired Keyboard</p>
              <p>₦500</p>
              <p>₦1000</p>
            </div>
          </div>

          <div className="border-2 border-yellow-300">
            <Image 
              src="/flash-sales/monitor.jpg"
              width={100}
              height={100}
              alt="monitor"
              className="block"
            />
            
            <section>
              <p>LCD Gaming Monitor</p>
              <p>₦15000</p>
              <p>₦35000</p>
            </section>
          </div>

          <div className="border-2 border-yellow-300">
            <Image 
              src="/flash-sales/shoes.jpg"
              width={100}
              height={100}
              alt="shoes"
              className="block"
            />

            <section>
              <p>Yeezy&apos;s pair of Sneakers</p>
              <p>₦4000</p>
              <p>₦7000</p>
            </section>
          </div>

        </section>
      </section>

      <Footer />
    </div>
  );
}
