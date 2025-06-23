import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../src/screens/WelcomeScreen';
import OnboardingScreen from '../src/screens/OnboardingScreen';
import CompanionSelectionScreen from '../src/screens/CompanionSelectionScreen';
import LocationSelectionScreen from '../src/screens/LocationSelectionScreen';
import FiltersScreen from '../src/screens/FiltersScreen';
import RecommendationScreen from '../src/screens/RecommendationScreen';
import ItineraryBuilderScreen from '../src/screens/ItineraryBuilderScreen';
import BookingScreen from '../src/screens/BookingScreen';
import SavedPlansScreen from '../src/screens/SavedPlansScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="CompanionSelection" component={CompanionSelectionScreen} />
        <Stack.Screen name="LocationSelection" component={LocationSelectionScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
        <Stack.Screen name="Recommendation" component={RecommendationScreen} />
        <Stack.Screen name="ItineraryBuilder" component={ItineraryBuilderScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="SavedPlans" component={SavedPlansScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
