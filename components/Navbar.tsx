import { useState } from "react";
import Link from 'next/link';
const NavBar = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    return (
        <div>
            <span className='font-bold text-blue-700'>{activeItem}</span>
            <div className='text-red font-lg'>
                {activeItem !== 'About' && (
                    <Link href="/">
                        <a>
                            <span>About</span>
                        </a>
                    </Link>
                )}
                {activeItem !== 'Projects' && (
                    <Link href="/projects">
                        <a>
                            <span>Projects</span>
                        </a>
                    </Link>
                )}
                {activeItem !== 'Resume' && (
                    <Link href="/resume">
                        <a>
                            <span>Resume</span>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NavBar;