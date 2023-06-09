import bg from "../assets/momotalk.png"
const ProjectPage = () => {
    return (
        <div className="mt-8 px-8">
            <h1 className="text-white font-bold text-3xl">Momotalk Chat App</h1>
            <div className="mt-4 flex justify-between">
                {/* images */}
                <div className="max-w-[450px] max-h-[500px]">
                    <img className="w-full h-full object-fit" src={bg} alt="" />
                    <div className="flex gap-1 max-w-[500px] h-[80px]">
                        <div className="mt-2 flex gap-2 justify-center w-full">
                            <img className="w-[80px] h-full object-cover" src={bg} alt="" />
                            <img className="w-[80px] h-full object-cover" src={bg} alt="" />
                            <img className="w-[80px] h-full object-cover" src={bg} alt="" />
                            <img className="w-[80px] h-full object-cover" src={bg} alt="" />
                            <img className="w-[80px] h-full object-cover" src={bg} alt="" />
                        </div>
                    </div>
                </div>

                {/* text */}
                <div className="text-white">
                    <p className="max-w-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className="mt-4 w-full flex gap-2 items-center justify-center border border-white p-4 text-white 
                    hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300">
                        {/* <BsSend/> */}
                        Rate this project
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProjectPage