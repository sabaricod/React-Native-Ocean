import React, {useState} from 'react';
import {View, Dimensions,Modal,Pressable} from 'react-native';
const {width, height} = Dimensions.get('window');
import CustomButton from '../components/customButton'


const RenderModal = ({id,visible,setVisible,DelData,children}) => {
    const [buttonSwitch,setSwitch]=useState(true)
    return (
      <Modal visible={visible} transparent animationType="none">
        <Pressable
          style={ {
            width: '100%',
            height: '100%',
            backgroundColor: '#00000070',
          }}
          onPress={(event) => { if (event.target == event.currentTarget) { 
            setVisible(false);
            setSwitch(true)
         } }}
        >
          <View style={{position:'absolute',width:0.85*width,height:0.75*height,backgroundColor:'#f4f4f4',left:width*0.075,top:height*0.125,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            {buttonSwitch?
                <View style={{height:"40%",justifyContent:'space-evenly',padding:10}}>
            <CustomButton
            Label="Delete"
            ripplecolor='#2d3b46'
            color="#59758b"
            width={0.4*width}
            height={0.1*height}
            textcolor="#F4F4F4"
            size={16}
            func={()=>DelData(id)}/>
            <CustomButton
            Label="Edit"
            ripplecolor='#2d3b46'
            color="#59758b"
            width={0.4*width}
            height={0.1*height}
            textcolor="#F4F4F4"
            size={16}
            func={()=>setSwitch(false)}/>
            </View>:
           
            children
            }

          </View>
        </Pressable>
      </Modal>
    );
  };

  export default RenderModal