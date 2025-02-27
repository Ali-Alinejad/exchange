"use client";

import { Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import NextLink from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [language, setLanguage] = useState("national");
    const [scrollingUp, setScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        setIsDarkMode(!isDarkMode);
    };

    const stylesButton = 'bg-transparent shadow-none text-white hover:text-gray-300 hover:bg-transparent transition-all duration-700';
    
    return (
        <header className={`fixed top-0 left-0 w-full flex items-center justify-around px-4 z-50 transition-all duration-700 ${scrollingUp ? 'h-20' : 'h-0'} ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <div className={`flex items-center transition-all duration-700  justify-center w-full`}>
                <div className={`flex justify-center items-center transition-all duration-[1.2s] ${scrollingUp ? 'w-32' : 'w-24'}`}>
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
                <div className="flex items-center gap-4">
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
                                    <Avatar src="/path/to/user-avatar.png" alt="User" className="cursor-pointer transition-all duration-700" />
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem>Login</DropdownItem>
                                    <DropdownItem>Sign up</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Button onClick={toggleTheme} className={stylesButton}>
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
