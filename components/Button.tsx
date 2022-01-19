
const Button = ({title, onClick}) => {
    return (
        <button 
            className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r dark:bg-gradient-to-l from-indigo-700 to-cyan-500 focus:outline-none transition duration-300 hover:scale-110'
            onClick={onClick}>
                {title}
        </button>
    )
}

export default Button;
