import meImg from "../assets/me.jpg"
import {BsDownload, BsChevronDoubleDown} from "react-icons/bs"
const Hero = () => {
    return (
        <section className="mt-8 h-screen">
            <div className="flex justify-center items-center gap-4 text-white font-mono">
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

                <div className="max-w-[360px] max-h-[360px] rounded-full shadow-gray-600  shadow-sm">
                    <img className="w-full h-full rounded-full" src={meImg} alt="" />
                </div>
            </div>

            <BsChevronDoubleDown className="mt-14 mx-auto text-4xl text-white" />
        </section>
    )
}

export default Hero