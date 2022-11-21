import { ScrollView ,StyleSheet,Text,View,Dimensions} from "react-native"
import TextBox from '../components/TextBox'
import DateInput from "../components/DateInputfield"
import Grid from '../components/Table'
import CustomButton from '../components/customButton'
import Dropdown from '../components/customDropdown' 
import { useState,useContext } from "react"
import {DeptContext} from '../context/deptContext'
import {StudentContext} from '../context/StudentContext'
import FilterBox from '../components/filterBox'
const {width,height}= Dimensions.get("window")

const arrData=[
    {label:'ID',value:'id',isChecked: false, wdt:0.2 },
    {label:'Student Name',value:'student_name',isChecked: false, wdt:0.6 },
    {label:'Father Name',value:'Father_name',isChecked: false, wdt:0.6 },
    {label:'Email',value:'email',isChecked: false, wdt:0.8 },
    {label:'Department',value:'department',isChecked: false, wdt:0.9  },
    {label:'Joining Date',value:'joining_date',isChecked: false, wdt:0.9 },
    {label:'Aadhaar No',value:'addharcard_no',isChecked: false, wdt:0.9 },
    {label:'Address',value:'address',isChecked: false, wdt:0.9 },
]


export default Student=()=>{
    const {studentData,SetStudentData,setPostStudentData,setPutStudentData,DelStudentData}=useContext(StudentContext)
    const {deptData}=useContext(DeptContext)
    const [selectedDept, setDept] = useState(''); 
    const [checkBox,setCheckBox]=useState(arrData)
    const [header,setHeader]=useState(arrData.map(item=>item.label))
    const [headerKey,setHeaderKey]=useState(arrData.map(item=>item.value))
    const [widthArr,setwidthArr]=useState(arrData.map(item=>item.wdt))   
    const data=deptData.map((eachdata)=>{return({label:eachdata.course_name,value:eachdata.course_name,no_section:eachdata.no_section,staff_name:eachdata.staff_name})})
    const [values, setValues] = useState( {id:studentData.length+1,student_name:"",Father_name:'',email:'',department:'',joining_date:'',addharcard_no:'',address:''});
    const [search,SetSearch]=useState(null)
    const gridHandler=()=>{
        let varArr=checkBox.filter(item=>item.isChecked==true)
        setHeader(varArr.length!=0?varArr.map(item=>item.label):checkBox.map(item=>item.label))
        setHeaderKey(varArr.length!=0?varArr.map(item=>item.value):checkBox.map(item=>item.value))
        setwidthArr(varArr.length!=0?varArr.length<2?varArr.map(item=>item.wdt>0.75?item.wdt:0.75):varArr.map(item=>item.wdt):checkBox.map(item=>item.wdt))
    }
    
    const initialState= {id:studentData.length+1,student_name:"",Father_name:'',email:'',department:'',joining_date:'',addharcard_no:'',address:''}
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
        <ScrollView contentContainerStyle={{alignItems:"center"}}  showsVerticalScrollIndicator={false}>
        <Text style={Styles.Title}>Add Student Details</Text> 
        <TextBox label="Student Name" wdt={0.9} keyValue={'student_name'} func={handleChange} value={values.student_name}/>
        <TextBox label="Father Name" wdt={0.9} keyValue={'Father_name'} func={handleChange} value={values.Father_name}/>
        <TextBox label="Email" wdt={0.9} keyValue={'email'} func={handleChange} value={values.email}/>
        <Dropdown label="Choose" wdt={0.9} title="department" data={data} onSelect={selectDeptHandler}  select={selectedDept}/>
        <TextBox label="No of Section" wdt={0.9} keyValue={'no_section'} func={handleChange} value={selectedDept.no_section} disable={true}/>
        <TextBox label="Staff Name" wdt={0.9} keyValue={'staff_name'} func={handleChange} value={selectedDept.staff_name} disable={true}/>
        <DateInput label="Joining Date" selectDate={DateHandler} wdt={0.9}/>
        <TextBox label="Aadhaar card No" wdt={0.9} keyValue={'addharcard_no'} func={handleChange} value={values.addharcard_no}/>
        <TextBox label="Address" wdt={0.9} keyValue={'address'} func={handleChange} value={values.address} multiline/>
        <View style={{width:0.75*width,flexDirection:'row',height:0.15*height,alignItems:'center',justifyContent:'space-evenly'}}>
        <CustomButton
        Label="Submit"
        ripplecolor='#2d3b46'
        color="#59758b"
        width={0.25*width}
        height={0.07*height}
        textcolor="#F4F4F4"
        func={()=>{
            setPostStudentData(values)
            setValues(initialState)
            setDept('')}}
        size={16}
       />
        <CustomButton
        Label="Reset"
        ripplecolor='#2d3b46'
        color="#f4f4f4"
        width={0.25*width}
        height={0.07*height}
        textcolor="#59758b"
        func={()=>{
            setValues(initialState)
            setDept('')
        }}
        size={16}
        />  
      </View>
      <View style={{flexDirection:'row', width:'65%',alignSelf:'flex-end',justifyContent:'space-between',alignItems:'center',marginRight:0.030*width,paddingVertical:10}}>
        <Text style={[Styles.Title]}>Student Details</Text> 
        <FilterBox arrData={checkBox}  search={search} setSearch={SetSearch} setCheckBox={setCheckBox} func={gridHandler}/>
        </View>
        <Grid
         headers={header}
         headerKey={headerKey}
         widthArr={widthArr}
         tableData={studentData}
         DelData={DelStudentData}
         title="Student"
         />
      
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
        fontWeight:'700',
    }
})