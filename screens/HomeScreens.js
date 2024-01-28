import React,{useState} from 'react';
import { View,Text,ScrollView,TouchableOpacity, StyleSheet } from 'react-native';

const XassidaScreen = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);
  const circleData = [1, 2, 3, 4, 5]; // Add your photo data here
  const handleCirclePress = (circle) => {
    setSelectedCircle(circle);
  };
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Xassida</Text>
    <View style={styles.rectangle}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {circleData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleCirclePress(item)}>
            <View style={[styles.circle, selectedCircle === item && styles.selectedCircle]}></View>
          </TouchableOpacity>
          ))}
    </ScrollView>
    {selectedCircle !== null && (
        <Text style={styles.selectedCircleTitle}>{`Title for Circle ${selectedCircle}`}</Text>
      )}
    </View>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green', // Set your primary color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white', // Set your text color
  },
  rectangle: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white', // Set the color of your rectangle
    borderTopLeftRadius: 50, // Adjust border radius as needed
    borderTopRightRadius: 50,
    padding: 14,
    marginTop: 25, // Adjust margin as needed
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'green', // Set the color of your circle
    marginHorizontal: 5, // Adjust margin between circles as needed
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: 'white', // Set the color of the border for the selected circle
  },
  selectedCircleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set your text color
    marginTop: 10, // Adjust margin as needed
  },
});

export default XassidaScreen;
