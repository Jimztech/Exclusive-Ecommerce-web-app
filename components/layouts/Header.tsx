"use client";

import NavBar from "./Navbar";
import { Separator } from "../ui/separator";
import Image from "next/image";

export default function Header() {
    return (
        <div className="">
            <NavBar />

            <section className="pt-30 lg:flex lg:flex-row ">
                {/* Hero section for multiple items available on desktop and not on mobile */}
                <div className="hidden lg:block">
                    <ul>
                        <li>Womens Fashion</li>
                        <li>Mens Fashion</li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports and Outdoor</li>
                        <li>Babys and Toys</li>
                        <li>Groceries and Pets</li>
                        <li>Health and Beauty</li>
                    </ul>
                </div>

                <Separator />

                {/* Banner section available on all devices */}
                <div>
                    <Image
                        src="/images/hero-1.jpg"
                        alt="hero image"
                        width={500}
                        height={300}
                        className="block"
                    />
                </div>
            </section>
        </div>
    )
}