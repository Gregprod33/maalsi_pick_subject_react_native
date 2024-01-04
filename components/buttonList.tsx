import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from './customButton';

const mainTopics = [
    "Big Data",
    "Blockchain",
    "Cloud et virtualisation",
    "Cybersécurité",
    "Développement",
    "IA",
    "Management et stratégie",
    "Mobilité",
    "Optimisation du SI",
    "SI et environnement"
  ];

const ButtonList = ({initialTopics, onSelectionChange }) => {
  const [selectedTopics, setSelectedTopics] = useState(initialTopics);

  const handlePress = (topic) => {
    const newSelectedTopics = selectedTopics.includes(topic) ? selectedTopics.filter(t => t !== topic) : [...selectedTopics, topic];
    setSelectedTopics(newSelectedTopics);
    onSelectionChange(newSelectedTopics);
  };

  return (
    <View style={styles.container}>
      {mainTopics.map((topic, index) => (
        <CustomButton 
          key={index}
          title={topic}
          onPress={() => handlePress(topic)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'white', 
      paddingVertical: 20,
      marginHorizontal: 4
    },
  });

export default ButtonList;
