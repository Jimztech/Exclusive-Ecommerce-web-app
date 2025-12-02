"use client";

import NavBar from "./Navbar";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Header() {
    return (
        <div className="">
            <NavBar />

            <section className="lg:grid lg:grid-cols-[1fr_2fr] px-10">
                {/* Hero section for multiple items available on desktop and not on mobile */}
                <div className="hidden lg:block lg:pt-30 relative after:content-[''] after:absolute after:top-26 after:right-0 after:bottom-0 after:border-l after:border-solid after:border-gray-500">
                    <ul className="space-y-4 pr-8">
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

                {/* Banner section available on all devices */}
                <div className="pt-30 lg:pl-8">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <Image
                                    src="/images/hero-1.jpg"
                                    alt="hero image"
                                    width={500}
                                    height={300}
                                    className="block w-auto h-auto"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="/images/hero-2.jpg"
                                    alt="hero image"
                                    width={500}
                                    height={300}
                                    className="block w-auto h-auto"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="/images/hero-3.jpg"
                                    alt="hero image"
                                    width={500}
                                    height={300}
                                    className="block w-auto h-auto"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="/images/hero-4.jpg"
                                    alt="hero image"
                                    width={500}
                                    height={300}
                                    className="block w-auto h-auto"
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
        </div>
    )
}