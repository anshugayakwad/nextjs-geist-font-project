import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

export default function BookingScreen({ navigation, route }) {
  const { recommendation } = route.params;
  const [loading, setLoading] = useState(false);

  const handleBooking = () => {
    setLoading(true);
    // Simulate booking API call delay
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Booking Confirmed', `Your booking at ${recommendation.name} is confirmed!`);
      navigation.popToTop();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Outing</Text>
      <Text style={styles.subtitle}>Place: {recommendation.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleBooking} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.buttonText}>Confirm Booking</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#ccc',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
