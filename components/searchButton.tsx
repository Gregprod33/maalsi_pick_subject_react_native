import React, { useState } from 'react';
import { Button } from 'react-native-paper';


const searchButton = ({isLoading, onPress}) => {
    

  const handlePress = () => {
    onPress(); 
  };

return (
  <Button loading={isLoading} mode="contained" onPress={handlePress}>
    Rechercher
  </Button>
)
};

export default searchButton;