import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './Styles';

const CustomButton = ({onPress,text,buttonColor}) => {

  return(

      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper,{backgroundColor:buttonColor}]}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>

  );

}

export default CustomButton;