"use client";

import { Input } from "../ui/input";
import { SendHorizontal } from 'lucide-react';
import Basic from "../qr-code";
import { PlayStoreButton } from "../play-store-button";
import { AppStoreButton } from "../app-store-button";

export default function Footer() {
    return (
        <div className="bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 py-6">
            <section className="space-y-4">
                <p className="text-white">Exclusive</p>
                <p className="text-white">Subscribe</p>
                <span className="block text-white">Get 10% off your first order</span>
                <div className="relative">
                    <Input 
                        placeholder="Enter your email"
                        className="pr-10"
                    />
                    <SendHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
                </div>
            </section>

            <section className="space-y-2 text-white">
                <p>Support</p>
                <p>
                    22, Edo Street, Benin City,
                    Edo State.
                </p>
                <p>ibezimjames20@gmail.com</p>
                <p>+234-703-643-0827</p>
            </section>

            <section className="space-y-2 text-white">
                <p>Account</p>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </section>

            <section className="space-y-2 text-white">
                <p>Quick Link</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </section>

            <section className="space-y-2 text-white">
                <p>Download App</p>
                <p>save $3 with App New User Only</p>

                <div className="flex items-center gap-2">
                    <Basic />
                    <div  className="flex flex-col items-center space-y-2">
                        <PlayStoreButton />
                        <AppStoreButton />
                    </div>
                </div>
            </section>
        </div>
    )
}