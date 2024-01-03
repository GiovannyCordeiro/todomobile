import { StyleSheet, Text, View, Button } from 'react-native';


const styleText = StyleSheet.create(
  {
    margin: 20,
    borderWidth: 1,
    borderColor: '#cccfff',
    padding: 10
  }
)

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styleText}>Se liga isso aqui!</Text>
        <Text>Salve salve familia!</Text>
        <Text style={styleText}> Another text</Text>
        <Button title='click me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
