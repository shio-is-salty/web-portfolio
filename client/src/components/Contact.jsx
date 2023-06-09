import { useState } from "react"
import { BsSend } from "react-icons/bs"
import { SiFacebook, SiSkype, SiGithub } from "react-icons/si"

import axios from "axios"
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    async function sendMessage(e){
        e.preventDefault()

        const {data, response} = await axios.post("/send_mail", {
            name, email, message
        })

        console.log(data)
        console.log(response)

        setName("")
        setEmail("")
        setMessage("")



    }
    return (
        <section id="contact" className="font-mono text-white pb-16">
            <h1 className="text-3xl font-medium text-white pb-2 border-b-2 border-green-500">Contact Me</h1>
            <div className="mt-4 mx-4 flex flex-col md:flex-row
              justify-center items-center gap-8 md:items-start md:gap-32">
                <div className="max-w-sm">
                    <p>I would love to hear your thought's please drop a message.</p>
                    <fieldset className="mt-4 flex flex-col gap-2 w-full border border-solid border-gray-300 p-3">
                        <legend>Contact's</legend>
                        <h1 className="">Email: kylepagayon58@gmail.com</h1>
                        <h1>Contact: +(63) 9760067919</h1>
                    </fieldset>

                    <fieldset className="mt-4 flex flex-col gap-2 w-full border border-solid border-gray-300 p-3">
                        <legend>Social's</legend>
                        <div></div>
                        <div className="flex gap-8 justify-center text-4xl">
                            <div className="flex flex-col justify-center items-center">
                                <SiFacebook />
                                <h1 className="text-lg">Facebook</h1>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <SiSkype/>
                                <h1 className="text-lg">Skype</h1>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <SiGithub/>
                                <h1 className="text-lg">Github</h1>
                            </div>
                        </div>
                    </fieldset>

                </div>

                <form onSubmit={sendMessage} className="w-full max-w-[500px] md:w-[500px]">
                    <fieldset className="flex flex-col gap-2 w-full border border-solid border-gray-300 p-3">
                        <legend>Send me a message</legend>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 text-gray-800" placeholder="Name" type="text" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 text-gray-800" placeholder="Email" type="email" />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 text-gray-800" placeholder="Message..."></textarea>
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

