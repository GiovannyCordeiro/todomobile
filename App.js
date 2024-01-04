import { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal' style={styles.input} onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          <Text>List of goals...</Text>
          {
            courseGoals.map((goal, index) => (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>
                  {goal}
                </Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },

  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'lightblue',
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 10,
  },

  goalsContainer: {
    flex: 5
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },

  goalText: {
    color: 'white'
  }
});