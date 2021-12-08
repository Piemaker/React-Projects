import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [isLoading, isSetLoading] = useState(true);
  const [isError, isSetError] = useState(false);
  const [tours, setTours] = useState([]);
  const removeTour = (id)=>{
    const newTours =tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const getData = async () => {
    try{
    const resp = await fetch(url);
    if(resp.status >= 200 && resp.status < 300){
      isSetLoading( false);
      const tours = await resp.json();
      setTours(tours);
      console.log(tours);
    }
    }
    catch(err){
      isSetLoading(false);
      isSetError(true);
      console.log(err)
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if(isLoading){
    return(
      <main>
      <Loading></Loading>
      </main>
    )
  }
  else if(isError)
  {
    return(
<main>
  <h1>Error....</h1>
</main>)
  }
  else{
    return(
    tours.length ? (
   <main>
     <section>
       <div className="title">
         <h2>Our Tours</h2>
         <div className="underline"></div>
       </div>
       <div>
         {/* note that you can map this part inside the tours.js */}
         {tours.map((tour) => {
           return <Tours key={tour.id} props={tour} removeTour = {removeTour}></Tours>;
         })}
       </div>
     </section>
     {console.log(tours)}
   </main>)
   : (<main>
   <section>
       <div className="title">
         <h2>No tours left</h2>
         <button className="btn" onClick = {()=> getData()}>Refresh</button>
         </div>
         </section>
 </main>)
 )
  }
}
  

export default App
