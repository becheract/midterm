import  React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as MailComposer from 'expo-mail-composer';

export function sendEmailAlert({ navigation }) {
  

    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    

        const onChangeHandlerM = (value) => {
            setMessage(value);
        }
        
        const onChangeHandlerE = (value) => {
            setEmail(value);
        }
    
    const sendEAlert = async () => {

        const isAvailable = await MailComposer.isAvailableAsync();

        if(isAvailable) {
            var options = {
              // recipients (array) -- An array of e-mail addressess of the recipients.
              recipients: [email],
              // ccRecipients (array) -- An array of e-mail addressess of the CC recipients.
              // bccRecipients (array) -- An array of e-mail addressess of the BCC recipients.
              // subject (string) -- Subject of the mail.
              subject: 'My Subject Line',
              // body (string) -- Body of the mail.
              body: message
              // isHtml (boolean) -- Whether the body contains HTML tags so it could be formatted properly. Not working perfectly on Android.
              // attachments (array) -- An array of app's internal file uris to attach.
            };
      
            MailComposer.composeAsync(options).then( result  => { 
                console.log(result.status); 
                if(result.status === "The email was sent"){
                 Alert.alert("sent")
                }else if(result.status ==="cancelled"){
                    Alert.alert("The email was not sent");
                }else{
                    console.log(console.error());
                }
                 
            });
          } else {
            console.log("Email is not available on this device");
          }
    }
  



    return (
      
        <View style={styles.container}>
            
            <Text style={styles.heading}>Email</Text>
            
            <TextInput style={styles.input} onChangeText={onChangeHandlerE} placeholder="Enter Email"/>

            <Text style={styles.heading}>Message</Text>

            <TextInput style={styles.input} onChangeText={onChangeHandlerM} placeholder="Enter Message"/>

            <View style={styles.buttonStyle}>
            <Button color="#fff" title="Send" onPress={sendEAlert}/>
            </View>

        </View>
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
      padding: 10,
      borderRadius: 10,
      backgroundColor:"white",
      opacity:0.9,
    },
    buttonStyle: {
      backgroundColor: '#00b4d8',
      borderRadius:10,
      margin: 15,
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
    }
  });
  
export default sendEmailAlert;