import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput({onAddGoal}){
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
    onAddGoal(enteredGoalText);
    setEnteredGoalText('')
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Your course goal' 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add goal' onPress={addGoalHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
});