import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faFolderOpen,
    faDownload,
    faGraduationCap,
    faGear,
    faSquareCheck,
    faGlobe,
    faDollarSign,
    faCircleInfo,
    type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const components: { title: string; href: string; icon: IconDefinition }[] = [
    { title: "Home", href: "/", icon: faHouse },
    { title: "Install", href: "/install", icon: faFolderOpen },
    { title: "Download", href: "/archive", icon: faDownload },
    { title: "Usage", href: "/usage", icon: faGraduationCap },
    { title: "Options", href: "/options", icon: faGear },
    { title: "Config", href: "/config", icon: faSquareCheck },
    { title: "Sites", href: "/sites", icon: faGlobe },
    { title: "Donate", href: "/donate", icon: faDollarSign },
    { title: "About", href: "/about", icon: faCircleInfo },
];

export function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Desktop: horizontal menu */}
            <nav className="hidden sm:flex items-center space-x-2">
                {components.map((component) => (
                    <a
                        key={component.title}
                        href={component.href}
                        className="inline-flex items-center px-4 py-2 rounded-md font-medium text-base hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                        <FontAwesomeIcon icon={component.icon} className="mr-2 w-4 h-4" />
                        {component.title}
                    </a>
                ))}
            </nav>

            {/* Mobile: dropdown hamburger menu */}
            <div className="sm:hidden">
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center px-4 py-2 rounded-md font-medium text-base hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}>
                    {isOpen ? (
                        <XIcon className="w-5 h-5 mr-2" />
                    ) : (
                        <MenuIcon className="w-5 h-5 mr-2" />
                    )}
                    Menu
                </button>

                {/* Mobile dropdown */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 w-48 z-50">
                        <nav className="flex flex-col gap-1">
                            {components.map((component) => (
                                <a
                                    key={component.title}
                                    href={component.href}
                                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={component.icon} className="w-4 h-4" />
                                    {component.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}
