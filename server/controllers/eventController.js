const {Courses,Events,Teacher} = require('../db/models')

class evntController{
    
async create(req,res){
    try {
        const {title,description,teacher_id} = req.body
        const {course_id} = req.params
        const course = await Courses.findOne({where:{id:course_id}})
        const event = await Events.create({title,description,teacher_id})
        await event.addCourses(course)
        return res.status(200).json({message:'успешно'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}

async getOne(req,res){
    try {
        const {event_id} = req.params

        const event = await Events.findOne({where:{id:event_id}})
        return res.status(200).json({event:event})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}
}

module.exports = new evntController