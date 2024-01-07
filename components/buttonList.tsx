import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from './customButton';
import customTheme from '../CustomTheme';
import SelectCheckbox from './selectCheckbox';


const ButtonList = ({ initialTopics, onSelectionChange }) => {
  const [selectedTopics, setSelectedTopics] = useState(initialTopics);
  const [isChecked, setChecked] = useState(true);

  useEffect(() => {
    // Mise à jour lors de la modification de la case à cocher
    const newSelectedTopics = isChecked ? initialTopics : [];
    setSelectedTopics(newSelectedTopics);
    onSelectionChange(newSelectedTopics);
  }, [isChecked, onSelectionChange]);

  const handlePress = (topic) => {
    // Mise à jour lors de la pression sur un bouton
    const updateSelectedTopics = selectedTopics.includes(topic) 
      ? selectedTopics.filter(t => t !== topic) 
      : [...selectedTopics, topic];
    setSelectedTopics(updateSelectedTopics);
    onSelectionChange(updateSelectedTopics);
  };

  const handleSelect = () => {
    setChecked(!isChecked);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
        <Text style={{ color: customTheme.colors.tertiary, fontSize: 10 }}>Tous</Text>
        <SelectCheckbox onPress={handleSelect} isChecked={isChecked}></SelectCheckbox>
      </View>
      <View style={styles.container}>
      {initialTopics.map((topic, index) => (
        <CustomButton 
          key={index}
          title={topic}
          onPress={() => handlePress(topic)}
          isSelected={selectedTopics.includes(topic)}
        />
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: customTheme.colors.tertiary,
      paddingVertical: 8,
      marginHorizontal: 4
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  });

export default ButtonList;
