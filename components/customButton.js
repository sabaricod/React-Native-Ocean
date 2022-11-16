import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
export default CustomButtom = ({Label,size,ripplecolor,color,textcolor,width,height,navigation,screenPath,func}) =>{
return(
    <View style={Styles.outercontainer}>
        <Pressable 
        onPress={navigation?()=>{navigation.navigate(screenPath)}:func}
        android_ripple={{color:ripplecolor}}
        style={[Styles.innercontainer,{width:width,height:height,backgroundColor:color}]}>
            <Text style={{fontSize:size,fontWeight:'600',color:textcolor}}>
             {Label}
            </Text>
        </Pressable>
    </View>
)
}

const Styles= StyleSheet.create({
    outercontainer: {
    borderRadius: 6,
    overflow: "hidden",
    elevation: 5,
  },
    innercontainer: {
    justifyContent: "center",
    alignItems: "center"
  }
  
})