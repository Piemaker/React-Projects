import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  
  const fetchData = async(url)=>{

   try {
     const response = await fetch(url);
     const data = await response.json();
     setIsLoading(false);
     setData(data);
    //  //display first element of array better if done with another state
    //  setEmployees([data[0]])
    setEmployees(data.filter(x => x.company === company));

   } catch (error) {
     console.log(error)
   }
  }
  const [employees, setEmployees] = useState([]);
  //copy of the data use for rendering the buttons and filtering the employees
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState("TOMMY");


  useEffect(()=>{
    
  fetchData(url);
 
},[])

  const filterData = (company) => {
    const filteredData = data.filter( employee => {

      return employee.company === company});

    setEmployees(filteredData);
    setCompany(company);

  };
  if(isLoading){
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  else{
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((employee) => {
            return <button className= {`job-btn ${employee.company === company && "active-btn"}`}  key = {employee.company} onClick = {()=> filterData(employee.company)}>{employee.company}</button>;
          })}
        </div>
        {
           employees.map(employee =>{
             const {id , order , title, dates, duties , company} = employee;
             return(
 <article className="job-info" key = {id}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty, index) => {
              return(
 <div className="job-desc" key = {index}>
            <FaAngleDoubleRight className = "job-icon"></FaAngleDoubleRight>
            {duty}
          </div>
              )
            })
          }
        </article>
             )
           })
          }
      </div>
      <button type = "button" className = "btn">more info</button>
    </section>
  );}
}

export default App
