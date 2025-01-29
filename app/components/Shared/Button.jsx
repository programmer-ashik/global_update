
const Button = ({ children, title }) => {
    return (
        <div className=" border-hero 
        text-white px-3 py-2 rounded-md 
        text-md bg-btn opacity-100 hover:text-hero cursor-pointer transition-opacity duration-1000">
            {children}
            {title}
        </div>
    )
}

export default Button