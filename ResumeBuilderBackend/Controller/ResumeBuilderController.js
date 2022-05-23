const users = require("../Models/users")

const Login = async(req, res) => {
    
    if (!req.body.username || !req.body.password) {

        res.send({ message: "Please Enter Valid UserName and Password" });
      
    }   
    else {
        console.log(req.body)

        await users.find({ UserName: req.body.username, Password: req.body.password})
        .then((Result) => {
            
            console.log(Result)
            if(Result)
            {
                res.send({
                    UserName:res,
                });
            }
       })
       .catch((error) => {
          
          console.log("error")
          res.send(error);
       
        });
      }
};

module.exports = {Login};