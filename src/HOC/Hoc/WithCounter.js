import React,{useState} from "react";

const WithCounter = (WrappedCounter,number) => {

const NewComponent=()=>{
  const[counter,setCounter]=useState(0)


  const increament = () => {
        setCounter(counter+number)
        };
  return<WrappedCounter counter={counter} increament={increament}/>
}


  return NewComponent ;
};

export default WithCounter;
