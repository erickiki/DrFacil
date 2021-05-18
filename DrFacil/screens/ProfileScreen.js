import React from 'react';
import { View, Text,Button } from 'react-native';


function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla de Datos del usuario</Text>
        <Button
              title="ir a pantalla principal"
              onPress={() => navigation.navigate("Home")}
          />
      </View>
      
    );
  }
export default ProfileScreen;