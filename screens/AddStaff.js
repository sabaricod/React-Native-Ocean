import {ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import {useState,useContext} from 'react'
import TextBox from '../components/TextBox';
import CustomButton from "../components/customButton"
import {StaffContext} from '../context/staffContext'
const {width,height}= Dimensions.get("window")


export default AddStaff = () => {
  const {staffData,setPostData}=useContext(StaffContext)
  let id= staffData[staffData.length-1].id
  
  const [values, setValues] = useState({id:++id,staff_name:'', qualification:'',email:'',phone:'',profile_image:''});
  const initialState={id:++id,staff_name:'', qualification:'',email:'',phone:'',profile_image:''}
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <Text style={Styles.Title}>Add Staff Details</Text>
      <TextBox label="Staff Name" wdt={0.9} keyValue={'staff_name'} func={handleChange} value={values.staff_name}/>
      <TextBox label="Qualification" wdt={0.9} keyValue={'qualification'} func={handleChange} value={values.qualification}/>
      <TextBox label="Email" wdt={0.9} keyValue={'email'} func={handleChange} value={values.email}/>
      <TextBox label="Phone Number" wdt={0.9} keyValue={'phone'} func={handleChange} value={values.phone}/>
      <View style={{width:0.75*width,flexDirection:'row',height:0.15*height,alignItems:'center',justifyContent:'space-evenly'}}>
        <CustomButton
        Label="Submit"
        ripplecolor='#2d3b46'
        color="#59758b"
        width={0.25*width}
        height={0.07*height}
        textcolor="#F4F4F4"
        func={()=>{setPostData(values);setValues(initialState)}}
       />
        <CustomButton
        Label="Reset"
        ripplecolor='#2d3b46'
        color="#f4f4f4"
        width={0.25*width}
        height={0.07*height}
        textcolor="#59758b"
        func={()=>setValues(initialState)}
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
