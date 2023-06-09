const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(express.json())


app.post("/send_mail", (req, res) => {
    const {name, email, message} = req.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "kylepagayon58@gmail.com",
            pass: "09304796610_sS",
        }
    })

    var mailOptions = {
        from: "kylepagayon58@gmail.com",
        to: "satoumatsuzaka58@gmail.com",
        subject: name,
        text: message,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err)
            res.status(422).json("failed to send email")
        }else{
            console.log("Email sent: "+info.response)
            res.status(200).json("email sent")
        }
    })





} )

app.listen(4000, () => {
    console.log('Listening at port: 4000')
})