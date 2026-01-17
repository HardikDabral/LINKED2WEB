"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface PopupFormProps {
    trigger?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function PopupForm({ trigger, open: controlledOpen, onOpenChange }: PopupFormProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
    const setIsOpen = isControlled ? onOpenChange : setUncontrolledOpen;

    const handleOpen = () => setIsOpen?.(true);
    const handleClose = () => setIsOpen?.(false);

    const modalContent = isOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Get Started</h3>
                    <p className="text-zinc-400 text-sm">Join the waitlist for early access.</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors"
                    >
                        Join Waitlist
                    </button>
                </form>
            </div>
        </div>
    ) : null;

    return (
        <>
            <div onClick={handleOpen} className="cursor-pointer">
                {trigger}
            </div>
            {mounted && createPortal(modalContent, document.body)}
        </>
    );
}
