import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
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
    } else {
      setSelectedSubjects([]);
      setFinalSubjects([]);
    }
  }, [selectedTopics]);

  const findSubjects = () => {
    let finalSubjects = [];
    let indexes = Array.from({ length: selectedSubjects.length }, (_, i) => i);
    if (selectedSubjects.length === 0) {
      indexes = [];
    } else if (selectedSubjects.length === 1) {
      indexes = [0];
    } else {
      indexes = indexes.sort(() => 0.5 - Math.random()).slice(0, 2);
    }

    if(indexes.length != 0) {
      indexes.forEach(index => {
        let subject = selectedSubjects[index];
        let randomSubject = subject.subjects[Math.floor(Math.random() * subject.subjects.length)];
        finalSubjects.push({ name: subject.name, subject: randomSubject });
      });
    }
    setFinalSubjects(finalSubjects);
  };

  return { finalSubjects, findSubjects, selectedSubjects };
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
          style={{ width: 100, height: 100, marginBottom: 30, marginTop: 20 }} 
        />
        <Text style={{ color: customTheme.colors.tertiary, fontSize: 10 }}>Choisir un ou plusieurs thèmes (tous par défaut)</Text>
        <ButtonList onSelectionChange={setSelectedTopics} initialTopics={mainTopics}
         />
        <SearchButton isLoading={isLoading} onPress={handleSearch} />
        <ScrollView contentContainerStyle={styles.searchResultsContainer}>
          {selectedTopics.length === 0 && <Text style={{ color: customTheme.colors.error, fontSize: 12, fontWeight: 'bold' }}>Veuillez choisir au moins un thème</Text>}
          {searchInitiated && !isLoading && selectedTopics.length !== 0 && finalSubjects.map((finalSubject, index) => (
            <Text key={index} style={styles.subjectText}>
              {"Sujet " + (index + 1) + "( " + finalSubject.name + ") : " + finalSubject.subject + '\n'}
            </Text>
          ))}
        </ScrollView>
        <Text  style={{ color: customTheme.colors.darkYellow, fontSize: 8, marginBottom: 4 }}>MAALSI - Greg Boës - ©2024</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  searchResultsContainer: {
    paddingHorizontal: 5,
    width: '100%'
  },
  subjectText: { 
    color: customTheme.colors.tertiary,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default App;
