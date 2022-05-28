const Users = require("../Models/users")
const Resume = require("../Models/Resume")

const Login = async(req, res) => {
    
    if (!req.body.username || !req.body.password) {

        res.send({ message: "Please Enter Valid UserName and Password" });
      
    }   
    else {
        console.log(req.body.username,req.body.password)

        await Users.find(
            { 
            UserName: req.body.username,
            }
        )
        .then((Result) => {
            
            console.log(Result)
            if(Result)
            {
               res.send(Result)
            }
       })
       .catch((error) => {
          
          console.log("error")
          res.send(error);
       
        });
      }
};

const SaveResumeController = async(req,res) => {
    try
    {
        console.log(req.body)
        var userDetails = new Resume({
            Contact_Information:{
                FullName:req.body.PersonalInfo.FullName,
                EmailAddress:req.body.PersonalInfo.EmailAddress,
                LinkedInProfileUrl:req.body.PersonalInfo.LinkedInProfileUrl,
                ContactNumber:req.body.PersonalInfo.ContactNumber,
                Location:req.body.PersonalInfo.Location,
            },
            Education:req.body.Education,
            Work_Experience:req.body.WorkExp,
        });
        
        await userDetails.save((err, doc) => {
                if (!err)
                {
                    console.log("inserted")
                    res.send(doc);
                }else{
                    console.log('Error during record insertion : ' + err);
                    res.send('error:', err.message, err.stack);
                }
        });
    
    }
    catch(error)
    {
        res.send(error)
    }
}

const GetResumeController = async(req,res) => {
    try
    {
        
        await Resume.find({Contact_Information:{
            FullName:req.body.Contact_Information.FullName,
            EmailAddress:req.body.Contact_Information.EmailAddress,
            LinkedInProfileUrl:req.body.Contact_Information.LinkedInProfileUrl,
            ContactNumber:req.body.Contact_Information.ContactNumber,
            Location:req.body.Contact_Information.Location,
        },
        }).then((result) => {
            res.send(result)
        }).catch((error) => {
            res.send(error)
        })
    
    }
    catch(error)
    {
        res.send(error)
    }
}
module.exports = {Login,SaveResumeController,GetResumeController};