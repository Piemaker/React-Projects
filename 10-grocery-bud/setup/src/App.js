import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage = () => {
  let list = localStorage.getItem("groceries");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("groceries")));
  } else {
    return [];
  }
};

function App() {
  //instead of adding multiple flags you can make an object with a type key instead
  const [item, setItem] = useState({grocery: "", id: ""});
  const [groceries, setGroceries] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [id, setId] = useState();
  const removeItem = (id)=>{
    const newGroceries = groceries.filter(grocery => grocery.id !== id);
    setIsRemoved(true);
    setGroceries(newGroceries);
  }
  const clearItems = ()=>{
    setIsClear(true);
    setGroceries([]);
  }
  const editItem = (id)=>{
    setIsEdit(true);
    setId(id);
    const specificItem = groceries.find((item) => item.id === id);
    setItem(specificItem)
  }
  const handleChange = (event)=>{
    const value = event.target.value;
    const name = event.target.name;
    setItem({ [name]: value, id: new Date().getTime().toString() });
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(item.grocery){
    if(isEdit){
      const index = groceries.findIndex((item) => item.id == id);
      console.log("inside handle submit ", index);
      //you need to deep copy the array because it contains objects
      //https://stackoverflow.com/questions/7486085/copy-array-by-value
      const copy = JSON.parse(JSON.stringify(groceries));
      //react requires both the id and name to change in order to rerender
      //or probably requires the key to change which in this case is the ID
      copy[index] = item;
      console.log(groceries, copy);
      setGroceries(copy);
      setIsEdit(false);
      setIsEdited(true);
    }
    else{
      setIsAdded(true);
    setGroceries((prevGroceries)=>{
      return [...prevGroceries, item]

    });}}
    else{
      setIsEmpty(true);
    }

  }
  useEffect(()=>{
    setItem({ grocery: "", id: "" });
  localStorage.setItem("groceries", JSON.stringify(groceries)); 

  },[groceries])

  
  return (
    <section className="section-center">
      <form action="#" onSubmit={handleSubmit} className="grocery-form">
        { ([isAdded , isEmpty , isRemoved , isEdited , isClear].some(x => x === true))&&
         ( <Alert
          groceries={groceries}
          isAdded={isAdded}
          setIsAdded={setIsAdded}
          isEmpty={isEmpty}
          setIsEmpty={setIsEmpty}
          isRemoved={isRemoved}
          setIsRemoved={setIsRemoved}
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          isClear={isClear}
          setIsClear={setIsClear}
        ></Alert>)}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            name="grocery"
            className="grocery"
            placeholder="e.g eggs"
            value={item.grocery}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "edit" : "Submit"}
          </button>
        </div>
      </form>
      {groceries.length ? (
        <div className="grocery-container">
          <div className="grocery-list"></div>
          {groceries.map((grocery) => {
            console.log(grocery);

            return (
              <List
                key={grocery.id}
                {...grocery}
                removeItem={removeItem}
                editItem={editItem}
              ></List>
            );
          })}
          <button className="clear-btn" onClick={clearItems}>
            clear items
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default App
