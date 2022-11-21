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

export default EditDeptModel = ({id}) => {
  const {deptData,setPutDeptData}=useContext(DeptContext)
  const filteredItem = deptData.find((item)=>item.id==id) 
  const {staffData}=useContext(StaffContext)
  const [selectedCourse, setCourse] = useState({label:filteredItem.course_name,value:filteredItem.course_name});
  
  const [radiobutton,setRadioButton]=useState(filteredItem.no_section)

  const data=staffData.map((eachdata)=>{return({label:eachdata.staff_name,value:eachdata.staff_name,qualification:eachdata.qualification,email:eachdata.email,phone:eachdata.phone.toString()})})
  const [selectedStaff, setStaff] = useState(data.find(item=>item.label==filteredItem.staff_name))
  const [values, setValues] = useState({...filteredItem});
  
  
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
      <View style={{flex:1,width:"100%"}}> 
      <ScrollView contentContainerStyle={{alignItems: 'center',padding:10}}  showsVerticalScrollIndicator={false}>
      <Dropdown label="Choose" title="Course Name" wdt={0.7} data={courses} onSelect={selectCourseHandler} select={selectedCourse} />
      <Radiobutton PROP={section} wdt={0.7}label="No of Section" value={radiobutton} setValue={selectSection}/>
      <Dropdown label="Choose" title="Staff Name" wdt={0.7} data={data} onSelect={selectStaffHandler}  select={selectedStaff}/>
      <TextBox label="Qualification" wdt={0.7} keyValue={'qualification'}  value={selectedStaff.qualification} disable={true}/>
      <TextBox label="Email"  wdt={0.7}  keyValue={'email'} value={selectedStaff.email} disable={true}/>
      <TextBox label="Phone"  wdt={0.7} keyValue={'phone'}  value={selectedStaff.phone} disable={true}/>
      <View style={{marginVertical:10}}>
        <CustomButton
        Label="Submit"
        ripplecolor='#2d3b46'
        color="#59758b"
        width={0.25*width}
        height={0.07*height}
        textcolor="#F4F4F4"
        func={()=>setPutDeptData(values,id)}
       />
      </View>  
    </ScrollView>
    </View>
  );
};

