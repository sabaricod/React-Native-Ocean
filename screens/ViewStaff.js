
import { useContext,useState } from 'react'
import { View , StyleSheet, Dimensions,Text } from 'react-native'
import CustomButton from "../components/customButton"
import Grid from '../components/Table'
import {StaffContext} from '../context/staffContext'
import FilterBox from '../components/filterBox'

const {width,height}= Dimensions.get("window")

const arrData=[
    {label:'ID',value:'id',isChecked: false },
    {label:'Staff Name',value:'staff_name',isChecked: false },
    {label:'Qualification',value:'qualification',isChecked: false },
    {label:'Email',value:'email',isChecked: false },
    {label:'Phone Number',value:'phone',isChecked: false },
    {label:'Profile Image',value:'profile_image',isChecked: false }
]

const ViewStaff = ({navigation}) =>{
   
    const {staffData,DelData,SetStaffData}=useContext(StaffContext)
    const [checkBox,setCheckBox]=useState(arrData)
    const [search,SetSearch]=useState(null)
    
    
    
    return(
        <View style={Styles.container}>
        <View style={Styles.titleLayout}>
        <Text style={Styles.title}>
            Staff Details
        </Text>
         <CustomButton
         Label="Add"
         size={18}
         ripplecolor='#2d3b46'
         color="#59758b"
         width={0.2*width}
         height={0.05*height}
         textcolor="#F4F4F4"
         navigation={navigation}
         screenPath="AddStaff"
         />
         
         </View>
         <View style={{width:'90%',alignItems:'flex-end',paddingHorizontal:5}}>
         <FilterBox arrData={checkBox} setCheckBox={setCheckBox} search={search} setSearch={SetSearch} />
         </View>
         <Grid
         headers={["id","staff_name", "email", "phone", "profile_image"]}
         tableData={staffData}
         widthArr={[0.2,0.4,.8,.5,0.8]}
         DelData={DelData}
         title="ViewStaff"
         />
        
        </View>
    )
}

export default ViewStaff

const Styles= StyleSheet.create({
container:{
alignItems:'center',
flex:1,
width:width,
height:height,
},
titleLayout:{
width:0.70*width,
height:0.1*height,
alignItems:"center",
alignSelf:'flex-end',
justifyContent:'space-between',
flexDirection:'row',
paddingHorizontal:0.05*width,
},
title:{
    color:'#59758b',
    fontSize:20,
    fontWeight:'700'}
},
)