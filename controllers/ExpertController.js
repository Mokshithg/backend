// const TechnicalExperts = require('../models/TechnicalExperts');

const expertCards = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
        profile_pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Dinesh Karthik",
        desc: "I'm a seasoned full-stack developer with expertise in both frontend and backend technologies. I specialize in building scalable and performant web applications.",
        expertise: [
          "Full Stack Development"
        ],
        experience: "10 yrs",
        avg_waiting_time: "60 min",
        rating: 4.9,
        startprice: 5500
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600",
        profile_pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Sara Johnson",
        desc: "I'm an experienced video editor with a passion for storytelling. I specialize in creating engaging and visually stunning videos for various platforms.",
       expertise: [
          "Video Editing"
        ],
        experience: "6 yrs",
        avg_waiting_time: "35 min",
        rating: 4.8,
        startprice: 3500
      },
      {
        id: 3,
        image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profile_pic: "https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        username: "Maxwell Ford",
        desc: "I'm a creative graphic designer with a keen eye for detail. I specialize in creating impactful visuals and branding materials that resonate with audiences.",
       expertise: [
          "Graphic Designing"
        ],
        experience: "7 yrs",
        avg_waiting_time: "45 min",
        rating: 4.7,
        startprice: 4500
      },
      {
        id: 4,
        image: "https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profile_pic: "https://images.pexels.com/photos/11344384/pexels-photo-11344384.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        username: "Sophia Lee",
        desc: "I'm a skilled UI/UX designer with a focus on creating intuitive and user-friendly interfaces. I specialize in wireframing, prototyping, and visual design.",
       expertise: [
          "UI Designing"
        ],
        experience: "5 yrs",
        avg_waiting_time: "30 min",
        rating: 4.9,
        startprice: 5000
      },
      {
        id: 5,
        image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profile_pic: "https://images.pexels.com/photos/2204533/pexels-photo-2204533.jpeg",
        username: "James Brown",
        desc: "I'm a proficient backend developer with a focus on building scalable and efficient server-side applications. I specialize in database management and API development.",
       expertise: [
          "Backend Development"
        ],
        experience: "9 yrs",
        avg_waiting_time: "50 min",
        rating: 4.5,
        startprice: 4500
      }
      
]

exports.getCardsid = async(req,res) => {
    const id = parseInt(req.params.id);
    const expert = expertCards.find(expert => expert.id === id);

    if(!expert){
        res.status(404).json({ error: 'Expert not found' });
    }else{
        res.json(expert)
    }
}

exports.getCardsAll = async (req, res) => {
    try {
      const users = expertCards;
      if (!users || users.length === 0) { 
        return res.status(404).json({ message: "No experts found" });
      }
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };










exports.getAllExperts = async(req,res)=>{
    try{
        const experts = await TechnicalExperts.find({
            username : 1,
            image : 1,
            profile_pic : 1,
            rating : 1,
            expertise : 1,
            avg_waiting_time : 1 
        })
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