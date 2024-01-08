import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

export default function GoalInput({onAddGoal, onCancel, visible}){
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return(
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput 
          placeholder='Your course goal' 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color='#b180f0'/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#311b6b'
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    color: '#120438',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    padding: 8
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 20
  },
  button:{
    width: '30%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});