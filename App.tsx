import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ButtonList from './components/buttonList';
import { PaperProvider } from 'react-native-paper';
import customTheme from './CustomTheme';
import SearchButton from './components/searchButton';
import subjects from './data/subjects.json';

interface FullSubject {
  name: string;
  subject: string;
}

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
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [finalSubjects, setFinalSubjects] = useState([]);

  useEffect(() => {
    if (selectedSubjects.length > 0) {
      findSubjects();
    }
  }, [selectedSubjects]);

  const handleSelectionChange = (newSelectedTopics) => {
    setSelectedTopics(newSelectedTopics);
  };

  const getRandomIndex  = (arrayLength : number) : number => {
    return Math.floor(Math.random() * arrayLength)
  }

  const search = (topics) => {
    const newSubjects = subjects.topics
    .filter(subject => topics.includes(subject.name));
    setSelectedSubjects(newSubjects);
   
  }


  const findSubjects = () => {
    let finalSubjects: FullSubject[] = [];
    let randomTopicIndex1 = getRandomIndex(selectedSubjects.length);
    console.log(randomTopicIndex1);
    let randomTopicIndex2;
    console.log('longueur du tableau : ' + selectedSubjects.length);
    do {
      randomTopicIndex2 = getRandomIndex(selectedSubjects.length);;
    } while (randomTopicIndex1 === randomTopicIndex2);
    console.log('randomTopicIndex2 : ' + randomTopicIndex2);
    let subjectTopicName1 = selectedSubjects[randomTopicIndex1].name;
    let subjectTopicName2 = selectedSubjects[randomTopicIndex2].name;
    let randomSubjects1 = selectedSubjects[randomTopicIndex1].subjects;
    let randomSubjects2 = selectedSubjects[randomTopicIndex2].subjects;
    let randomSubjectIndex1 = getRandomIndex(randomSubjects1.length);
    let randomSubjectIndex2 = getRandomIndex(randomSubjects2.length);
    let finalSubject1 = randomSubjects1[randomSubjectIndex1];
    let finalSubject2 = randomSubjects2[randomSubjectIndex2];
    console.log('subjectTopicName1 : ' + subjectTopicName1);
    console.log('finalSubject1 : ' +  finalSubject1);
    let fullFinalSubject1: FullSubject = {
      name: subjectTopicName1,
      subject: finalSubject1
    };
    finalSubjects.push(fullFinalSubject1);
    let fullFinalSubject2: FullSubject = {
      name: subjectTopicName2,
      subject: finalSubject2
    };
    finalSubjects.push(fullFinalSubject2);
    setFinalSubjects(finalSubjects);
  }

  const handleSearch = () => {
      setLoading(true);
      setSearchInitiated(true);
      setTimeout(() => {
        search(selectedTopics);
        setLoading(false);
      }, 500);
      
  }

  return (
    <PaperProvider theme={customTheme}>
      <View style={{ backgroundColor: customTheme.colors.background }}>
        <ButtonList onSelectionChange={handleSelectionChange} initialTopics={selectedTopics}  />
        <SearchButton isLoading={isLoading} onPress={handleSearch}/>
        { searchInitiated && !isLoading && finalSubjects.length > 0 && 
        finalSubjects.map((finalSubject, index) => (
        <Text key={index} style={{ color: 'white' }}>
        {"Thème " + (index + 1) + " : " + finalSubject.name + ", Sujet " + (index + 1) + ": " + finalSubject.subject}
    </Text>
  ))
}

      </View>
    </PaperProvider>

  );
};

export default App;
