import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ItineraryBuilderScreen({ navigation, route }) {
  const { recommendation } = route.params;

  // Dummy itinerary data for demonstration
  const itinerary = [
    { time: '10:00 AM', activity: 'Meet at ' + recommendation.name },
    { time: '10:30 AM', activity: 'Explore the area' },
    { time: '12:00 PM', activity: 'Lunch at nearby cafe' },
    { time: '2:00 PM', activity: 'Visit local attractions' },
    { time: '5:00 PM', activity: 'Wrap up and head back' },
  ];

  const handleBooking = () => {
    navigation.navigate('Booking', { recommendation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itinerary for {recommendation.name}</Text>
      <ScrollView style={styles.scrollView}>
        {itinerary.map((item, index) => (
          <View key={index} style={styles.itineraryItem}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.activity}>{item.activity}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  itineraryItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  time: {
    color: '#888',
    width: 80,
    fontSize: 16,
  },
  activity: {
    color: '#fff',
    fontSize: 16,
    flexShrink: 1,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
