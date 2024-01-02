import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../CustomTheme';
import { useState } from 'react';



const CustomButton = ({ title, onPress }) => {
  const [isSelected, setIsSelected] = useState(true);

  const handlePress = () => {
    setIsSelected(!isSelected); 
    onPress(); 
  };

  return (
    <Button 
      mode='contained' 
      onPress={handlePress}
      style={{ backgroundColor: isSelected ? theme.colors.darkYellow : theme.colors.primary,
        borderRadius: 8,
        margin: 4
      }}
      labelStyle={{ fontSize: 8, fontWeight: 'bold', marginHorizontal: 4, marginVertical: 0 }} >
      {title}
    </Button>
  );
};


export default CustomButton;
