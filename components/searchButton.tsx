import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import customTheme from '../CustomTheme';


const searchButton = ({isLoading, onPress}) => {
    

  const handlePress = () => {
    onPress(); 
  };

return (
  <Button loading={isLoading} mode="contained" onPress={handlePress} style={{backgroundColor: customTheme.colors.tertiary, marginVertical: 30, borderRadius: 8 }}
    labelStyle={{ color: customTheme.colors.onBackground }} >
    Rechercher
  </Button>
)
};

export default searchButton;