const Users = require("../Models/users")

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

module.exports = {Login};