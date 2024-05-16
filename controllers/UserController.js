const User = require('../models/user');

exports.createUser = async(req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({message : 'User created successfully'});
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.personalInfo = async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await User.findById(userId,
        {
            role : 0,
            areasOfInterest : 0,
            qualification : 0,
            education : 0,
            workExperience : 0,
        }
    );
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        const userProfile = {
            firstName : user.firstName,
            lastName : user.lastName,
            Email : user.email,
            MobileNumber : user.mobileNumber,
            country : user.country,
            ProfilePic : user.profilePic,
            hobbies : user.hobbies,
        };
        res.status(200).json(userProfile);
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Error retreiving user profile"});
    }
}

exports.accountInfo = async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message : "user not found"});
        }
        const userAccount = {
            role : user.role,
            areasOfInterest : user.areasOfInterest,
            qualification : user.qualification,
            education : user.qualification,
            workExperience : user.workExperience,
            personalWebsite : user.personalWebsite,
        };
        res.status(200).json(userAccount);
    }catch(err){
        conosle.log(err);
        res.status(500).json({message : "Error retreiving user Account"});
    }
}

exports.getUsers = async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
    console.error(err);
    res.status(500).json({message : 'Server Error'});
}
}

exports.getUserById = async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await await User.findById(userId);
        if(!user){
            return res.send(404).json({message : 'User not found'});
        }
        res.status(200).json(user);
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.updateUser = async(req,res)=>{
    try{
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId,updateData,{new:true});
        if(!updatedUser){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(updatedUser);
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User deleted successfully"});
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Server Error'});
    }
}