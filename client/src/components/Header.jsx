import {useState} from "react"
import {BsCodeSlash} from "react-icons/bs"
import { HiMenu } from "react-icons/hi"

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <header className="">
            <div className="flex justify-between items-center py-6">
                <div className="text-white font-mono font-bold text-xl flex items-center gap-1 cursor-pointer">
                    <BsCodeSlash className="text-3xl text-green-500"/>
                    <h1 className="-mt-1">Kyle Pagayon</h1> 
                </div>

                <HiMenu
                    onClick={() => setIsMenu(prev => !prev) }
                    className="block md:hidden text-white text-2xl cursor-pointer" />

                <nav className="hidden md:block">
                        <ul className="font-medium text-white flex gap-6 font-mono">
                            <a href="#home" className="text-green-500 hover:text-green-500 transition-all duration-200 ">&lt;Home&gt;</a>
                            <a href="#about" className="hover:text-green-500 transition-all duration-200">About</a>
                            <a href="#works" className="hover:text-green-500 transition-all duration-200">Work</a>
                            <a href="#contact" className="hover:text-green-500 transition-all duration-200">Contact</a>
                        </ul>
                </nav>

            </div>

            {isMenu && (
            <nav>
                <ul className="font-medium text-white flex justify-center gap-6 font-mono">
                    <a href="#home" className="text-green-500 hover:text-green-500 transition-all duration-200 ">&lt;Home&gt;</a>
                    <a href="#about" className="hover:text-green-500 transition-all duration-200">About</a>
                    <a href="#works" className="hover:text-green-500 transition-all duration-200">Work</a>
                    <a href="#contact" className="hover:text-green-500 transition-all duration-200">Contact</a>
                </ul>
            </nav>
            )}

        </header>
    )
}

export default Header