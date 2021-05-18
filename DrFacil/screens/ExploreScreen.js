import React from 'react';
import { View, Text,Button } from 'react-native';


function ExploreScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Buscar un Doctor</Text>
        <Button
              title="ir a pantalla principal"
              onPress={() => navigation.navigate("Home")}
          />
      </View>
      
    );
  }
export default ExploreScreen;