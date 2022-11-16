import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
const {width, height} = Dimensions.get('window');
export default DateInput = ({label}) => {
  const [show, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, selectedDate) {
    setDatePicker(false);
    if (event?.type === 'dismissed') {
      setDate(date);
      return;
    }
    setDate(selectedDate);
  }

  return (
    <React.Fragment>
      {show && (
        <DateTimePicker
          value={date}
          mode={'date'}
          onChange={onDateSelected}
          style={Styles.datePicker}
        />
      )}
      <View style={{width: 0.9 * width, marginVertical: 10}}>
        <Text style={Styles.Label}>{label}</Text>
        <Pressable onPress={showDatePicker}>
          <View style={Styles.DateContainer}>
            <Text>{date.toDateString()}</Text>
          </View>
        </Pressable>
      </View>
    </React.Fragment>
  );
};
const Styles = StyleSheet.create({
  Label: {
    marginLeft: 5,
    fontSize: 16,
    color: '#59758b',
    fontWeight: '500',
    marginBottom: 5,
  },
  DateContainer: {
    width: '100%',
    height: 0.08 * height,
    borderRadius: 5,
    backgroundColor: '#f4f4f4',
    elevation: 5,
    justifyContent: 'center',
  },
});
