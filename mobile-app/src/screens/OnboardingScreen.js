import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const outingTypes = [
  'Date',
  'Meeting',
  'Fun',
  'Adventure',
  'Relaxation',
  'Cultural',
];

export default function OnboardingScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleNext = () => {
    if (selectedType) {
      navigation.navigate('CompanionSelection', { outingType: selectedType });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Outing Type</Text>
      <FlatList
        data={outingTypes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              selectedType === item && styles.selectedItem,
            ]}
            onPress={() => setSelectedType(item)}
          >
            <Text
              style={[
                styles.itemText,
                selectedType === item && styles.selectedItemText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={[styles.button, !selectedType && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedType}
      >
        <Text style={styles.buttonText}>Next</Text>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginBottom: 40,
  },
  item: {
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#555',
    marginVertical: 8,
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#fff',
  },
  itemText: {
    color: '#ccc',
    fontSize: 18,
  },
  selectedItemText: {
    color: '#000',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
