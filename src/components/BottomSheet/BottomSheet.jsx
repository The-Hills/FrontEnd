import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {Modalize} from 'react-native-modalize';

const BottomSheet = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize adjustToContentHeight ref={modalizeRef}>
        <View style={{height: 600}}>
          <Text style={{color: 'black'}}>Bottomsdasdasdsahfgvjzhxdvgjdhgd</Text>
        </View>
      </Modalize>
    </>
  );
};

export default BottomSheet;

// const styles = StyleSheet.create({})
