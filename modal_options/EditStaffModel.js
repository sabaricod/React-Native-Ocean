import {ScrollView,Dimensions,View} from 'react-native';
import {useState,useContext} from 'react'
import TextBox from '../components/TextBox';
import CustomButton from "../components/customButton"
import {StaffContext} from '../context/staffContext'
const {width,height}= Dimensions.get("window")


export default EditStaffModel = ({id}) => {
  const {staffData,setPutData}=useContext(StaffContext)
  const filteredItem = staffData.find((item)=>item.id==id) 
  const [values, setValues] = useState({...filteredItem});
 
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <View style={{flex:1,width:"100%"}}> 
    <ScrollView contentContainerStyle={{alignItems: 'center',padding:10}}>
      <TextBox label="Staff Name" wdt={0.70} keyValue={'staff_name'} func={handleChange} value={values.staff_name}/>
      <TextBox label="Qualification" wdt={0.70} keyValue={'qualification'} func={handleChange} value={values.qualification}/>
      <TextBox label="Email" wdt={0.70} keyValue={'email'} func={handleChange} value={values.email}/>
      <TextBox label="Phone Number" wdt={0.70} keyValue={'phone'} func={handleChange} value={values.phone.toString()}/>
        <View style={{marginVertical:10}}>
        <CustomButton
        Label="Submit"
        ripplecolor='#2d3b46'
        color="#59758b"
        width={0.25*width}
        height={0.07*height}
        textcolor="#F4F4F4"
        func={()=>{setPutData(values,id)}}
       />
       </View>
    </ScrollView>
    </View>
  );
};


