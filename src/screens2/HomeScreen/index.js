import React, { useState, useEffect, componentDidMount } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import virus from '../../assets/virus.png';
import { Button } from 'react-native-elements';
import axios from 'axios';
import * as firebase from "firebase";




const HomeScreen  = ({ navigation }) => {
 

  const url = 'https://api.covid19api.com/summary';
  const [report, setReport] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setReport(data);
      } catch (error) {
        alert(error.message);
      }
    };

    getData();
  }, []);



   const signOutUser = () => {
    firebase.auth().signOut();
   };

  const callGlobal = () => navigation.navigate('Global', { report: report.Global });
  const callCountries = () => navigation.navigate('Countries', { countries: report.Countries });

  return (
    <View style={styles.container}>
      <Image source={virus} style={styles.logo}></Image>
      <View style={styles.group}>
        <Button onPress={callGlobal} title="World Cases" containerStyle={styles.separator} />

        <Button onPress={callCountries} title="List by Countries" /> 
        </View>

        <View>

        <Button color="#ff0000" onPress={signOutUser} title="Sign Out" />
        </View>
         </View>
  );
};

export default HomeScreen;
