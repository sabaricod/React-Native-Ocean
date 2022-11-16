import {ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import {useState,useContext} from 'react'
import TextBox from '../components/TextBox';
import CustomButton from "../components/customButton"
import Dropdown from "../components/customDropdown"
import Radiobutton from '../components/RadioButton'
import {DeptContext} from '../context/deptContext'
import {StaffContext} from '../context/staffContext'
const {width,height}= Dimensions.get("window")
const section = ['A','B','C']
const courses=[
  {label:'Kotlin',value:'kotlin'},
  {label:'Java',value:'java'},
  {label:'React',value:'react'},
  {label:'NDT',value:'NDT'},
  {label:'Reactnative',value:'reactnative'},
  {label:'Machine Technology',value:'Machine Technology'},
  {label:'Artificial intellegence',value:'artificial intellegence'},
  {label:'Manufacturing technology',value:'manufacturing technology'}]

export default AddCourse = () => {
  const {deptData,SetDeptData,setPostDeptData}=useContext(DeptContext)
  const {staffData}=useContext(StaffContext)
  const [selectedCourse, setCourse] = useState(undefined);
  const [selectedStaff, setStaff] = useState('');
  const [radiobutton,setRadioButton]=useState(null)

  const data=staffData.map((eachdata)=>{return({label:eachdata.staff_name,value:eachdata.staff_name,qualification:eachdata.qualification,email:eachdata.email,phone:eachdata.phone.toString()})})
  
  const [values, setValues] = useState({id:deptData.length+1,course_name:"", no_section:"", staff_name:""});
  
  const initialState= {id:deptData.length+1,course_name:"", no_section:"", staff_name:""}
  
  selectCourseHandler=(item)=>{
    setCourse(item)
    setValues({...values,course_name:item.value})
  }

  selectStaffHandler=(item)=>{
    setStaff(item)
    setValues({...values,staff_name:item.value})
  }
  selectSection=(item)=>{
    setRadioButton(item)
    setValues({...values,no_section:item})
  }

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <Text style={Styles.Title}>Add Department Details</Text>
      <Dropdown label="Choose" wdt={0.9} title="Course Name" data={courses} onSelect={selectCourseHandler} select={selectedCourse} />
      <Radiobutton PROP={section} wdt={0.9} label="No of Section" value={radiobutton} setValue={selectSection}/>
      <Dropdown label="Choose" wdt={0.9} title="Staff Name" data={data} onSelect={selectStaffHandler}  select={selectedStaff}/>
      <TextBox label="Qualification" wdt={0.9} keyValue={'qualification'}  value={selectedStaff.qualification} disable={true}/>
      <TextBox label="Email"  wdt={0.9}  keyValue={'email'} value={selectedStaff.email} disable={true}/>
      <TextBox label="Phone"  wdt={0.9} keyValue={'phone'}  value={selectedStaff.phone} disable={true}/>
      <View style={{width:0.75*width,flexDirection:'row',height:0.15*height,alignItems:'center',justifyContent:'space-evenly'}}>
        <CustomButton
        Label="Submit"
        ripplecolor='#2d3b46'
        color="#59758b"
        width={0.25*width}
        height={0.07*height}
        textcolor="#F4F4F4"
        func={()=>setPostDeptData(values)}
       />
        <CustomButton
        Label="Reset"
        ripplecolor='#2d3b46'
        color="#f4f4f4"
        width={0.25*width}
        height={0.07*height}
        textcolor="#59758b"
        func={()=>{
        setCourse(undefined);
        setStaff('');
        setRadioButton(null)  
        }}
        />  
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  Scroll: {
    alignItems: 'center',
    flex: 1,
  },
  Title: {
    color: '#59758b',
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
  },
});
