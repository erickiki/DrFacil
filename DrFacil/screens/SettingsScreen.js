import React from 'react';
import { useState } from 'react';
import { View, Text,Button, image, SafeAreaView, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {images, COLORS, SIZES, FONTS} from '../constants';

function SettingsScreen({route,navigation}) {
  
  
  const [Doctor, setDoctor] = React.useState(null); 
  const [isLoading,setLoading] = React.useState(true); 
  
  React.useEffect(() => {
    let { item } = route.params;
    setDoctor(item),
    setLoading(false);
});

  function renderBio (){
    return(
      <View style={{backgroundColor:'white', alignItems:'center', width:370, height:730, marginTop:10, borderRadius:30}}>
        <View style={{alignItems:'center', margin:15}}> 
          <Text style={{...FONTS.h1,color:'grey'}}>Perfil Medico</Text>   
          <Image
            source={Doctor.photo}
            resizeMode="cover"
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                margin:15,
                
            }}
            />
            <Text style={{...FONTS.h3,color:'black', marginBottom:2}}>{Doctor.name}</Text>
            <Text style={{...FONTS.body4,color:'black', marginBottom:2}}>Especialidad: {Doctor.especialidad}</Text>
            <View style={{flexDirection:'row'}}>
            <Icon name="star" color={'orange'}  size={20} /><Text style={{...FONTS.body4,color:'black', marginBottom:15}}>rating: {Doctor.rating}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'#4ea0eb', borderRadius:50, alignItems:'center', justifyContent:'center',flexDirection:'row',width:80, marginRight:10 }}>
              <Icon name="call" color={'white'}  size={18} /> 
              <Text style={{color:'white'}}> llamada</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#7f50d3', borderRadius:50, alignItems:'center', justifyContent:'center',flexDirection:'row',width:80, marginRight:10 }}>
              <Icon name="videocam" color={'white'}  size={20} /> 
              <Text style={{color:'white'}}> Video</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#66d461', borderRadius:50, alignItems:'center', justifyContent:'center',flexDirection:'row',width:80, marginRight:10 }}>
              <Icon name="chatbubbles" color={'white'}  size={17} /> 
              <Text style={{color:'white'}}> Mensaje</Text>
              </TouchableOpacity>
            </View>
        </View>
        
        <View  >
          
          <View style={{alignItems:'center'}} >
            
          </View>
          
          <View style={{alignItems:'center',justifyContent:'center', width:250, marginTop:10 }}>
          <Text style={{alignSelf:'flex-start',...FONTS.h3}}>Biografia</Text>
          <Text style={{textAlign:'justify', ...FONTS.body4, marginTop:10}}>{Doctor.biografia}</Text>
          </View>
          <View>
            <View style={{flexDirection:'row'}}>
            <Icon name="map" color={'#4795e6'}  size={28} /> 
              <View style={{marginLeft:10,height:18, textAlign:'center',justifyContent:'center'}}>
                <Text style={{...FONTS.body4, color:'#4795e6' , marginBottom:0.2}}>Direccion:</Text>
                <Text style={{...FONTS.body5, marginTop:0.2}}>{Doctor.location}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:'#754ce7',alignItems:'center', justifyContent:'center',flexDirection:'row',width:250, height:35,borderRadius:50, marginTop:40}}>
            <Text style={{...FONTS.body3,color:'white',marginRight:20}}>Agendar Cita</Text><Icon name="calendar" color={'white'}  size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  };


  return (
    <SafeAreaView style={styles.container}>
      {isLoading?
      (<ActivityIndicator/>)
      :(renderBio())
      }
      
    </SafeAreaView>
    );
  }

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:COLORS.darkgray,
      alignItems:'center',
      
  },
  shadow: {
      shadowColor: "#754ce7",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
})
