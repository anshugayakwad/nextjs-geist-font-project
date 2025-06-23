import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const moods = ['Happy', 'Relaxed', 'Energetic', 'Romantic', 'Adventurous'];
const timesOfDay = ['Morning', 'Afternoon', 'Evening', 'Night'];
const budgets = ['Low', 'Medium', 'High'];
const interests = ['Food', 'Nature', 'Culture', 'Shopping', 'Sports'];

export default function FiltersScreen({ navigation, route }) {
  const { outingType, companion, location } = route.params;
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleNext = () => {
    navigation.navigate('Recommendation', {
      outingType,
      companion,
      location,
      mood: selectedMood,
      timeOfDay: selectedTime,
      budget: selectedBudget,
      interests: selectedInterests,
    });
  };

  const renderOption = (item, selected, onPress) => (
    <TouchableOpacity
      key={item}
      style={[styles.option, selected && styles.selectedOption]}
      onPress={onPress}
    >
      <Text style={[styles.optionText, selected && styles.selectedOptionText]}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Optional Filters</Text>

      <Text style={styles.filterLabel}>Mood</Text>
      <View style={styles.optionsRow}>
        {moods.map(mood => renderOption(mood, selectedMood === mood, () => setSelectedMood(mood)))}
      </View>

      <Text style={styles.filterLabel}>Time of Day</Text>
      <View style={styles.optionsRow}>
        {timesOfDay.map(time => renderOption(time, selectedTime === time, () => setSelectedTime(time)))}
      </View>

      <Text style={styles.filterLabel}>Budget</Text>
      <View style={styles.optionsRow}>
        {budgets.map(budget => renderOption(budget, selectedBudget === budget, () => setSelectedBudget(budget)))}
      </View>

      <Text style={styles.filterLabel}>Interests</Text>
      <View style={styles.optionsRow}>
        {interests.map(interest => (
          <TouchableOpacity
            key={interest}
            style={[styles.option, selectedInterests.includes(interest) && styles.selectedOption]}
            onPress={() => toggleInterest(interest)}
          >
            <Text style={[styles.optionText, selectedInterests.includes(interest) && styles.selectedOptionText]}>
              {interest}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Show Recommendations</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterLabel: {
    color: '#ccc',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  selectedOption: {
    backgroundColor: '#fff',
  },
  optionText: {
    color: '#ccc',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#000',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
