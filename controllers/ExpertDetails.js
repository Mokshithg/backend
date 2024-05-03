const Expert = require('../models/Expert');

const experts = [
    {
        id: 1,
        profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypi0arSA0L18J1717UWnWL6uNVNPQed1VpA&s",
        short_work_desc: "Expertise in building real-time collaboration tools",
        username: "Dinesh Karthik",
        rating: 4.9,
        no_of_queries_solved: 240,
        currently_solving: 8,
        full_desc: "As a specialist in real-time collaboration tools, I bring extensive expertise in building scalable and interactive collaboration platforms."
    },
    {
        id: 2,
        profile_pic: "https://example.com/profile2.jpg",
        short_work_desc: "Backend developer with focus on performance optimization",
        username: "Sara Johnson",
        rating: 4.7,
        no_of_queries_solved: 180,
        currently_solving: 5,
        full_desc: "Experienced backend developer specializing in performance optimization and database management."
    },
    {
        id: 3,
        profile_pic: "https://example.com/profile3.jpg",
        short_work_desc: "Frontend developer passionate about user experience",
        username: "Maxwell Ford",
        rating: 4.8,
        no_of_queries_solved: 210,
        currently_solving: 3,
        full_desc: "Frontend developer with a strong focus on creating intuitive and engaging user interfaces."
    },
    {
        id: 4,
        profile_pic: "https://example.com/profile4.jpg",
        short_work_desc: "Data scientist specialized in machine learning",
        username: "Emily Watson",
        rating: 4.9,
        no_of_queries_solved: 260,
        currently_solving: 10,
        full_desc: "Data scientist with expertise in machine learning algorithms and predictive modeling."
    },
    {
        id: 5,
        profile_pic: "https://example.com/profile5.jpg",
        short_work_desc: "UI/UX designer focusing on mobile applications",
        username: "Alexis Lee",
        rating: 4.6,
        no_of_queries_solved: 150,
        currently_solving: 4,
        full_desc: "Creative UI/UX designer with a passion for crafting delightful mobile experiences."
    }
      
]

exports.getDetailsid = async(req,res) => {
    const id = parseInt(req.params.id);
    const expert = experts.find(expert => expert.id === id);

    if(!expert){
        res.status(404).json({ error: 'Expert not found' });
    }else{
        res.json(expert)
    }
}

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
    const {profile_pic, short_work_desc, username, rating, no_of_queries_solved, currently_solving, full_desc } = req.body;

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