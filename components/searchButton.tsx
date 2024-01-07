import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import customTheme from '../CustomTheme';


const searchButton = ({isLoading, onPress}) => {
    

  const handlePress = () => {
    onPress(); 
  };

return (
  <Button loading={isLoading} mode="contained" onPress={handlePress} style={{backgroundColor: customTheme.colors.tertiary, marginTop: 20, marginBottom: 15, borderRadius: 8, width: '40%' }}
    labelStyle={{ fontSize: 12, marginHorizontal: 8, marginVertical: 8, color: customTheme.colors.onBackground }} >
    {isLoading ? '\u00A0' : 'Rechercher'}
  </Button>
)
};

export default searchButton;