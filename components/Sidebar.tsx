import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { MdOutlineComputer,MdOutlineDocumentScanner } from 'react-icons/md';
import { useTheme } from "next-themes";
import Button from './Button';
import Image from "next/image";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <Image
                src="/images/perfil-photo.png"
                alt="avatar"
                className="mx-auto border rounded-full "
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-indigo-700 dark:text-cyan-500'>Kevin </span>
                Lopez
            </h3>
            <p className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
                Web Developer<MdOutlineComputer className='w-6 h-6 ml-3' />
            </p>
            <a
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full hover:text-white hover:bg-gray-400 dark:bg-dark-200'
                href='#'
                download='name'>
                Download CV <MdOutlineDocumentScanner className='w-6 h-6 ml-3' />
            </a>
            {/* Social Icons */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-indigo-700 dark:text-cyan-500 md:w-full'>
                <a href='#' className='transition duration-300 hover:scale-105'>
                    <AiFillFacebook className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='#' className='transition duration-300 hover:scale-110'>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href='#' className='transition duration-300 hover:scale-110'>
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            {/* Address */}
            <div
                className='py-4 my-5 bg-gray-200 dark:bg-dark-100'
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Santa Cruz, Bolivia</span>
                </div>
                <p className='py-2'>kevlopezqui@gmail.com</p>
                <p className='py-2'>(+591)-77887845</p>
            </div>
            {/* Email Me */}
            <Button title='Email Me' onClick={() => window.open('mailto:kevlopezqui@gmail.com')} />
            <Button title='Toggle Theme' onClick={changeTheme} />

            {/* <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r dark:bg-gradient-to-l from-indigo-500 to-cyan-500'>Toogle Theme</button> */}
        </div>
    )
}

export default Sidebar;
