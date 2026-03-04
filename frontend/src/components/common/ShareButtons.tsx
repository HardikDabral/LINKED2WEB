"use client";

import { useState, useEffect } from "react";
import { Share2, Twitter, Facebook, MessageCircle, Link2, Check } from "lucide-react";

export default function ShareButtons({ title, url }) {
    const [currentUrl, setCurrentUrl] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setCurrentUrl(url || window.location.href);
    }, [url]);

    const shareData = {
        title: title || "Fruupy - Free Online Tools",
        url: currentUrl,
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            copyToClipboard();
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialPlatforms = [
        {
            name: "Twitter",
            icon: Twitter,
            color: "bg-[#1DA1F2]",
            link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`,
        },
        {
            name: "WhatsApp",
            icon: MessageCircle,
            color: "bg-[#25D366]",
            link: `https://wa.me/?text=${encodeURIComponent(shareData.title + " " + shareData.url)}`,
        },
        {
            name: "Facebook",
            icon: Facebook,
            color: "bg-[#4267B2]",
            link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
        },
    ];

    return (
        <div className="flex flex-col gap-4 py-8 border-t border-b border-[#0B2E33]/10 my-10">
            <div className="flex items-center gap-2 text-[#0B2E33] font-bold">
                <Share2 size={18} />
                <span>Share this tool with others</span>
            </div>
            <div className="flex flex-wrap gap-3">
                {socialPlatforms.map((platform) => (
                    <a
                        key={platform.name}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold transition-all hover:scale-105 active:scale-95 ${platform.color}`}
                    >
                        <platform.icon size={16} />
                        <span className="text-sm">{platform.name}</span>
                    </a>
                ))}
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B2E33] text-white font-semibold transition-all hover:scale-105 active:scale-95"
                >
                    {copied ? <Check size={16} /> : <Link2 size={16} />}
                    <span className="text-sm">{copied ? "Copied!" : "Copy Link"}</span>
                </button>
            </div>
        </div>
    );
}
