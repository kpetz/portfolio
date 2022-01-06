
const Button = ({title, onClick}) => {
    return (
        <button 
            className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 focus:outline-none'
            onClick={onClick}>
                {title}
        </button>
    )
}

export default Button;
