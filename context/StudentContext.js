import React, { createContext, useState, useEffect } from "react";
import {Alert} from 'react-native'


// create context
const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [studentData,SetStudentData]=useState([])
 
  useEffect(() => {
    const fetchStudent = () => {
      fetch("https://620502d5161670001741b2f7.mockapi.io/staff/student").then((response) => response.json()).then(item=>SetStudentData(item))
    .catch((error) => {
      if(error=="TypeError: Network request failed"){
        Alert.alert(
          "No Internet Connection",
          "Please check your internet connectivity",
          [
            {
              text: "Ok",
              onPress:()=>fetchStudent()  ,
              style: "default",
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>fetchStudent()  
          }
        );
      }
    });
    }
 
    fetchStudent();
  }, []);
  
  const setPostStudentData=(item)=>{
    
    SetStudentData([...studentData,item]);
    fetch("https://620502d5161670001741b2f7.mockapi.io/staff/student", {
      method: "POST",
      body: JSON.stringify({
         ...item
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())

    
      }

      const setPutStudentData=(item,id)=>{
    
        const clonearr=[...studentData]
        clonearr.splice(clonearr.findIndex(each=>each.id==id),1,item)
        SetStudentData(clonearr)
        fetch(`https://620502d5161670001741b2f7.mockapi.io/staff/student/${id}`, {
          method: "PUT",
          body: JSON.stringify({
             ...item
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
        }).then(response => response.json())
    
        
          }
    
  const DelStudentData=(id)=>{
    SetStudentData(prev=>prev.filter((item)=>item.id!==id))
   fetch(`https://620502d5161670001741b2f7.mockapi.io/staff/student/${id}`,{
    method: "DELETE",
   })
  }

  
  return (
    <StudentContext.Provider value={{studentData,SetStudentData,setPostStudentData,setPutStudentData,DelStudentData}}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentContextProvider };