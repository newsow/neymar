const {Users,Tags,Courses} = require('../db/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret_key = '2222'

const generateToken = (id,email)=>{
    return jwt.sign({id,email},secret_key,{expiresIn:'24h'})
}

class userController{
     async registration(req,res){
        try {
            const {email,password,first_name,last_name} = req.body
            const candidate = await Users.findOne({where:{email:email}})
            if (candidate){
                return res.status(400).json({error:'Пользователь с такой почтой уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password,6)
            const user = await Users.create({email:email,password:hashPassword,first_name,last_name})
            const token = generateToken(user.id,user.email)
            return res.status(200).json({message:'Пользователь успешно создан',token})
        } catch (error) {
            return res.status(500).json({error:error})
        }
    } 

    async login(req,res){
        try {
            const {email,password} = req.body
            const user = await Users.findOne({where:{email}})
            if(!user){
                return res.status(400).json({error:'Неправильный логин или пароль'})
            }
            const passwordValidate = bcrypt.compare(password,user.password)
            if(!passwordValidate){
                return res.status(400).json({error:'Неправильный логин или пароль'})
            }
            const token = generateToken(user.id,user.email)
            return res.status(200).json({token})
        } catch (error) {
            return res.status(500).json({error:error})
        }
    } 

    async getUsers(req,res){
        try {
            return res.status(200).json({message:'11111111'})
        } catch (error) {
            return res.status(500).json({error:error})
        }
    } 
    async followCourse(req,res){
        try {
            const {course_id} = req.params
            const token = req.headers.authorization.split(' ')[1]
            const user_token = jwt.verify(token,secret_key)
            const user = await Users.findOne({where:{id:user_token.id}})
            const course = await Courses.findOne({where:{id:course_id}})
            await course.addUsers(user)
            return res.status(200).json({message:'успешно'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:error})
        }
    }
}

module.exports = new userController