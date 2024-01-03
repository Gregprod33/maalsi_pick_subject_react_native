import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ButtonList from './components/buttonList';
import { PaperProvider } from 'react-native-paper';
import customTheme from './CustomTheme';
import SearchButton from './components/searchButton';

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
  const [isLoading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const handleSelectionChange = (newSelectedTopics) => {
    setSelectedTopics(newSelectedTopics);
  };

  const search = (topics) => {
      console.log("searching");
  }

  const handleSearch = () => {
      setLoading(true);
      setSearchInitiated(true);
      setTimeout(() => {
        search(selectedTopics);
        setLoading(false);
      }, 1000);
      
  }

  return (
    <PaperProvider theme={customTheme}>
      <View style={{ backgroundColor: customTheme.colors.background }}>
        <ButtonList onSelectionChange={handleSelectionChange} initialTopics={selectedTopics}  />
        <SearchButton isLoading={isLoading} onPress={handleSearch}/>
        { searchInitiated && !isLoading && <Text style={{ color: 'white' }}>{JSON.stringify(selectedTopics)}</Text> }
      </View>
    </PaperProvider>

  );
};

export default App;
