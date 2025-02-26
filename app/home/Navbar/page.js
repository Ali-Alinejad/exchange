import { Button } from "@heroui/button";
import NextLink from "next/link";

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
