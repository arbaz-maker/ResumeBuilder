import React from "react";
import { useNavigate  } from "react-router-dom";
import { Button } from "reactstrap";

function Thankyou() {
  const history=useNavigate()

  const handleNextButton=async()=>
  {
      history('/home')

  }

  return (
    <div style={{justifyContent:'center',alignItems:'center',display:"flex",flexDirection:"column"}}>
         <img src="https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=https://media.sumo.com/storyimages/ef0e7cb7-4b8a-43b2-b1d1-bcabcad49d42&hash=7e08407bdba8b6f9264f06d78762b1426c24840ea42917c70560c647bfc57638&format=webp" alt="Logo" />
         <Button style={{display:"inline-block",width:"25%",fontSize:"20px"
            ,height: "2rem",
            border: 0,
            bottom: 0,
            borderradius: "0 20px 20px 50px" 
            }} onClick={handleNextButton}>
          Built a New Resume
      </Button>
    </div>
  );
}

export default Thankyou;