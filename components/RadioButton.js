import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
export default  RadioButton =({PROP,label,value,setValue,wdt})=> {
	
		
		return (
            <View style={{width: wdt*width,marginVertical:10}}>
            <Text style={styles.Label}>{label}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:0.1*height,alignItems:'center',paddingHorizontal:10}}>
				{PROP.map(res => {
					return (
						<View key={res} style={styles.radioContainer}>
                            <View>
                            <TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									setValue(res)
								}}>
                                  {value === res && <View style={styles.selectedRb} />}
							</TouchableOpacity>
                            </View>
							<Text style={styles.radioText}>{res}</Text>
							</View>
					);
				})}   
			</View>
            </View>
		);
	}

const styles = StyleSheet.create({
	radioContainer: {
        backgroundColor:'#f4f4f4',
        alignItems: 'center',
        flexDirection: 'row', 
        width:'30%',
        height:'90%',
        borderRadius:5,
        justifyContent:'space-around',
        paddingHorizontal:20,
        elevation:5
	},
    radioText: {
        fontSize: 16,
        color: '#000',
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#59758b',
		alignItems: 'center',
        justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 10,
		backgroundColor: '#59758b',
    },
    Label: {
        marginLeft: 5,
        fontSize: 16,
        color: '#59758b',
        fontWeight: '500',
        marginBottom:5
      },
    
});