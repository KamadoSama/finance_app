import { Tabs } from 'expo-router';
import React from 'react';
import { ButtonBottomTab } from '@/components/ButtonBottomTab';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Iconify } from 'react-native-iconify';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light,
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarIconStyle: {
          width: 30,
          height: 30,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          // Use a transparent background on iOS to show the blur effect
          position: 'absolute',
          height: 70,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 0,
          // paddingTop: 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='eva:home-fill' color={color} /></ButtonBottomTab>,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) =><ButtonBottomTab focused={focused} > <Iconify size={28} icon='ph:wallet' color={color} /></ButtonBottomTab>,
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: '',
          tabBarIcon: ({ color,focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='lets-icons:credit-card-light' color={color} /></ButtonBottomTab>,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <ButtonBottomTab focused={focused} ><Iconify size={28} icon='pepicons-pencil:person' color={color} /></ButtonBottomTab>,
        }}
      />
    </Tabs>
  );
}
