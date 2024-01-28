import React,{useState} from 'react';
import { View,Text,ScrollView,TouchableOpacity,Image, StyleSheet } from 'react-native';
import xassidaList from '../models/xassidas';
import authors from '../models/authors/'
const XassidaScreen = () => {
  const [selectedCircle, setSelectedCircle] = useState([1, null, null, null, null]);;
  const circleData = [1, 2, 3, 4, 5]; // Add your photo data here
  const handleCirclePress = (circle) => {
    setSelectedCircle(circle);
  };
  
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Xassidas</Text>
    <View style={styles.rectangle}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {circleData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleCirclePress(item)}>
                <View style={[styles.circle, selectedCircle === item && styles.selectedCircle]}>
                <Image style={styles.circleImage} source={selectedCircle !== null ? authors[item]?.imageUrl : null} />
                </View>
            </TouchableOpacity>
            ))}
      </ScrollView>
      <>
      {selectedCircle !== null && (
          <Text style={styles.selectedCircleTitle}>{authors[selectedCircle]?.name} </Text>
          
          
        )}
        </>
      
      
      
    
    </View>
    
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
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
    width: 75,
    height: 75,
    borderRadius: 35,
    backgroundColor: 'green', // Set the color of your circle
    marginHorizontal: 5, // Adjust margin between circles as needed
    marginTop:12
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: 'green', // Set the color of the border for the selected circle
  },
  selectedCircleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    alignContent:'center' // Set your text color
     // Adjust margin as needed
  },
 
  circleImage: {
    width: 75, // Adjust the width as needed
    height: 75, // Adjust the height as needed
    borderRadius: 25, // Half of the width and height to make it a circle
  },
});

export default XassidaScreen;
