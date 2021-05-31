import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {images, COLORS, SIZES, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons'
const DetailsScreen= ({ navigation }) => {
    
    function renderSaldo () {
      return(
      <View style={{alignItems:'center'}}>
          <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#507fd1',width:390}}>
            <Text style={{ ...FONTS.body1, color:'white' }}>$ 0 </Text>
            <Text style={{ ...FONTS.body3, color:'white' }}>SALDO ACTUAL </Text>
          </View>
        <View style={{shadowColor: "#000",margin:15 ,backgroundColor:'white', alignItems:'center', height:320, width:390}}>
          <View style={{marginTop:15,flexDirection:'row'}}>
          <Text style={{...FONTS.body3}}>Paso 1  </Text>
          <Text style={{...FONTS.body4}}>Escoger el Medotod de Pago:</Text>
          </View>
          <View style={{marginTop:15,flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:360, height:50}}>
            <Image
                source={images.bancosol}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 100,
                }}
            />
            <Icon name="checkmark-circle-outline" color={'black'}  size={30} /> 
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:360,height:50}}>
            <Image
                source={images.bnb}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 100,
                }}
            />
            <Icon name="checkmark-circle-outline" color={'black'}  size={30} /> 
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:360,height:50}}>
            <Image
                source={images.prodem}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 100,
                }}
            />
            <Icon name="checkmark-circle-outline" color={'black'}  size={30} /> 
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:360,height:50}}>
            <Image
                source={images.fie}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 100,
                }}
            />
            <Icon name="checkmark-circle-outline" color={'black'}  size={30} /> 
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:360,height:50}}>
            <Image
                source={images.bancobisa}
                resizeMode="contain"
                style={{
                    width: 100,
                    height: 100,
                }}
            />
            <Icon name="checkmark-circle-outline" color={'black'}  size={30} /> 
          </View>
        </View>
        <View style={{shadowColor: "#000", margin:15 , backgroundColor:'white', alignItems:'center', height:190, width:390}}>
          <View style={{marginTop:15,flexDirection:'row'}}>
          <Text style={{...FONTS.body3}}>Paso 2  </Text>
          <Text style={{...FONTS.body4}}>Escoge valor a pagar: </Text>
          </View>
          <View style={{marginTop:15, marginBottom:15 ,flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:300}}>
              <Icon.Button name='remove' size={25} backgroundColor='#009387' ></Icon.Button><Text>100</Text>
              
              <Icon.Button name='add' size={25} backgroundColor='#009387'></Icon.Button>
          </View>
          <Text style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
        </View>
      </View>  
      );
    };
    
  
  
  
  
    return (
      <SafeAreaView style={styles.container}>
            {renderSaldo()}
      </SafeAreaView>
      
    );
  }
export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
})