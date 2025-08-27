import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
 
export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "#226AB2" }}>
            <Tabs.Screen
                name="add" options={{ title: "Adicionar", tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} /> }}
 
 
            />
            <Tabs.Screen
                name="list" options={{ title: "Lista de Lembretes", headerShown: false, tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} /> }}
            />
 
        </Tabs>
    )
 
 
 
}