import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ButtonList from './components/buttonList';
import { PaperProvider } from 'react-native-paper';
import customTheme from './CustomTheme';
import SearchButton from './components/searchButton';
import subjects from './data/subjects.json';


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

const useSubjectSearch = (selectedTopics) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [finalSubjects, setFinalSubjects] = useState([]);

  useEffect(() => {
    if (selectedTopics.length > 0) {
      const newSubjects = subjects.topics.filter(subject => selectedTopics.includes(subject.name));
      setSelectedSubjects(newSubjects);
    }
  }, [selectedTopics]);

  const findSubjects = () => {
    let finalSubjects = [];
    let indexes = Array.from({ length: selectedSubjects.length }, (_, i) => i);
    if (selectedSubjects.length === 1) {
      indexes = [0];
    } else {
      indexes = indexes.sort(() => 0.5 - Math.random()).slice(0, 2);
    }

    indexes.forEach(index => {
      let subject = selectedSubjects[index];
      let randomSubject = subject.subjects[Math.floor(Math.random() * subject.subjects.length)];
      finalSubjects.push({ name: subject.name, subject: randomSubject });
    });
  
    setFinalSubjects(finalSubjects);
  };

  return { finalSubjects, findSubjects };
}

const App = () => {
  const [selectedTopics, setSelectedTopics] = useState(mainTopics);
  const [isLoading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const { finalSubjects, findSubjects } = useSubjectSearch(selectedTopics);

  const handleSearch = () => {
    setLoading(true);
    setSearchInitiated(true);
    setTimeout(() => {
      findSubjects();
      setLoading(false);
    }, 500);
  }

  return (
    <PaperProvider theme={customTheme}>
      <View style={{ backgroundColor: customTheme.colors.onBackground, flex: 1, alignItems: 'center' }}>
        <Image 
          source={require('./assets/logo.png')}
          style={{ width: 100, height: 100, marginBottom: 50, marginTop: 40 }} 
        />
        <Text style={{ color: 'white', fontSize: 10 }}>Choisir un ou plusieurs thèmes (tous par défaut)</Text>
        <ButtonList onSelectionChange={setSelectedTopics} initialTopics={selectedTopics} 
         />
        <SearchButton isLoading={isLoading} onPress={handleSearch} />
        <View style={styles.searchResultsContainer}>
          {searchInitiated && !isLoading && finalSubjects.map((finalSubject, index) => (
            <Text key={index} style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
              {"Sujet " + (index + 1) + "( " + finalSubject.name + ") : " + finalSubject.subject + '\n'}
            </Text>
          ))}
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  searchResultsContainer: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 200,
    width: '100%',
    marginHorizontal: 4,
  },
});

export default App;
