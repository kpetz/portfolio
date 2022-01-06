import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi';
import Button from './Button';
const Sidebar = () => {
    return (
        <div>
            <img
                src='https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png'
                alt='user avatar'
                className='w-32 h-32 mx-auto rounded-full'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-blue-700'>Kevin </span> 
                Lopez
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
            <a 
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' 
                href='#' 
                download='name'>
                <GiTie className='w-6 h-6'/> Download Resume
            </a>
            {/* Social Icons */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-blue-700 md:w-full'>
                <a href='#'>
                    <AiFillFacebook className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href='#'>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href='#'>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>
            {/* Address */}
            <div 
                className='py-4 my-5 bg-gray-200' 
                style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation/>
                    <span>Santa Cruz, Bolivia</span>
                </div>
                <p className='py-2'>kevlopezqui@gmail.com</p>
                <p className='py-2'>(+591)-77887845</p>
            </div>
            {/* Email Me */}
            <Button title='Email Me' onClick={()=>window.open('mailto:kevlopezqui@gmail.com')}/>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500'>Toogle Theme</button>
        </div>
    )
}

export default Sidebar;
