import React from 'react'
import { View , StyleSheet, Dimensions } from 'react-native'
import CustomButton from "../components/customButton"

const {width,height}= Dimensions.get("window")

export default Home = ({navigation}) =>{
    return(
        <View style={Styles.container}>
        <View style={Styles.buttonContainer}>
         <CustomButton
         Label="Staff"
         size={18}
         ripplecolor='#2d3b46'
         color="#59758b"
         width={0.4*width}
         height={0.1*height}
         textcolor="#F4F4F4"
         navigation={navigation}
         screenPath="ViewStaff"
         />
         <CustomButton
         Label="Courses"
         size={18}
         ripplecolor='#2d3b46'
         color="#59758b"
         width={0.4*width}
         height={0.1*height}
         textcolor="#F4F4F4"
         navigation={navigation}
         screenPath="ViewCourse"
         />
         <CustomButton
         Label="Students"
         size={18}
         ripplecolor='#2d3b46'
         color="#59758b"
         width={0.4*width}
         height={0.1*height}
         textcolor="#F4F4F4"
         navigation={navigation}
         screenPath="Student"
         />
         </View>
        </View>
    )
}

const Styles= StyleSheet.create({
container:{
justifyContent:"center",
alignItems:"center",
flex:1,
width:width,
height:height,
},
buttonContainer:{
width:0.5*width,
height:0.4*height,
justifyContent:"space-evenly",
alignItems:"center"
}
})