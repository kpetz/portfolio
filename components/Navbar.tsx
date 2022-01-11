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
                    <span onClick={() => setActiveItem(name)}>{name}</span>
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
            <span className='font-bold text-blue-700'>{activeItem}</span>
            <div className='flex space-x-3 text-red-400 font-lg'>
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