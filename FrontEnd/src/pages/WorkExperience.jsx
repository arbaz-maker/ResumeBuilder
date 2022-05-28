import React,{useContext,useEffect,useState} from "react";
import { Button } from "reactstrap";
import { useNavigate  } from "react-router-dom";
import axios from "axios";

import AppContext from "../AppContext";

function WorkExperience() {
  const history=useNavigate()
  const [inputList, setInputList] = useState([{ CompanyName: "",description:"",fromDate:"" ,toDate: ""}]);
  const [finalobj,setfinal]=useState({})

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { CompanyName: "",description:"",fromDate:"" ,toDate: ""}]);
  };
  const value = useContext(AppContext);

    useEffect(() => {
        setfinal(value.state)
      }, [value.state,finalobj]);
      

    const handleNextButton=async()=>
    {
      console.log(inputList)
        const {handleWorkExp}=value.function
        await handleWorkExp(inputList)
        axios.post(`http://localhost:8080/Resume`,{...finalobj,WorkExp:inputList})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        history('/Thankyou')

    }

  return (
    <div className="form-box">
      <h3> WorkExperience Information </h3>
      {inputList.map((x, i) => {
        return (
          <div  key={i}>
            <label >
            Institution
            </label>
            <input
              name="CompanyName"
			        placeholder="Enter CompanyName"
              value={x.CompanyName}
              onChange={e => handleInputChange(e, i)}
            />
            <label >
            Description
            </label>
            <input
              
              name="description"
			        placeholder="Enter description"
              value={x.description}
              onChange={e => handleInputChange(e, i)}
            />
            <label >
            From Date
            </label>
            <input
              
              name="fromDate"
			        placeholder="Enter fromDate"
              value={x.fromDate}
              onChange={e => handleInputChange(e, i)}
            />
            <label >
            To Date
            </label>
            <input
              
              name="toDate"
			        placeholder="Enter toDate"
              value={x.toDate}
              onChange={e => handleInputChange(e, i)}
            />
            
            <div >
              {inputList.length !== 1 && <button
                
                onClick={() => handleRemoveClick(i)} style={{display:"inline-block",width:"50%",fontSize:"20px"
                ,height: "2rem",
                border: 0,
                bottom: 0,margin: "1rem 0 1rem 8rem",
                marginleft: "52%",   
                borderradius: "0 20px 20px 0" 
                }}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick} style={{display:"inline-block",width:"50%",fontSize:"20px"
            ,height: "2rem",
            border: 0,
            bottom: 0,margin: "1rem 0 1rem 8rem",
            marginleft: "52%",   
            borderradius: "0 20px 20px 0" 
            }}>Add</button>}
            </div>
          </div>
          
        );
        
      })}
      <Button style={{display:"inline-block",width:"50%",fontSize:"20px"
            ,height: "2rem",
            border: 0,
            bottom: 0,margin: "1rem 0 1rem 8rem",
            marginleft: "52%",   
            borderradius: "0 20px 20px 0" 
            }} onClick={handleNextButton}>
          Next
      </Button>
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default WorkExperience;