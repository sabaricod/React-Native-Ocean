import { ScrollView ,StyleSheet,Text,View} from "react-native"
import TextBox from '../components/TextBox'
import DateInput from "../components/DateInputfield"
import Grid from '../components/Table'
import {useEffect} from 'react'
import { useState } from "react"



export default Student=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        getData = async()=>{
        await fetch('https://620502d5161670001741b2f7.mockapi.io/staff/student', {
            method: 'GET'
         }).then((res)=>res.text()).then((item)=>setData(item)).catch((error)=>console.log(error))

        }
        getData()
        return () => {
            // this now gets called when the component unmounts
          };
    })
    console.log(typeof data, data)
    return(
        <ScrollView contentContainerStyle={{alignItems:"center"}}>
        <Text style={Styles.Title}>Add Student Details</Text> 
        <TextBox label="Student Name"/>
        <TextBox label="Father Name"/>
        <TextBox label="Email"/>
        <TextBox label="No of section"/>
        <TextBox label="Father Name"/>
        <TextBox label="Address" multiline={true}/>
        <DateInput label="Joining Date"/>
        <Text style={[Styles.Title,{marginBottom:30}]}>Student Details</Text> 
        <View style={{elevation:10}}>
        <Grid
         headers={["id","Father_name", "Profile_image", "addharcard_no", "address", "department", "email",  "joining_date", "student_name", "tc_image"]}
         tableData={[          
            {Father_name: "father123", Profile_image: "studnet 123_profile", addharcard_no: "123456789000", address: "something", department: "course_name 1", email: "student@gmail.com", id: "4", joining_date: "2022 - 12 - 6", student_name: "studnet 123", tc_image: "studnet 123tc"},
            {Father_name: "father123", Profile_image: "studnet 123_profile", addharcard_no: "123456789000", address: "something", department: "course_name 1", email: "student@gmail.com", id: "4", joining_date: "2022 - 12 - 6", student_name: "studnet 123", tc_image: "studnet 123tc"},                   ]}
         widthArr={[0.2,0.4,.4,.7,.4,0.8,.4,.8,.9,.7,.6]}
         />
        </View>
        </ScrollView>
    )
}

const Styles= StyleSheet.create({
    Scroll:{
        alignItems:"center",
        flex:1,
    },
    Title:{
        color:'#59758b',
        fontSize:20,
        marginTop:10,
        fontWeight:'700'
    }
})