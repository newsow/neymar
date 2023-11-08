const {Courses,Teachers} = require('../db/models')

class courseController{

async createTeacher(req,res){
    try {
        const {first_name,last_name} = req.body
        const teacher = await Teachers.create({first_name,last_name})
        return res.status(200).json({teacher})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}
async create(req,res){
    try {
        const {title,description,teacher_id,tags} = req.body
        const course = await Courses.create({title,description,teacher_id})
        return res.status(200).json(course)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}

async delete(req,res){
    try {
        const {id} = req.params
        const course = await Courses.findOne({where:{id:id}})
        await course.destroy()
        return res.status(200).json({message:'успешно'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}


async getAll(req,res){
    try {
        const courses = await Courses.findAll()
        return res.status(200).json({courses:courses})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}

async getOne(req,res){
    try {
        const {id} = req.params
        const course = await Courses.findOne({where:{id:id}})
        return res.status(200).json({course:course})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}
}

module.exports = new courseController

