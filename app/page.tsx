"use client"

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      {/* Some content here */}
      <p>Some content</p>

      <Footer />
    </div>
  );
}
