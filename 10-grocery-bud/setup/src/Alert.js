import React, { useEffect } from 'react'

const Alert = ({ groceries , isAdded,setIsAdded,isRemoved,isEmpty, setIsEmpty, setIsRemoved, isEdited, setIsEdited , isClear,setIsClear ,}) => {
  let alertClass = "" ;
  let message = "";
  if (isAdded || isEdited) {
    alertClass = "alert-success";
    if (isAdded) {
      message = "Item Added To The List";
    } else {
      message = "value changed";
    }
  } else if (isRemoved || isClear || isEmpty) {
    alertClass = "alert-danger";
    if (isRemoved) {
      message = "item removed";
    } else if (isClear) {
      message = "empty list";
    }
    else{
      message = "please enter a value"
    }
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if(isAdded){
      setIsAdded(false);
      }
      else if (isClear){
      setIsClear(false);

      }
      else if (isEdited){
      setIsEdited(false);

      }
      else if(isEmpty){
      setIsEmpty(false);

      }
      else if(isRemoved){
      setIsRemoved(false);

      }
    }, 2500);
    return () => clearTimeout(timeOut);
  }, [isAdded, isClear, isEdited, isRemoved,isEmpty,groceries]);
  return <p  className = {`alert ${alertClass}`} >{message}</p>
}

export default Alert
