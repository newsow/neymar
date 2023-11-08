const express = require('express')
const app = express()
const PORT = 5000
const cors =require('cors')
const userRouter = require('./routes/userRoutes')

app.use(express.json())
app.use(cors())
app.use('/api',userRouter)


const start = async() =>{
    try {
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()