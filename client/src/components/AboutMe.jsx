import { FaReact } from "react-icons/fa"
import { SiMongodb, SiExpress, SiNodedotjs,
    SiJavascript, SiPython } from "react-icons/si"
import { FaJava } from "react-icons/fa"
const AboutMe = () => {
    return (
        <section className="font-mono text-white">
            <h1 className="text-3xl font-medium text-white pb-2 border-b-2 border-green-500">About Me</h1>

            <div className="p-4 flex gap-32 justify-center ">
                <div className="mt-4">

                    <p className="text-white max-w-sm">I am a 21 year old web developer in the philippines. I started learning coding when  I was 17 I've always been curios on how games website's or anyting computer related had been developed. So I decided to enroll in World Citi Colleges Antipolo as an SHS ICT Student. ever since I graduated I've been building and learning my skills to become a great programmer.</p>
                    <p className="mt-4 text-white max-w-sm">I have knowledge in both frontend and backend development, producing responsive and scalable websites</p>

                </div>


                <div className="mt-4">

                    {/* Technologies */}
                    <h1 className="text-2xl">Technologies I Use</h1>
                    <div className="flex gap-8 mt-4 text-4xl">
                        <div className="flex flex-col justify-center items-center">
                            <SiMongodb />
                            <h1 className="text-lg">Mongo</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <FaReact/>
                            <h1 className="text-lg">React</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <SiExpress/>
                            <h1 className="text-lg">Express</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <SiNodedotjs/>
                            <h1 className="text-lg">Node</h1>
                        </div>
                    </div>

                    {/* Programming Languages */}
                    <h1 className="mt-4 text-2xl">Programming Languages</h1>
                    <div className="flex gap-8 mt-4 text-4xl">
                        <div className="flex flex-col items-center justify-center">
                            <SiJavascript/>
                            <h1 className="text-lg">Javascript</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <SiPython/>
                            <h1 className="text-lg">Python</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <FaJava/>
                            <h1 className="text-lg">Java</h1>
                        </div>
                    </div>

                </div>


            </div>


        </section>
    )
}

export default AboutMe