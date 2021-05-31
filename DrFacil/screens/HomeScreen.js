import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, ActivityIndicator, Alert, StatusBar,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {images, COLORS, SIZES, FONTS} from '../constants';

const DrFacilURL = "http://192.168.0.107:5000/api/Especialidades/";
    const affordable = 1
    const fairPrice = 2
    const expensive = 3
const especialidadData = [
  {
    id: 1,
    nombre: "Medicina General",
    photo: images.Medicina_General,
    usr: 1
  },
  {
    id: 2,
    nombre:"Medicina Interna",
    photo: images.Medicina_Interna,
    usr: 1
  },
  {
    id: 3,
    nombre: "Cardiologia",
    photo: images.Cardiologia,
    usr: 1
  },
  {
    id: 4,
    nombre: "Ginecologia",
    photo: images.Ginecologia,
    usr: 1
  },
  {
    id: 5,
    nombre: "Acupuntura",
    photo: images.Acupuntura,
    usr: 1
  },
  {
    id: 6,
    nombre: "Anestesiología y Reanimacion",
    photo: images.Anestesiologia_y_Reanimacion,
    usr: 1
  },
  {
    id: 7,
    nombre: "Alergología",
    photo: images.Alergologia,
    usr: 1
  },
  {
    id: 8,
    nombre: "Análisis Clínico",
    photo: images.Analisis_Clinico,
    usr: 1
  },
  {
    id: 9,
    nombre: "Homeopatía",
    photo: images.Homeaopatia,
    usr: 1
  },
  {
    id: 10,
    nombre: "Medicina de Trabajo",
    photo: images.Medicina_de_Trabajo,
    usr: 1
  },
  {
    id: 11,
    nombre: "Medicina Alternativa",
    photo: images.Medicina_Alternativa,
    usr: 1
  },
  {
    id: 12,
    nombre: "Bioenergética",
    photo: images.Bioenergetica,
    usr: 1
  },
  {
    id: 13,
    nombre: "Hematología",
    photo: images.Hematologia,
    usr: 1
  },
  {
    id: 14,
    nombre: "Psicología",
    photo: images.Psicologia,
    usr: 1
  },
  {
    id: 15,
    nombre: "Traumatología",
    photo: images.Traumatologia,
    usr: 1
  },
]



const DoctorData = [
  {
      id: 1,
      name: "Dr kevin espinosa",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.dr1,
      duration: "30 - 45 min",
      location: {
          latitude: 1.5347282806345879,
          longitude: 110.35632207358996,
      },
      courier: {
          avatar: images.avatar_1,
          name: "Amy"
      }
      
  },
  {
      id: 2,
      name: " Hector ormachea",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.dr2,
      duration: "15 - 20 min",
      location: {
          latitude: 1.556306570595712,
          longitude: 110.35504616746915,
      },
      courier: {
          avatar: images.avatar_2,
          name: "Jackson"
      }
      
  },
  {
      id: 3,
      name: "David apaza",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.dr3,
      duration: "20 - 25 min",
      location: {
          latitude: 1.5238753474714375,
          longitude: 110.34261833833622,
      },
      courier: {
          avatar: images.avatar_3,
          name: "James"
      }
      
  },
  {
      id: 4,
      name: "Harold Quiroz",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.dr4,
      duration: "10 - 15 min",
      location: {
          latitude: 1.5578068150528928,
          longitude: 110.35482523764315,
      },
      courier: {
          avatar: images.avatar_4,
          name: "Ahmad"
      }
      
  },
  {
      id: 5,
      name: "abigail Quisbert",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.dr5,
      duration: "15 - 20 min",
      location: {
          latitude: 1.558050496260768,
          longitude: 110.34743759630511,
      },
      courier: {
          avatar: images.avatar_4,
          name: "Muthu"
      }
      
  },
  {

      id: 6,
      name: "Abigail Quisbert",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.dr6,
      duration: "35 - 40 min",
      location: {
          latitude: 1.5573478487252896,
          longitude: 110.35568783282145,
      },
      courier: {
          avatar: images.avatar_5,
          name: "Jessie"
      }
      

  }


]



function HomeScreen({navigation}) {
  const [data, setData] = useState([])
  const [imagenes, setImages] = useState([])
  const [especialidad, setEspecialidad] = React.useState(especialidadData)
  const [doctores, setDoctores] = React.useState(DoctorData)


  useEffect(()=>{
    fetch(DrFacilURL)
    .then ((response)=> response.json())
    .then((json)=>{
      setData(json.Especialidades);
    })
    .catch((error) => console.error(error));
  }, []);

  

function rendereEspecialidades () {
      const renderItem = ({ item }) => {
            return (
              <TouchableOpacity
                    style={{ marginBottom: SIZES.padding * 2 }}
                    
                >
                    {/* Image */}
                    <View
                        style={{
                            marginRight: SIZES.padding
                        }}
                    >
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                            <Text style={{ ...FONTS.h4 }}>{item.nombre}</Text>
                        </View>
                        <Text style={{ ...FONTS.body2 }}>                        </Text>
                    </View>

                </TouchableOpacity>
            );
          }
          return (
          <View>
            <View style={{justifyContent: 'center',marginTop:10 }}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Text style={{ ...FONTS.h1, color:'grey' }}>Especialidades</Text>
              
            </View>
            <View style={{backgroundColor:'white', height:610}}>
              <FlatList
                style={{marginTop:15}}
                
                data={especialidad}
                renderItem={renderItem}
                keyExtractor={item =>item.id} 
              />
            </View>
          </View>
            );
      
    };
    function renderDoctores () {
      const renderItem = ({ item }) => {
            return (
              <TouchableOpacity
                    style={{ marginBottom: SIZES.padding * 2 }}
                    
                >
                    {/* Image */}
                    <View
                        style={{
                            marginRight: SIZES.padding
                        }}
                    >
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                            <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                        </View>
                        <Text style={{ ...FONTS.body2 }}>                        </Text>
                    </View>

                </TouchableOpacity>
            );
          }
          return (
          <View>
            <View style={{justifyContent: 'center' }}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Text style={{ ...FONTS.h1, color:'grey' }}>Doctores</Text>
              
            </View>
            <View style={{backgroundColor:'white', height:290}}>
              <FlatList
                style={{marginTop:15}}
                data={doctores}
                
                renderItem={renderItem}
                keyExtractor={item =>item.id} 
              />
            </View>
          </View>
            );
      
    };
    return (
    <SafeAreaView style={styles.container}>
      
      {rendereEspecialidades()}
      {/* {renderDoctores()} */}
      
    </SafeAreaView>
      
    );
  }
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
      height:500,
      backgroundColor: COLORS.lightGray4
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