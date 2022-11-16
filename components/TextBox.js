import {View, TextInput, StyleSheet, Dimensions, Text} from 'react-native';
const {width, height} = Dimensions.get('window');
export default TextBox = ({label, wdt,multiline, keyValue,func,disable,value}) => {
  return (
    <View style={{width: wdt * width,marginVertical:10}}>
      <Text style={Styles.Label}>{label}</Text>

      <TextInput
        style={[
          Styles.TextContainer,
          {height: multiline ? 0.2 * height : 0.08 * height},
        ]}
        multiline={multiline}
        onChangeText={(text) => func(keyValue, text)}
        editable={disable?false:true}
        value={value}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  TextContainer: {
    width: '100%',
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#f4f4f4',
    elevation: 5,
    color:'black'
  },
  Label: {
    marginLeft: 5,
    fontSize: 16,
    color: '#59758b',
    fontWeight: '500',
    marginBottom: 5,
  },
});
