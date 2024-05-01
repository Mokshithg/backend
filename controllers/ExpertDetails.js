const Expert = require('../models/Expert')


exports.getAllExpertDetails = async(req,res)=>{
    try {
        const users = await Expert.find();
        if(!users){
            return res.status(404).json({message : "No experts found"});
        }
        res.json(users);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

exports.getDetails = async(req,res)=>{
    const {id} = req.params;
    try{
        const user = await Expert.findById(id);
        if(!user){
            return res.status(404).json({message : 'expert not found'});
        }
        res.json(user)
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.createExpertProfile = async(req,res) => {
    const { profile_pic, short_work_desc, username, rating, no_of_queries_solved, currently_solving, full_desc } = req.body;

    if (!profile_pic || !short_work_desc || !username || !rating || !no_of_queries_solved || !currently_solving || !full_desc) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try{
        const newExpert = new Expert({
            profile_pic,
            short_work_desc,
            username,
            rating,
            no_of_queries_solved,
            currently_solving,
            full_desc,
        });

        const savedUser = await newExpert.save();
        res.status(201).json(savedUser);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}