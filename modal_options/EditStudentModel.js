import { ScrollView ,StyleSheet,Text,View,Dimensions} from "react-native"
import TextBox from '../components/TextBox'
import DateInput from "../components/DateInputfield"

import CustomButton from '../components/customButton'
import Dropdown from '../components/customDropdown' 
import { useState,useContext } from "react"
import {DeptContext} from '../context/deptContext'
import {StudentContext} from '../context/StudentContext'

const {width,height}= Dimensions.get("window")


export default EditStudentModel=({id})=>{
    const {studentData,setPutStudentData}=useContext(StudentContext)
    const {deptData}=useContext(DeptContext)
    const filteredItem = studentData.find((item)=>item.id==id) 
    const data=deptData.map((eachdata)=>{return({label:eachdata.course_name,value:eachdata.course_name,no_section:eachdata.no_section,staff_name:eachdata.staff_name})})
    const [values, setValues] = useState({...filteredItem});
    const [selectedDept, setDept] = useState(data.find(item=>item.label==filteredItem.department)); 
    
    const handleChange = (name, value) => {
        setValues({
          ...values,
          [name]: value,
        });
      };
    selectDeptHandler=(item)=>{
      setDept(item)
      setValues({...values,department:item.value})
    }
    
    DateHandler=(item)=>{
        setValues({
            ...values,
            joining_date: item.toDateString(),
          });  
    }
   
    return(
    <View style={{flex:1,width:"100%"}}> 
    <ScrollView contentContainerStyle={{alignItems: 'center',padding:10}}  showsVerticalScrollIndicator={false}>
        <Text style={Styles.Title}>Add Student Details</Text> 
        <TextBox label="Student Name" wdt={0.7} keyValue={'student_name'} func={handleChange} value={values.student_name}/>
        <TextBox label="Father Name" wdt={0.7} keyValue={'Father_name'} func={handleChange} value={values.Father_name}/>
        <TextBox label="Email" wdt={0.7} keyValue={'email'} func={handleChange} value={values.email}/>
        <Dropdown label="Choose" wdt={0.7} title="department" data={data} onSelect={selectDeptHandler}  select={selectedDept}/>
        <TextBox label="No of Section" wdt={0.7} keyValue={'no_section'} func={handleChange} value={selectedDept.no_section} disable={true}/>
        <TextBox label="Staff Name" wdt={0.7} keyValue={'staff_name'} func={handleChange} value={selectedDept.staff_name} disable={true}/>
        <DateInput label="Joining Date" selectDate={DateHandler} wdt={0.7}/>
        <TextBox label="Aadhaar card No" wdt={0.7} keyValue={'addharcard_no'} func={handleChange} value={values.addharcard_no.toString()}/>
        <TextBox label="Address" wdt={0.7} keyValue={'address'} func={handleChange} value={values.address} multiline/>
        <CustomButton
        Label="Submit"
        ripplecolor='#2d3b46'
        color="#59758b"
        width={0.25*width}
        height={0.07*height}
        textcolor="#F4F4F4"
        func={()=>setPutStudentData(values,id)}
        size={18}
       />
    </ScrollView>
    </View>
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
        fontWeight:'700',
    }
})