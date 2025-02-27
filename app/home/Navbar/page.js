"use client";

import { Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import {Chip} from "@heroui/chip";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [language, setLanguage] = useState("national");
    const [scrollingUp, setScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setScrollingUp(true);
            } else {
                setScrollingUp(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const stylesButton = `${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} bg-transparent shadow-none hover:text-teal-600 hover:-translate-y-1 transition-all duration-700`;
    
    return (
        <header className={`fixed top-0 left-0 w-full flex items-center Dropdown shadow-lg justify-around px-4 z-50 transition-all duration-700 ${scrollingUp ? 'h-20' : 'h-0'} ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className={`flex items-center transition-all duration-700  justify-center w-full`}>
                <div className={`flex justify-center  transition-all duration-[1.2s] ${scrollingUp ? 'w-32' : 'w-0'}`}>
                <img src="Logos/logo-transparent.png" alt="Logo" className="block transition-all duration-700" />
                </div>
                {scrollingUp && (
                    <nav className="flex gap-4">
                        {['Crypto', 'Markets', 'Copy Trading', 'Rewards', 'Wallet', 'More'].map((item) => (
                            <NextLink href={`/${item.toLowerCase().replace(' ', '-')}`} key={item}>
                                <Button className={stylesButton}>
                                    {item}
                                </Button>
                            </NextLink>
                        ))}
                    </nav>
                )}
                <div className="flex items-center gap-4 ml-20">
                    {scrollingUp && (
                        <>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Avatar src={`/flags/${language}.png`} alt="Language" className="cursor-pointer transition-all duration-500" />
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => setLanguage("national")}>English</DropdownItem>
                                    <DropdownItem onClick={() => setLanguage("persian")}>فارسی</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Avatar  alt="User" className="cursor-pointer transition-all duration-700" />
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem>Login</DropdownItem>
                                    <DropdownItem>Sign up</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Chip onClick={toggleTheme} className="cursor-pointer" variant="dot">
                                {theme === 'dark' ? '☀️' : '🌙'}
                            </Chip>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
