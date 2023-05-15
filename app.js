const express = require('express')
const app = express()
const routes = require("./routes")
const userRouter = require("./routes/userRouter")
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// console.log(app.use('/users', userRouter));

// app.use('/users', userRouter)
app.use("/", routes)

app.listen(PORT, () => {
    console.log(`listen at port ${PORT}`)
})