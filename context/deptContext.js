import React, { createContext, useState, useEffect } from "react";

// create context
const DeptContext = createContext();


const DeptContextProvider = ({ children }) => {
  const [deptData,SetDeptData]=useState([])
  useEffect(() => {
    const fetchDept =async () => {
     await fetch("https://620502d5161670001741b2f7.mockapi.io/staff/department").then((response) => response.json()).then(item=>SetDeptData(item))
    .catch((error) => {
      if(error=="TypeError: Network request failed"){
        fetchDept()        
      }
    });
    }

    fetchDept();
    return ()=>{
     
        }
  }, []);
  const setPostDeptData=(item)=>{
    SetDeptData([...deptData,item])
    fetch("https://620502d5161670001741b2f7.mockapi.io/staff/department", {
      method: "POST",
      body: JSON.stringify({
         ...item
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      }


      const setPutDeptData=(item,id)=>{
    
        const clonearr=[...deptData]
        clonearr.splice(clonearr.findIndex(each=>each.id==id),1,item)
        SetDeptData(clonearr)
        fetch(`https://620502d5161670001741b2f7.mockapi.io/staff/department/${id}`, {
          method: "PUT",
          body: JSON.stringify({
             ...item
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
        }).then(response => response.json())
    
        
          }
    
  const DelDeptData=(id)=>{
    SetDeptData(prev=>prev.filter((item)=>item.id!==id))
   fetch(`https://620502d5161670001741b2f7.mockapi.io/staff/department/${id}`,{
    method: "DELETE",
   })
  }
  
  return (
    <DeptContext.Provider value={{deptData,setPostDeptData,setPutDeptData,DelDeptData}}>
      {children}
    </DeptContext.Provider>
  );
};

export { DeptContext, DeptContextProvider};