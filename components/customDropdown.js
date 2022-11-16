

import React, {  useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  View,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const {width, height} = Dimensions.get('window');




const Dropdown = ({ label, data, onSelect ,title,select,wdt}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = ()=> {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py+h);
    });
    setVisible(true);
  };

  const onItemPress = (item)=> {
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item })=> (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{textAlign:'center',fontSize:14}}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <Pressable
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Pressable>
      </Modal>
    );
  };

  return (
    <View style={{width: wdt * width,marginVertical:10}}>
      <Text style={styles.Label}>{title}</Text>
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(select && select.label) || label}
      </Text>
      <Icon name="caret-down" size={16} color={"#59758b"}/>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    width:"100%",
    height: 0.08*height,
    elevation:5,
    borderRadius:10,
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
    width:"90%",
    height:0.25*height,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    alignSelf:'center',
    borderRadius:5,
    elevation:10
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
});

export default Dropdown;
