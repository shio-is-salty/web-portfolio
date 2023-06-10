import {useState} from "react"
import { BsCardImage } from "react-icons/bs"
import {MdAdd} from "react-icons/md"
import bg from "../assets/momotalk.png"
const AddProjectFormPage = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [images, setImages] = useState([])
    return (
        <div className="mx-8 mt-4">
            <h1 className="mt-4 text-white font-bold text-3xl">Add a project</h1>
            <form className="text-white">
                <fieldset className="flex flex-col gap-2 w-full border border-solid border-gray-300 p-3">
                    <legend>Send me a message</legend>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 text-gray-800" placeholder="Title" type="text" />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 text-gray-800" placeholder="Description..." type="text" />

                    <div className="w-full flex flex-wrap gap-2">
                        <div className="flex gap-1 justify-center items-center text-white w-[150px] h-[150px] border-white border">
                            <BsCardImage className="text-xl" />
                            Add Image
                        </div>

                        <div className="w-[150px] h-[150px] border border-white">
                            <img className="w-full h-full object-fill" src={bg} alt="" />
                        </div>
                    </div>

                    <button className="flex gap-2 items-center justify-center border border-white p-4 text-white 
                    hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300">
                        <MdAdd className="text-2xl" />    
                        Add Project 
                    </button>


                    
                </fieldset>

            </form>

        </div>
    )
}

export default AddProjectFormPage