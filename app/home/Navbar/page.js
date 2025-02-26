import { Button } from "@/components/ui/button";
import NextLink from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const components = [
    {
        title: "Alert Dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export default function Navbar() {
    return (
        <div className='absolute left-[27%] max-sm:left-0'>
            <li className="flex mx-auto gap-4 p-10 max-sm:p-1 max-sm:gap-0">
                <ul>
                    <NextLink href="/crypto">
                        <Button className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-1 transition-all duration-300">
                            Crypto
                        </Button>
                    </NextLink>
                </ul>
                <ul>
                    <NextLink href="/markets">
                        <Button className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-1 transition-all duration-300">
                            Markets
                        </Button>
                    </NextLink>
                </ul>
                <ul>
                    <Button className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-1 transition-all duration-300">
                        Copy Trading
                    </Button>
                </ul>

                <ul>
                    <div className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-1 transition-all duration-300">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] overflow-hidden lg:grid-cols-[.75fr_1fr]">
                                            {components.map((component, index) => (
                                                <li key={index} className="p-2 hover:bg-gray-100 rounded w-full">
                                                    <p className="text-teal-600 font-bold text-sm w-52"> {component.title}</p>
                                                    <p className="text-sm text-gray-500 ">    {component.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </ul>

                <ul>
                    <Button className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-1 transition-all duration-300">
                        Rewards
                    </Button>
                </ul>

                <ul>
                    <Button className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-2 transition-all duration-300">
                        Wallet
                    </Button>
                </ul>
                <ul>
                    <Button className="bg-transparent shadow-none text-teal-900 hover:text-teal-500 hover:bg-transparent hover:-translate-y-2 transition-all duration-300">
                        More
                    </Button>
                </ul>
            </li>
        </div>
    );
}
