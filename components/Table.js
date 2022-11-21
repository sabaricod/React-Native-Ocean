import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import RenderModal from '../modal_options/RenderModal'
import CustomButton from '../components/customButton';
import EditStaffModel from '../modal_options/EditStaffModel'
import EditDeptModel from  '../modal_options/EditDeptModel'
import EditStudentModel from '../modal_options/EditStudentModel'

const {width, height} = Dimensions.get('window');
let index = 0;

const Grid = ({headers,headerKey,widthArr, tableData, DelData,title}) => {

  const Data = {
    Header:headers ,
    HeaderKey:headerKey,
    widthArr:widthArr
  };

  
  const [dataintable, setData] = useState([]);
  next = () => {
    index < tableData.length - 2 ? (index = index + 2) : null;
    setData(tableData.slice(index, index + 2));
  };

  prev = () => {
    index > 0 ? (index = index - 2) : null;
    setData(tableData.slice(index, index + 2));
  };

  useEffect(() => {
    setData(tableData.slice(index,index+2))
  }, [tableData]);

  const Cell = ({
    viewstyles,
    textstyles,
    uniqcode,
    datarendered,
    index,
    first,
    checkbox,
  }) => {
    const [visible, setVisible] = useState(false);
    
    return (
      <View
        style={{
          ...viewstyles,
          width: first?0.2*width:Data.widthArr[index] * width,
          borderRightWidth: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={uniqcode}
       >
        <RenderModal id={datarendered} visible={visible} setVisible={setVisible} DelData={DelData} >
        {title=="ViewStaff"?<EditStaffModel id={datarendered}/>:title=="ViewCourse"?<EditDeptModel id={datarendered}/>:<EditStudentModel id={datarendered}/>}
        </RenderModal>
        {checkbox ? (
          <CheckBox
            value={visible}
            onValueChange={newValue => setVisible(newValue)}
          />
        ) : (
          <Text style={{...textstyles}}>{datarendered}</Text>
        )}
      </View>
    );
  };

  return (
    <View style={{width: '95%',marginVertical: 10}}>
     <View style={{borderRadius:20,overflow:'hidden'}}>
      <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
      
        <View style={{height: 0.5 * height, borderRadius: 10}}>
        {/* header */}
          <View style={{flexDirection: 'row', height: 0.1 * height}}>
            {Data.Header.map((label, index) => {
              if (index == 0) {
                return (
                  <React.Fragment key={'selectbox'}>
                    <Cell
                      viewstyles={{
                        backgroundColor: '#59758b',
                        borderColor: '#f4f4f4',
                      }}
                      textstyles={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '800',
                      }}
                      index={index}
                      first
                    />
                    <Cell
                      viewstyles={{
                        backgroundColor: '#59758b',
                        borderColor: '#f4f4f4',
                      }}
                      textstyles={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '800',
                      }}
                      datarendered={label}
                      uniqcode={'Header' + index}
                      key={'Header' + index}
                      index={index}
                    />
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment  key={'Header' + index}>
                  <Cell
                    viewstyles={{
                      backgroundColor: '#59758b',
                      borderColor: '#f4f4f4',
                    }}
                    textstyles={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '800',
                    }}
                    datarendered={label}
                    index={index}
                  />
                  </React.Fragment>
                );
              }
            })}
          </View>
          <View>
            {dataintable.map((eachrow, rowindex) => {
              let arr = [];
              Object.keys(eachrow).map((val, index) => {
                let matchindex = Data.HeaderKey.findIndex(
                  element => element == val,
                );
                arr[matchindex] = eachrow[val];
              });

              return (
                <View
                  style={{
                    flexDirection: 'row',
                    height: 0.2 * height,
                   
                  }}
                  key={rowindex}>
                  {arr.map((item, index) => {
                    if (index == 0) {
                      return (
                        <React.Fragment key={'sltrow' + rowindex + index}>
                          <Cell
                            viewstyles={{
                              backgroundColor: '#f4f4f4',
                              borderColor: 'black',
                            }}
                            textstyles={{
                              color: 'black',
                              fontSize: 14,
                            }}
                            datarendered={item}
                            uniqcode={'sltrow' + rowindex + index}
                            first
                            index={index}
                            checkbox
                          />

                          <Cell
                            viewstyles={{
                              backgroundColor: '#f4f4f4',
                              borderColor: 'black',
                            }}
                            textstyles={{
                              color: 'black',
                              fontSize: 14,
                            }}
                            datarendered={item}
                            uniqcode={'cell' + rowindex + index}
                            index={index}
                          />
                        </React.Fragment>
                      );
                    } else {
                      return (
                        <React.Fragment key={'cell' + rowindex + index}>
                        <Cell
                          viewstyles={{
                            backgroundColor: '#f4f4f4',
                            borderColor: 'black',
                          }}
                          textstyles={{
                            color: 'black',
                            fontSize: 14,
                          }}
                          datarendered={item}
                          uniqcode={'cell' + rowindex + index}
                          index={index}
                        />
                        </React.Fragment>
                      );
                    }
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      </View>
      <Text style={{width:'100%',textAlign:'center',color:'#59758b',fontSize:16,fontWeight:'600',marginVertical:0.04*height}}>{`Showing ${tableData.length!=0?index+1:0} to ${tableData.length<index+2?tableData.length:index+2} of ${tableData.length} entries`}</Text>
      <View
        style={{
          width: 0.9 * width,
          flexDirection: 'row',
          height: 0.15 * height,
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
        }}>
        <CustomButton
          Label="Previous"
          size={16}
          ripplecolor="#2d3b46"
          color="#59758b"
          width={0.30 * width}
          height={0.07 * height}
          textcolor="#F4F4F4"
          func={prev}
        />
        <CustomButton
          Label="Next"
          size={16}
          ripplecolor="#2d3b46"
          color="#59758b"
          width={0.30 * width}
          height={0.07 * height}
          textcolor="#F4F4F4"
          func={next}
        />
      </View>
    </View>
  );
};

export default Grid;
