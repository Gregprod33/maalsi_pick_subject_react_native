import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ButtonList from './components/buttonList';
import { PaperProvider } from 'react-native-paper';
import customTheme from './CustomTheme';

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

const App = () => {
  const [selectedTopics, setSelectedTopics] = useState(mainTopics);

  const handleSelectionChange = (newSelectedTopics) => {
    setSelectedTopics(newSelectedTopics);
  };

  return (
    <PaperProvider theme={customTheme}>
      <View style={{ backgroundColor: customTheme.colors.background }}>
        <ButtonList onSelectionChange={handleSelectionChange} initialTopics={selectedTopics}  />
        <Text style={{ color: 'white'}}>{JSON.stringify(selectedTopics)}</Text>
      </View>
    </PaperProvider>

  );
};

export default App;
