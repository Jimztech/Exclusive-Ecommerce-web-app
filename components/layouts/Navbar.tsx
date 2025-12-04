"use client"

import Link from "next/link";
import { Heart, ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useState } from "react";
import { Input } from "../ui/input";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        "Home",
        "Contact",
        "About",
        "Sign up"
    ]

    return (
        <div className="">
            {/* Desktop view */}
            <nav className="hidden lg:block relative z-50">
                <div className="flex flex-row justify-between items-center py-6 px-10 border-b border-gray-400 fixed top-0 right-0 left-0 bg-gray-400">
                    {/* Left section */}
                    <section>
                        <Link href={"/"} className="text-2xl font-semibold text-red-500">Exclusive</Link>
                    </section>

                    {/* Menu items midsection */}
                    <section>
                        <ul className="flex">
                            {menuItems.map((menu, index) => (
                                <li key={index} className="mx-4">{menu}</li>
                            ))}
                        </ul>
                    </section>

                    {/* searchbar items right section */}
                    <section className="flex items-center">
                        <div className="relative">
                            <Input placeholder="What are you searching for?" className="w-58 pr-10" />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        <Heart className="mx-4 h-5 w-5" />
                        <ShoppingCart className="mx-4 h-5 w-5" />
                        <User className="mx-4 h-5 w-5" />
                    </section>
                </div>
            </nav>

            {/* Mobile view */}
            <nav className="lg:hidden">
                <section className="flex items-center justify-between p-6 border-b border-gray-400 fixed top-0 right-0 left-0">
                    <div>
                        <Link href={"/"}>
                            Exclusive
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                        <User className="h-5 w-5" />
                    </div>
                </section>

                {/* Mobile menu dropdown */}
                <div
                    className={`fixed top-[73px] left-0 right-0 bg-white border-b border-gray-400 transition-all duration-300 ease-in-out z-40 ${
                        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <ul className="flex flex-col p-6">
                        {menuItems.map((menu, index) => (
                            <li
                                key={index}
                                onClick={() => setIsMenuOpen(false)}
                                className="py-3 border-b border-gray-200 last:border-b-0 cursor-pointer hover:text-gray-600"
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile search bar */}
                    <div className="px-6 pb-6">
                        <div className="relative">
                            <Input 
                                placeholder="what are you searching for?"
                                className="w-full pr-10" 
                            />
                            <Search 
                                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Mobile icons */}
                    <div className="flex items-center gap-6 px-6 pb-6">
                        <Heart className="h-5 w-5 cursor-pointer" />
                        <ShoppingCart className="h-5 w-5 cursor-pointer" />
                    </div>
                </div>
            </nav>
        </div>
    )
}