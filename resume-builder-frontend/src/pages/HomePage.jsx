
import React,{useContext,useEffect} from "react";
import { useForm } from "react-hook-form";
import {useNavigate  } from "react-router-dom";
import AppContext from "../AppContext";
import './Homepage.scss'

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function HomePage() {
    const value = useContext(AppContext);
    const history=useNavigate()
    useEffect(() => {
        
      }, [value]);

      const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => {
        // console.log(data);
        const {handlePersonalInfo } = value.function;
        await handlePersonalInfo(data)
        history('/Education');
         };
  
    return (
        <div className = "form-box">
        <h3> Personal Information </h3>
        <form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor:"lightblue",display:"flex",justifyContent:"center",alignItems:"center",border: '2px solid black',borderRadius:20}}>
            <div style={{display:"flex",flexDirection:"column"}}>
            
            <label >
                Full Name
            </label>
            <input
            {...register("FullName", { required: "Please enter your full name." })} // custom message
            />

            <label>
                EmailAddress
            </label>
            <input
            {...register("EmailAddress", { required: "Please enter your full name." })} // custom message
            />

            <label>
                LinkedIn Profile
            </label>
            <input
            {...register("LinkedInProfileUrl", { required: "Please enter your full name." })} // custom message
            />

            <label>
            Contact Number
            </label>
            <input
            {...register("ContactNumber", { required: "Please enter your full name." })} // custom message
            />

            <label>
                Location
            </label>
            <input
                {...register("Location", { required: "Please enter your full name." })} // custom message
            />
            < input name="form" type="submit" value="Next" />
            </div>
        </form>
      </div>
    );
  }