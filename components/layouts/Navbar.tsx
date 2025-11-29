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
        <div>
            {/* Desktop view */}
            <nav className="hidden lg:block relative">
                <div className="flex flex-row justify-between items-center py-6 px-10 border-b border-gray-400 fixed top-0 right-0 left-0">
                    {/* Left section */}
                    <section>
                        <Link href={"/"} className="text-2xl font-semibold">Exclusive</Link>
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

                    <div className="flex items-center">
                        <Menu className="h-5 w-5"/>
                        <User className="h-5 w-5" />
                    </div>
                </section>
            </nav>
        </div>
    )
}