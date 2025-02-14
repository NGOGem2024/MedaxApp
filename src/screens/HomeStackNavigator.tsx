import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../components/Auth";
import AllPatients from "./AllPatients";
import PatientRegister from "./PatientRegister";
import UpdatePatient from "./UpdatePatient";
import PatientScreen from "./BottomTab/PatientScreen";
import TherapyScreen from "./BottomTab/TherapyHistory";
import TherapyTable from "./UpdateTherapy";
import TabScreen from "./BottomTab/TabScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AllPatients">
      <Stack.Screen
        name="AllPatients"
        component={AllPatients}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientRegister"
        component={PatientRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdatePatient"
        component={UpdatePatient}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Patient"
        component={PatientScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TherapyHistory"
        component={TherapyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateTherapy"
        component={TherapyTable}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tabs" component={TabScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
