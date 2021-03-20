const express = require('express')
const ejs = require("ejs")
const app = express()
const PORT = process.env.PORT || 4000

app.engine("html", ejs.renderFile)
app.set("view engine", "html")
app.set("views", "src/views")
app.use("/assets", express.static("static"))
app.use("/images", express.static("images"))

app.get("/", (req,res) =>{
	res.render("index")
})

app.listen(PORT, () => console.log(`* : ${PORT}`))