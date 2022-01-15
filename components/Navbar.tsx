import { FunctionComponent, useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span
                        onClick={() => setActiveItem(name)}
                        className='hover:text-blue-700'
                    >
                        {name}
                    </span>
                </a>
            </Link>
        ) : null
    )
}

const NavBar = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const { pathname } = useRouter();
    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/projects') setActiveItem('Projects')
        if (pathname === '/resume') setActiveItem('Resume')
    }, [])

    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold text-blue-700 border-b-4 border-blue-700 md:text-2xl'>
                {activeItem}
            </span>
            <div className='flex space-x-3 font-lg'>
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='About'
                    route='/'
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Resume'
                    route='/resume'
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Projects'
                    route='/projects'
                />
            </div>
        </div>
    )
}

export default NavBar;