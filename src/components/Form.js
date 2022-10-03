import React, { useState } from "react";

function Form(props) {
  const[userData, setUserData] = useState({
    firstName:'Eshter',
    lastName:'Caro',
  });
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([]);


  function handleNamesChange(event){
    const {value, name} = event.target;
    setUserData({
      ...userData,
      [name]:value,
    })

    console.log(userData)
  }

  
  function handleSubmit(e) {
    e.preventDefault();

    if(userData.firstName.length > 0) {
  
      const newArray = [...submittedData, userData];
      setSubmittedData(newArray);


      setUserData({
        firstName:'',
        lastName:'',
      })
      setErrors([])
    }
    else{
      setErrors(["FirstName is required"]);
    }
    

    console.log(submittedData)
  }
    const listData = submittedData.map((data, index) => <li key={index}>{data.firstName} {data.lastName}</li>)

  return (
    <div className="contatiner">
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleNamesChange} value={userData.firstName}  name="firstName"/>
      <input type="text" onChange={handleNamesChange} value={userData.lastName}  name="lastName"/>
      <button type="submit">Submit</button>

    </form>

    {errors.length > 0 ? errors.map((error, index) => {
      return <p key={index} style={{color:"red"}}>{error}</p>
    }): null}
    <h2>Submissions</h2>
    <ul>
    {listData}
    </ul>
    </div>
  
  );
}

export default Form;