const Router = require('express');
const ResumeBuilderController = require('../Controller/ResumeBuilderController'); 


const router  = Router(); 

router.post('/login',ResumeBuilderController.Login);
router.post('/Resume',ResumeBuilderController.SaveResumeController); 


module.exports = router;

