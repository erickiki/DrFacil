import React from 'react';
import { View, Text,Button } from 'react-native';


function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla de Notificaciones</Text>
        <Button
              title="ir a principal"
              onPress={() => navigation.navigate("Home")}
          />
      </View>
      
    );
  }
export default DetailsScreen;