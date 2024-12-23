import React from 'react'
//import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const AddRide = () => {
  return (
    <View>
    <Text>
        Add Your Ride Here
    </Text>

    <div className="flex-center full-screen">
      <div className="text-center">
        <h1 className="header">Add a New Ride</h1>
        <input className="input-field" type="text" placeholder="Enter Ride Details" />
        <button className="button-primary">Submit</button>
      </div>
    </div>
    
  </View>
  )
}

export default AddRide;
