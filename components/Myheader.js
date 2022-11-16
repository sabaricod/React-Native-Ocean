import {View,StyleSheet, Dimensions,  TextInput,Modal,Pressable,Text} from 'react-native'
import {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const {width,height}=Dimensions.get('window')
export default MyHeader=({layout,navigation,modal})=>{
  const[modalVisible,setVisible]=useState(false)
  const getModal=()=>{
      setVisible(true)
  }

  const CustomModel=()=>{
    return(
      <Modal
      transparent
      animationType={"fade"}
      visible={modalVisible}
      onRequestClose={() => setVisible(false)}>
     
        <View style={Styles.modal} >
        <Pressable style={Styles.outsideModal}
        onPress={(event) => { if (event.target == event.currentTarget) { 
          setVisible(false); } }} >
          <View style={Styles.modalContent}>
            {
              [
                {screen:'Home',label:'Home'},
                {label:'View Staff',screen:'ViewStaff'},
                {label:'View Course',screen:'ViewCourse'},
                {screen:'Student',label:'Student'}
              ].map((navigationLabel)=>{
            return(
            <Pressable onPress={()=>{navigation.navigate(navigationLabel.screen);setVisible(false)}} key={navigationLabel.screen}>
            <View style={{width:"100%",alignItems:'center',paddingVertical:10}} >
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{navigationLabel.label}</Text>
            </View>
              </Pressable>)})
            }
          </View>
          </Pressable>
        </View>
      
    </Modal>
    )
  }


    return(
        <View style={Styles.HeaderContainer}>
        <Icon name="bars" size={32} color="#f4f4f4" onPress={getModal}/>
        <View style={Styles.TextContainer}>
            <Icon name="search" size={20} color="grey"/>
            <TextInput 
            style={{flex:1,fontSize:18}}
            placeholder="Search"/>
        </View>
        <Icon name="user-circle" size={42} color="#f4f4f4" solid />
        {modalVisible&&<CustomModel/>}
        </View>
    )
}

const Styles= StyleSheet.create({
    HeaderContainer:{
        flexDirection:'row',
        width:width,
        height:0.10*height,
        backgroundColor:'#59758b',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    TextContainer:{
        width:0.65*width,
        height:0.06*height,
        borderRadius:5,
        backgroundColor:"#F4f4f4",
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:3,
        flexDirection:"row"
    },
    modal: {
      flex: 1,
      width:'100%',    
      backgroundColor: '#00000070',
      elevation: 5,
    },
    modalContent: {
      width:'60%',
      backgroundColor:'#59758b',
      paddingVertical:30,
      flex:1,
      borderTopRightRadius:30,
      borderBottomRightRadius:30
    },
   
    outsideModal: {      
      flex: 1,
    }
})