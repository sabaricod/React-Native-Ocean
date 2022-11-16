

import CheckBox from '@react-native-community/checkbox';
import React, {  useRef, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  View,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import CustomButton from './customButton'
const {width, height} = Dimensions.get('window');




const FilterBox = ({ arrData,search,setSearch,setCheckBox}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = ()=> {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py+h+10);
    });
    setVisible(true);
  };

  const handleChange = (value) => {
    let temp = arrData.map((item) => {
        
      if (value === item.value) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setCheckBox(temp);
  };

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <Pressable
          style={styles.overlay}
          onPress={(event) => { if (event.target == event.currentTarget) { 
            setVisible(false); } }}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
          <Icon name="caret-up" size={40} color="#f4f4f4" style={{position:'absolute',top:-25,right:10,elevation:10}}/>
          <View style={styles.SearchContainer}>
            <Icon name="search" size={12} color="grey"/>
            <TextInput 
            style={{flex:1,fontSize:14}}
            placeholder="Search here"
            value={search}
            onChangeText={
              (text)=>setSearch(text)
            }/>
          </View>
          <View style={{width:'90%',height:'40%',marginBottom:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
           {
           arrData.map((res,index)=>{
             return(
              <View key={'radiofilter'+index} style={styles.radioContainer}>
              <CheckBox value={res.isChecked} onChange={()=>handleChange(res.value)} style={{ transform: [{ scale: 0.8 }] }} tintColors={{ true: '#59758b'}}/>
							<Text style={styles.radioText}>{res.label}</Text>
							</View>
             )
           })
           }
          </View>
          <CustomButton
         Label="filter"
         size={14}
         ripplecolor='#2d3b46'
         color="#59758b"
         width={0.25*width}
         height={0.05*height}
         textcolor="#F4F4F4"
         />
          </View>
        </Pressable>
      </Modal>
    );
  };

  return (
    
    <Pressable
      ref={DropdownButton}
      onPress={toggleDropdown}
    >
      <View style={styles.button}>
      {renderDropdown()}
     
      <Icon name="sliders-h" size={22} color={"#f4f4f4"} solid/>
      </View>
    </Pressable>
   
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#59758b',
    width:50,
    height: 40,
    elevation:5,
    borderRadius:5,
    paddingHorizontal:10
  },
  buttonText: {
    flex: 1,
    alignItems:'flex-start',
    fontSize:16
  },
  dropdown: {
    position: 'absolute',
    backgroundColor:'#f4f4f4',
    width:0.9*width,
    height:0.40*height,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    alignSelf:'center',
    borderRadius:5,
    elevation:10,
    alignItems:'center'
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Label: {
    marginLeft: 5,
    fontSize: 16,
    color: '#59758b',
    fontWeight: '500',
    marginBottom: 5,
  },
  SearchContainer:{
    width:'70%',
    height:0.06*height,
    borderRadius:5,
    backgroundColor:"#f4f4f4",
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:8,
    flexDirection:"row",
    elevation:5,
    marginVertical:20
    },
    radioContainer: {
     
      alignItems: 'center',
      flexDirection: 'row', 
      width:'50%',
      marginBottom:10, 
     
},
  radioText: {
      fontSize: 14,
      color: '#59758b'
 },
radioCircle: {
  height: 14,
  width: 14,
  borderRadius: 2,
  borderWidth: 1,
  borderColor: '#59758b',
  alignItems: 'center',
 justifyContent: 'center',
 marginRight:10
},
selectedRb: {
  width: 7,
  height: 7,
  borderRadius: 1,
  backgroundColor: '#59758b',
  },
});

export default FilterBox;
