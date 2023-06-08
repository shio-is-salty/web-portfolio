import { BsSend } from "react-icons/bs"
const Contact = () => {
    return (
        <section className="mt-16 font-mono text-white">
            <h1 className="text-3xl font-medium text-white pb-2 border-b-2 border-green-500">Contact Me</h1>
            <div className="mt-4 mx-4 flex justify-center gap-32">
                <div className="max-w-sm">
                    <p>I would love to hear your thought's please drop a message.</p>
                    <fieldset className="mt-4 flex flex-col gap-2 w-full border border-solid border-gray-300 p-3">
                        <legend>Contact's</legend>
                        <h1 className="">Email: kylepagayon58@gmail.com</h1>
                        <h1>Contact: +(63) 9760067919</h1>
                    </fieldset>

                </div>

                <form className="w-[500px]">
                    <fieldset className="flex flex-col gap-2 w-full border border-solid border-gray-300 p-3">
                        <legend>Send me a message</legend>
                        <input className="w-full p-2" placeholder="Name" type="text" />
                        <input className="w-full p-2" placeholder="Email" type="email" />
                        <textarea className="w-full p-2" placeholder="Message..."></textarea>
                        <button className="flex gap-2 items-center justify-center border border-white p-4 text-white 
                    hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300">
                        <BsSend/>
                        Send Message
                    </button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Contact

