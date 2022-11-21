import React, { createContext, useState, useEffect,useRef } from "react";


// create context
const StaffContext = createContext();

const StaffContextProvider = ({ children }) => {
  const [staffData,SetStaffData]=useState([])
 
  useEffect(() => {
    const fetchStaff = () => {
      fetch("https://620502d5161670001741b2f7.mockapi.io/staff/staff").then((response) => response.json()).then(item=>SetStaffData(item))
    .catch((error) => {
      if(error=="TypeError: Network request failed"){
        if(error=="TypeError: Network request failed"){
          fetchStaff()        
      }
      }
    });
    }
 
    fetchStaff();
  }, []);
  
  const setPostData=(item)=>{
    
    SetStaffData([...staffData,item]);
    fetch("https://620502d5161670001741b2f7.mockapi.io/staff/staff", {
      method: "POST",
      body: JSON.stringify({
         ...item
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())

    
      }

      const setPutData=(item,id)=>{
    
        const clonearr=[...staffData]
        clonearr.splice(clonearr.findIndex(each=>each.id==id),1,item)
        SetStaffData(clonearr)
        fetch(`https://620502d5161670001741b2f7.mockapi.io/staff/staff/${id}`, {
          method: "PUT",
          body: JSON.stringify({
             ...item
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
        }).then(response => response.json())
    
        
          }
    
  const DelData=(id)=>{
   SetStaffData(prev=>prev.filter((item)=>item.id!==id))
   fetch(`https://620502d5161670001741b2f7.mockapi.io/staff/staff/${id}`,{
    method: "DELETE",
   })
  }

  
  return (
    <StaffContext.Provider value={{staffData,SetStaffData,setPostData,DelData,setPutData}}>
      {children}
    </StaffContext.Provider>
  );
};

export { StaffContext, StaffContextProvider };