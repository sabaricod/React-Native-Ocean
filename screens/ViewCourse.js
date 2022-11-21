
import { useContext,useState } from 'react'
import { View , StyleSheet, Dimensions,Text } from 'react-native'
import CustomButton from "../components/customButton"
import Grid from '../components/Table'
import {DeptContext} from '../context/deptContext'
import FilterBox from '../components/filterBox'

const {width,height}= Dimensions.get("window")
const arrData=[
    {label:'ID',value:'id',isChecked: false, wdt:0.2 },
    {label:'Course Name',value:'course_name',isChecked: false, wdt:0.6 },
    {label:'No of Section',value:'no_section',isChecked: false, wdt:0.6  },
    {label:'Staff Name',value:'staff_name',isChecked: false, wdt:0.9 },
]
const ViewCourse = ({navigation}) =>{
   
    const {deptData,DelDeptData}=useContext(DeptContext)
    const [checkBox,setCheckBox]=useState(arrData)
    const [header,setHeader]=useState(arrData.map(item=>item.label))
    const [headerKey,setHeaderKey]=useState(arrData.map(item=>item.value))
    const [widthArr,setwidthArr]=useState(arrData.map(item=>item.wdt))
    const [search,SetSearch]=useState(null)
    const gridHandler=()=>{
        let varArr=checkBox.filter(item=>item.isChecked==true)
        setHeader(varArr.length!=0?varArr.map(item=>item.label):checkBox.map(item=>item.label))
        setHeaderKey(varArr.length!=0?varArr.map(item=>item.value):checkBox.map(item=>item.value))
        setwidthArr(varArr.length!=0?varArr.length<2?varArr.map(item=>item.wdt>0.75?item.wdt:0.75):varArr.map(item=>item.wdt):checkBox.map(item=>item.wdt))
    }
    return(
        <View style={Styles.container}>
        <View style={Styles.titleLayout}>
        <Text style={Styles.title}>
            Department Details
        </Text>
         <CustomButton
         Label="Add"
         ripplecolor='#2d3b46'
         color="#59758b"
         width={0.2*width}
         height={0.05*height}
         textcolor="#F4F4F4"
         navigation={navigation}
         screenPath="AddCourse"
         size={18}
         />
         </View>
         <View style={{width:'90%',alignItems:'flex-end',paddingHorizontal:5}}>
         <FilterBox arrData={checkBox}  search={search} setSearch={SetSearch} setCheckBox={setCheckBox} func={gridHandler}/>
         </View>
         <Grid
         headers={header}
         headerKey={headerKey}
         widthArr={widthArr}
         tableData={deptData}
         DelData={DelDeptData}
         title="ViewStaff"
         />
       
        </View>
    )
}

export default ViewCourse

const Styles= StyleSheet.create({
container:{
alignItems:'center',
flex:1,
width:width,
height:height,
},
titleLayout:{
    width:0.78*width,
    height:0.1*height,
    alignItems:"center",
    alignSelf:'flex-end',
    justifyContent:'space-between',
    flexDirection:'row',
    marginVertical:10,
    paddingHorizontal:0.05*width,
    },
title:{
    color:'#59758b',
    fontSize:20,
    fontWeight:'700',
}
},
)