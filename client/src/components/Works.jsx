import qrCodeGeneratorImg from "../assets/qr-code-generator.png"
import todoAppImg from "../assets/todo-app.png"
import hangmanImg from "../assets/hangman.png"
import millenniumElectronicsImg from "../assets/millennium-electronics.png"
import momotalkImg from "../assets/momotalk.png"
const Works = () => {
    return (
        <section id="works" className="font-mono text-white pb-16">
            <h1 className="text-3xl font-medium text-white pb-2 border-b-2 border-green-500">Projects I've Build</h1>
            <div className="mt-4 sm:grid-cols-2 grid lg:grid-cols-3 gap-4 md:gap-1">
                <div className="p-4 w-full">
                    <img className="w-full h-full " src={momotalkImg} alt="" />
                    <h1 className="text-xl font-medium">Momotalk Chat App</h1>
                </div>
                <div className="p-4 w-full">
                    <img className="w-full h-full " src={millenniumElectronicsImg} alt="" />
                    <h1 className="text-xl font-medium">E-commerce Store</h1>
                </div>
                <div className="p-4 w-full">
                    <img className="w-full h-full" src={qrCodeGeneratorImg} alt="" />
                    <h1 className="text-xl font-medium">Qr Code Generator</h1>
                </div>
                <div className="p-4 w-full">
                    <img className="w-full h-full" src={todoAppImg} alt="" />
                    <h1 className="text-xl font-medium">MERN Todo App</h1>
                </div>
                <div className="p-4 w-full">
                    <img className="w-full h-full" src={hangmanImg} alt="" />
                    <h1 className="text-xl font-medium">Hangman Game</h1>
                </div>

            </div>



        </section>
    )
}

export default Works