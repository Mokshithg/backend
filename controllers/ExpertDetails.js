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
    },
    {
        id: 6,
        profile_pic: "https://example.com/profile6.jpg",
        short_work_desc: "Software engineer with expertise in cloud computing",
        username: "Nathan Adams",
        rating: 4.5,
        no_of_queries_solved: 190,
        currently_solving: 6,
        full_desc: "Software engineer specializing in cloud computing solutions and distributed systems."
    },
    {
        id: 7,
        profile_pic: "https://example.com/profile7.jpg",
        short_work_desc: "Product manager with experience in Agile methodologies", 
        username: "Olivia Green",
        rating: 4.8,
        no_of_queries_solved: 220,
        currently_solving: 3,
        full_desc: "Product manager experienced in Agile methodologies and product development lifecycle."
    },
    {
        id: 8,
        profile_pic: "https://example.com/profile8.jpg",
        short_work_desc: "Cybersecurity expert specializing in network security",
        username: "Matthew Clarke",
        rating: 4.7,
        no_of_queries_solved: 200,
        currently_solving: 7,
        full_desc: "Cybersecurity expert with a focus on network security and threat mitigation strategies."
    },
    {
        id: 9,
        profile_pic: "https://example.com/profile9.jpg",
        short_work_desc: "Digital marketer skilled in SEO and social media marketing",
        username: "Isabella Rodriguez",
        rating: 4.6,
        no_of_queries_solved: 170,
        currently_solving: 2,
        full_desc: "Digital marketer with expertise in SEO optimization and social media marketing campaigns."
    },
    {
        id: 10,
        profile_pic: "https://example.com/profile10.jpg",
        short_work_desc: "AI researcher focusing on natural language processing",
        username: "Lucas Martinez",
        rating: 4.9,
        no_of_queries_solved: 280,
        currently_solving: 9,
        full_desc: "AI researcher specializing in natural language processing and machine learning algorithms."
    },
    {
        id: 11,
        profile_pic: "https://example.com/profile11.jpg",
        short_work_desc: "Graphic designer passionate about minimalist design",
        username: "Sophia White",
        rating: 4.8,
        no_of_queries_solved: 230,
        currently_solving: 5,
        full_desc: "Graphic designer with a focus on minimalist design principles and visual storytelling."
    },
    {
        id: 12,
        profile_pic: "https://example.com/profile12.jpg",
        short_work_desc: "iOS developer with experience in Swift programming",
        username: "Michael Brown",
        rating: 4.7,
        no_of_queries_solved: 210,
        currently_solving: 4,
        full_desc: "Experienced iOS developer proficient in Swift programming and iOS app development."
    },
    {
        id: 13,
        profile_pic: "https://example.com/profile13.jpg",
        short_work_desc: "Content writer specializing in technology topics",
        username: "Ava Wilson",
        rating: 4.5,
        no_of_queries_solved: 160,
        currently_solving: 1,
        full_desc: "Content writer with expertise in creating engaging and informative content on technology subjects."
    },
    {
        id: 14,
        profile_pic: "https://example.com/profile14.jpg",
        short_work_desc: "Financial analyst with experience in risk management",
        username: "Liam Harris",
        rating: 4.6,
        no_of_queries_solved: 180,
        currently_solving: 3,
        full_desc: "Financial analyst with a focus on risk management strategies and financial modeling."
    },
    {
        id: 15,
        profile_pic: "https://example.com/profile15.jpg",
        short_work_desc: "Game developer specializing in Unity3D",
        username: "Emma King",
        rating: 4.9,
        no_of_queries_solved: 250,
        currently_solving: 6,
        full_desc: "Game developer with expertise in Unity3D game development and interactive gameplay mechanics."
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