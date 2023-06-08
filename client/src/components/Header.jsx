import {BsCodeSlash} from "react-icons/bs"
const Header = () => {
    return (
        <header className="flex justify-between py-6">
            <div className="text-white font-mono font-bold text-xl flex items-center gap-1">
                <BsCodeSlash className="text-3xl text-green-500"/>
                <h1 className="-mt-1">Kyle Pagayon</h1> 
            </div>
           <nav>
                <ul className="font-medium text-white flex gap-6 font-mono">
                    <a href="#home" className="text-green-500 hover:text-green-500 transition-all duration-200 ">&lt;Home&gt;</a>
                    <a href="#about" className="hover:text-green-500 transition-all duration-200">About</a>
                    <a href="#work" className="hover:text-green-500 transition-all duration-200">Work</a>
                    <a href="#contact" className="hover:text-green-500 transition-all duration-200">Contact</a>
                </ul>
           </nav>
        </header>
    )
}

export default Header