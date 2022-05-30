import React,{useContext,useEffect,useState} from "react";
import { Button } from "reactstrap";
import { useNavigate  } from "react-router-dom";
import './Education.scss'

import AppContext from "../AppContext";

function Education() {
  const history=useNavigate()
  const [inputList, setInputList] = useState([{ institution: "",fromDate:"" ,toDate: "",degreeType:"" }]);

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
    setInputList([...inputList, { institution: "",fromDate:"" ,toDate: "",degreeType:"" }]);
  };
  const value = useContext(AppContext);

    useEffect(() => {
        
      }, [value.state]);
      // console.log(value.state)

    const handleNextButton=async()=>
    {
        const {handleEducation}=value.function
        await handleEducation(inputList)
        history('/WorkExperience')

    }

  return (
    <div className = "form-box">
     <h3> Education Information </h3>
      {inputList.map((x, i) => {
        return (
          <div style={{backgroundColor:"lightblue",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}  key={i}>
            <label >
            Institution
            </label>
            <input
              name="institution"
			  placeholder="Enter institution"
              value={x.institution}
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
            <label >
            Degree Type
            </label>
            <input
              name="degreeType"
			        placeholder="Enter degreeType"
              value={x.degreeType}
              onChange={e => handleInputChange(e, i)}
            />
            <div>
              {inputList.length !== 1 && <button
                onClick={() => handleRemoveClick(i)} style={{display:"inline-block",width:"50%",fontSize:"20px"
                ,height: "2rem",
                // color: "red",
                border: 0,
                bottom: 0,margin: "1rem 0 1rem 8rem",
                marginleft: "52%",   
                borderradius: "0 20px 20px 0" 
                }} >Remove</button>}
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

export default Education;