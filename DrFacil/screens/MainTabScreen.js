import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Pagina Principal',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Comprar',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="cart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Doctores',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="medkit" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Buscar Dr',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;

const HomeStackScreen =({navigation})=>(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#009387'},
      headerTintColor:'#fff',
      headerTitleStyle:{fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name='Home' component={HomeScreen} options={{
        title:'Pagina Principal',
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={25} 
          backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}>
          </Icon.Button>
          ) 

      }}/>
    </HomeStack.Navigator>

);
const DetailsStackScreen =({navigation})=>(
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#009387'},
      headerTintColor:'#fff',
      headerTitleStyle:{fontWeight:'bold'
      }
    }}>
      <DetailsStack.Screen name='Details' component={DetailsScreen} options={{
            title:'Comprar Saldo',
            headerLeft:()=>(
              <Icon.Button name='ios-menu' size={25} 
              backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}>
              </Icon.Button>
              ) 

          }}/>
    </DetailsStack.Navigator>

);

const ProfileStackScreen =({navigation})=>(
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'
    }
  }}>
    <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{
          title:'Doctores',
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={25} 
            backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}>
            </Icon.Button>
            ),
          headerRight:()=>(
              <Icon.Button name='search' size={25} 
              backgroundColor='#009387' onPress={()=>{navigation.openDrawer()}}>
              </Icon.Button>
              ) 

        }}/>
  </ProfileStack.Navigator>

);