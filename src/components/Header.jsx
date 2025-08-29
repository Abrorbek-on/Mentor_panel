import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const [dark, setDark] = useState(() => {
        try {
            const v = localStorage.getItem("prefers-dark");
            return v ? JSON.parse(v) : false;
        } catch (e) {
            return false;
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("prefers-dark", JSON.stringify(dark));
    }, [dark]);

    const links = [
        { to: "/", label: "Asosiy" },
        { to: "/kurslar", label: "Kurslar" },
        { to: "/biz-haqimizda", label: "Biz haqimizda" },
        { to: "/boglanish", label: "Bog'lanish" },
    ];

    return (
        <header className="w-full shadow-xl fixed top-0 left-0 z-50 transition">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/assets/logo-dark.svg"
                                alt="IT Live Logo"
                                className="h-8"
                            />
                        </Link>

                        <nav className="hidden md:flex items-center space-x-6 ml-6 ">
                            {links.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`pb-1 transition ${location.pathname === link.to
                                        ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                                        : " hover:text-blue-500 dark:hover:text-blue-400"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setDark((d) => !d)}
                            title={dark ? "Light mode" : "Dark mode"}
                            className="p-2 rounded-full dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm"
                        >
                            {dark ? <FiMoon size={18} /> : <FiSun size={18} />}
                        </button>


                        <Link
                            to="/login"
                            className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-sm hover:bg-blue-600 transition"
                        >
                            Kirish
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
