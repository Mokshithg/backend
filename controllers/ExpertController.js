const TechnicalExperts = require('../models/TechnicalExperts');

exports.getAllExperts = async(req,res)=>{
    try{
        const experts = await TechnicalExperts.find();
        res.json(experts);
    }catch(err){
        console.error(err);
        res.status(500).json('Server Error');
    }
}

exports.getExpertsById = async(req,res)=>{
    const id = req.params.id;
    try{
        const expert = await TechnicalExperts.findById(id);
        
        if(!expert){
            return res.status(404).json({msg: 'Expert not found'});
        }
        res.json(expert);
    }catch(err){
        console.error(err);
        res.status(500).json({msg: 'Server Error'});
    }
};

exports.addExperts = async(req,res) => {
    try{
        const {
            image,
            profile_pic,
            username,
            desc,
            expertise,
            experience,
            rating,
            avg_waiting_time,
            startprice} = req.body;

        if(!image || !profile_pic || !username || !desc || !expertise || !experience || !rating || !avg_waiting_time || !startprice){
            return res.status(400).send("Missing required fields");
        }
        const newExpert = new TechnicalExperts({
            image, profile_pic, username, desc, expertise,experience, rating, avg_waiting_time, startprice
        });
 
        await newExpert.save();
        res.json(newExpert);
    }catch(err){ 
        console.error(err);
        res.status(500).send('Error while creating expert');
    }
}         

exports.deleteExpert = async(req,res) => {
    try{
        const expertId = req.params.id;

        const deletedExpert = await TechnicalExperts.findByIdAndDelete(expertId);

        if(!deletedExpert){
            return res.status(400).send("Expert Not Found");
        }
        res.json({message : 'Successfully deleted the expert'});
    }catch(err){
        console.log(err);
        res.status(500).send('Error deleting the expert');
    }
}

exports.updateExpert = async(req,res) => {
    try{
        const expertId = req.params.id;
        const updateData = req.body;

        const updatedData = await TechnicalExperts.findByIdAndUpdate(
            expertId,
            updateData,
            {new : true}
        );
        
        if(!updatedData){
            return res.status(400).send("Expert Not Found");
        }

        res.json(updatedData)
    }catch(err){
        console.log(err);
        res.send(500).send("Error updating the expert")
    }
}