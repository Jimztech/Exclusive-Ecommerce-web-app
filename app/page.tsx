"use client"

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useState, useEffect } from "react";

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
      <section className="px-10">
        <p>Today&apos;s</p>

        <div className="flex items-center gap-8">
          <span className="block text-4xl font-semibold">Flash Sales</span>

          <section className="flex gap-2">
            <div className="flex flex-col">
              <p>Days</p>
              <span className="text-2xl font-semibold">{String(days).padStart(2, '0')} <span className="text-red-500">:</span></span>
            </div>
            
            <div className="flex flex-col">
              <p>Hours</p>
              <span className="text-2xl font-semibold">{String(hours).padStart(2, '0')} <span className="text-red-500">:</span></span>
            </div>
            
            <div className="flex flex-col">
              <p>Mins</p>
              <span className="text-2xl font-semibold">{String(minutes).padStart(2, '0')} <span className="text-red-500">:</span></span>
            </div>
            
            <div className="flex flex-col">
              <p>Seconds</p>
              <span className="text-2xl font-semibold">{String(seconds).padStart(2, '0')}</span>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
