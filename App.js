// In App.js in a new project
import * as React from "react";
import { View, Text, Button, Animated, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



//send email file
import sendEmailAlert from "./components/sendEmailAlert";




function HomeScreen({ navigation }) {
  
    return (
        <View style={styles.container}>

            <View>
              <Text style={styles.heading}>MIDTERM</Text>
              <Text style={styles.heading} >Bechera Chapman-Tremblay</Text>
            </View>
            
            <View style={[styles.card,styles.shadowProp]}> 
              <Text style={styles.fontText}>Click The button below to go to the email screen</Text>

              <View style={[styles.buttonStyle, styles.shadowProp]}> 
              <Button color="#fff" title="Send Email" onPress={() => navigation.navigate("Send Email")} />
              </View>
            </View>
        </View>
    );
}


const Stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Send Email" component={sendEmailAlert} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: '#caf0f8'
  },

  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#00b4d8',
    borderRadius:10,

  },
  text: {
    width: '100%',
    top: '-35%',
  },
  fontText: {
    textAlign: 'center',
    fontFamily : 'Verdana', 
    fontSize: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding:10,
  },
  shadowProp : {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  heading : {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    textAlign: 'center'
  }
});

export default App;