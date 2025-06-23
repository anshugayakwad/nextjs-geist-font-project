import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dummySavedPlans = [
  { id: '1', name: 'Romantic Date at Sunset Park' },
  { id: '2', name: 'Adventure Day with Friends' },
];

export default function SavedPlansScreen({ navigation }) {
  const [savedPlans, setSavedPlans] = useState([]);

  useEffect(() => {
    // For MVP, load dummy saved plans
    setSavedPlans(dummySavedPlans);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.planItem} onPress={() => alert('Open plan details for ' + item.name)}>
      <Text style={styles.planName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Plans</Text>
      <FlatList
        data={savedPlans}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No saved plans yet.</Text>}
      />
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  planItem: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  planName: {
    color: '#fff',
    fontSize: 18,
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});
