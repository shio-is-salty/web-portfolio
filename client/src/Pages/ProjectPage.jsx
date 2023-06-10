import {useEffect, useState} from "react"
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew, MdClose} from "react-icons/md"
import {FaStar} from "react-icons/fa"
import bg from "../assets/momotalk.png"
import { useParams } from "react-router-dom"

import todoAppImg from "../assets/todo-app.png"
import momotalkImg from "../assets/momotalk.png"
const ProjectPage = () => {
    const [isModal, setIsModal] = useState(false)
    const [project, setProject] = useState(null)
    const [imageCounter, setImageCounter] = useState(0)
    const {id} = useParams()
    const projects = [
        {
            id: 1,
            title: "Momotalk Chat App",
            description: "Momotalk chat application chat anytime anywhere with our favorite people.",
            images: [momotalkImg,momotalkImg,momotalkImg,momotalkImg,momotalkImg],
        },
        {
            id: 2,
            title: "MERN Todo App",
            description: "Organize and gather your tasks.", 
            images: [todoAppImg,momotalkImg,todoAppImg,todoAppImg,todoAppImg],
        },
    ]

    useEffect(() => {
        for(let i = 0; i<projects.length; i++){
            if(projects[i].id == id){
                setProject({...projects[i]})
            }
            
        }

    }, [])

    if(!project){
        return <div>Loading...</div>
    }

    function nextImage(){
        if((project.images.length - 1) > imageCounter){
            setImageCounter(prev => prev+1)
        }else{
            setImageCounter(0)
        }

        console.log(imageCounter)
    }

    function prevImage(){
        if(imageCounter !== 0){
            setImageCounter(prev => prev-1)
        }else{
            setImageCounter(project.images.length - 1)

        }


        console.log(imageCounter)

    }



    return (
        <div className="mt-8 px-8 pb-32">
                {isModal && (
                    <div className="absolute left-0 top-0 h-screen w-full bg-gray-900">
                        <div
                            onClick={() => setIsModal(false)}
                            className="m-2 p-1 cursor-pointer float-right">
                            <MdClose 
                               className="text-white text-3xl" />
                        </div>
                        <div className="-mt-8 w-full h-full flex gap-2 justify-center items-center bg-gray-900">
                            <MdOutlineArrowBackIosNew
                                onClick={prevImage}
                                className="text-3xl text-white cursor-pointer" />
                            <img className=" w-9/12 h-9/12 object-fill" src={project.images[imageCounter]} alt="" />
                            <MdOutlineArrowForwardIos
                                onClick={nextImage}
                                className="text-3xl text-white cursor-pointer" />
                        </div>
                    </div>
                )}
            <div className="mt-4 flex gap-16 justify-center">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center ">
                        <MdOutlineArrowBackIosNew
                            onClick={prevImage}
                            className="text-3xl text-white cursor-pointer" />
                        <div className="w-[450px] h-[300px]">
                            <img
                               onClick={() => setIsModal(prev => !prev)}
                               className="w-full h-full object-cover cursor-pointer" src={project.images[imageCounter]} alt="" />


                        </div>
                        <MdOutlineArrowForwardIos
                            onClick={nextImage}
                            className="text-3xl text-white cursor-pointer" />
                    </div>

                    <div className="mt-2 w-full flex gap-2 items-center justify-center">
                        {project.images.map((image, i)=> (
                            <img
                                key={i}
                                onClick={() => setImageCounter(i)}
                                className="w-[60px] h-[60px] object-cover" src={image} alt="" />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-white font-bold text-3xl">{project.title}</h1>
                    <p className="max-w-sm text-white">{project.description}</p>
                    <button className="w-full mt-4 flex gap-2 items-center justify-center border border-white p-4 text-white 
                    hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300">
                        <FaStar />
                        Rate this project
                    </button>
                </div>


            </div>

        </div>
    )
}

export default ProjectPage