const Router = require('express');
const Login = require('../Controller/ResumeBuilderController'); 


const router  = Router(); 
router.post('/login',Login.Login); 

module.exports = router;

