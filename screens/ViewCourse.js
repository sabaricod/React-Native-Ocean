
import { useContext } from 'react'
import { View , StyleSheet, Dimensions,Text } from 'react-native'
import CustomButton from "../components/customButton"
import Grid from '../components/Table'
import {DeptContext} from '../context/deptContext'

const {width,height}= Dimensions.get("window")
const ViewCourse = ({navigation}) =>{
   
    const {deptData,DelDeptData}=useContext(DeptContext)
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
         />
         </View>
         <Grid
         headers={["id","course_name", "no_section", "staff_name"]}
         tableData={deptData}
         widthArr={[0.2,0.7,.5,.7]}
         DelData={DelDeptData}
         title="ViewCourse"
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