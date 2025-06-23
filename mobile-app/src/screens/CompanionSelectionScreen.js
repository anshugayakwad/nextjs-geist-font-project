import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const companions = [
  'Family',
  'Friends',
  'Partner',
  'Colleagues',
  'Client',
];

export default function CompanionSelectionScreen({ navigation, route }) {
  const { outingType } = route.params;
  const [selectedCompanion, setSelectedCompanion] = useState(null);

  const handleNext = () => {
    if (selectedCompanion) {
      navigation.navigate('LocationSelection', {
        outingType,
        companion: selectedCompanion,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Companion</Text>
      <FlatList
        data={companions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              selectedCompanion === item && styles.selectedItem,
            ]}
            onPress={() => setSelectedCompanion(item)}
          >
            <Text
              style={[
                styles.itemText,
                selectedCompanion === item && styles.selectedItemText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={[styles.button, !selectedCompanion && styles.disabledButton]}
        onPress={handleNext}
        disabled={!selectedCompanion}
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
