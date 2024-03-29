import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../CustomTheme';




const CustomButton = ({ title, onPress, isSelected }) => {


  return (
    <Button 
      mode='contained' 
      onPress={onPress}
      style={{ backgroundColor: isSelected ? theme.colors.darkYellow : theme.colors.primary,
        borderRadius: 8,
        margin: 4
      }}
      labelStyle={{ fontSize: 8, fontWeight: 'bold', marginHorizontal: 4, marginVertical: 0, color: theme.colors.onBackground }} >
      {title}
    </Button>
  );
};


export default CustomButton;
