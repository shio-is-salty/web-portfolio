import meImg from "../assets/me.jpg"
import {BsDownload, BsChevronDoubleDown} from "react-icons/bs"
const Hero = () => {
    return (
        <section id="home" className="py-16 pb-32 ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white font-mono">
                 <div className="sm:block md:hidden max-w-[300px] max-h-[300px] rounded-full shadow-gray-600  shadow-sm">
                    <img className="w-full h-full rounded-full" src={meImg} alt="" />
                </div>

                <div className="flex flex-col gap-1 max-w-lg">
                    <h1 className="text-6xl">Kyle  Pagayon</h1>
                    <h1 className="text-xl font-bold">Junior full stack web developer</h1>
                    <p className="text-sm leading-relaxed">I am a junior full stack developer I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.</p>
                    <button className="mt-4 flex gap-2 items-center border border-white p-4 text-white self-start 
                    hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300">
                        <BsDownload />
                        Download CV/Resume
                    </button>
                </div>

                <div className="hidden md:block max-w-[360px] max-h-[360px] rounded-full shadow-gray-600  shadow-sm">
                    <img className="w-full h-full rounded-full" src={meImg} alt="" />
                </div>
            </div>

            <BsChevronDoubleDown className="mt-14 mx-auto text-4xl text-white" />
        </section>
    )
}

export default Hero