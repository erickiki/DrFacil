import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet,StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';
import {images, COLORS, SIZES, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const affordable = 1
const fairPrice = 2
const expensive = 3
const DoctorData = [
  {
      id: 1,
      name: "Dr kevin espinosa",
      especialidad: "Medicina General ",
      rating: 4.8,
      categories: [5, 7],
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo: images.dr1,
      duration: "30 - 45 min",
      location: "calle Cap. Luis Rivero Nro 23421",
      courier: {
          avatar: images.avatar_1,
          name: "Amy"
      }
      
  },
  {
      id: 2,
      name: " Hector ormachea",
      especialidad: "pediatria",
      rating: 4.8,
      categories: [2, 4, 6],
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo: images.dr2,
      duration: "15 - 20 min",
      location: "calle Cap. Luis Rivero Nro 23421",
      courier: {
          avatar: images.avatar_2,
          name: "Jackson"
      }
      
  },
  {
      id: 3,
      name: "David apaza",
      especialidad: "Ginecologia",
      rating: 4.8,
      categories: [3],
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo: images.dr3,
      duration: "20 - 25 min",
      location: "calle Cap. Luis Rivero Nro 23421",
      courier: {
          avatar: images.avatar_3,
          name: "James"
      }
      
  },
  {
      id: 4,
      name: "Harold Quiroz",
      especialidad: "Homeopatia",
      rating: 4.8,
      categories: [8],
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo: images.dr4,
      duration: "10 - 15 min",
      location: "calle Cap. Luis Rivero Nro 23421",
      courier: {
          avatar: images.avatar_4,
          name: "Ahmad"
      }
      
  },
  {
      id: 5,
      name: "abigail Quisbert",
      especialidad: "Medicina Alternativa",
      rating: 4.8,
      categories: [1, 2],
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo: images.dr5,
      duration: "15 - 20 min",
      location: "calle Cap. Luis Rivero Nro 23421",
      courier: {
          avatar: images.avatar_4,
          name: "Muthu"
      }
      
  },
  {

      id: 6,
      name: "Erick Quisbert",
      especialidad: "Medicina Interna",
      rating: 4.9,
      categories: [9, 10],
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      photo: images.dr6,
      duration: "35 - 40 min",
      location: "calle Cap. Luis Rivero Nro 23421",
      courier: {
          avatar: images.avatar_5,
          name: "Jessie"
      }
      

  },
  {

    id: 7,
    name: "Micaela Flores",
    especialidad: "Medicina Alternativa",
    rating: 4.9,
    categories: [9, 10],
    biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    photo: images.dr7,
    duration: "35 - 40 min",
    location: "calle Cap. Luis Rivero Nro 23421",
    courier: {
        avatar: images.avatar_5,
        name: "Jessie"
    }
    

},
{

  id: 8,
  name: "Alexandra Montaño",
  especialidad: "Medicina de Trabajo",
  rating: 4.9,
  categories: [9, 10],
  biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  photo: images.dr8,
  duration: "35 - 40 min",
  location: "calle Cap. Luis Rivero Nro 23421",
  courier: {
      avatar: images.avatar_5,
      name: "Jessie"
  }
},
{

  id: 9,
  name: "Rodrigo Flores",
  especialidad: "Acupuntura",
  rating: 4.9,
  categories: [9, 10],
  biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  photo: images.dr9,
  duration: "35 - 40 min",
  location: "calle Cap. Luis Rivero Nro 23421",
  courier: {
      avatar: images.avatar_5,
      name: "Jessie"
  }
},
{

  id: 10,
  name: "Gabriel Copa",
  especialidad: "Analisis Clinico",
  rating: 4.9,
  categories: [9, 10],
  biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  photo: images.dr10,
  duration: "35 - 40 min",
  location: "calle Cap. Luis Rivero Nro 23421",
  courier: {
      avatar: images.avatar_5,
      name: "Jessie"
  }
},
{

  id: 11,
  name: "Cristian Lopez",
  especialidad: "Cardiologia",
  rating: 4.9,
  categories: [9, 10],
  biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  photo: images.dr11,
  duration: "35 - 40 min",
  location: "calle Cap. Luis Rivero Nro 23421",
  courier: {
      avatar: images.avatar_5,
      name: "Jessie"
  }
}



]




function ProfileScreen({navigation}) {
  const [doctores, setDoctores] = React.useState(DoctorData)
  function renderDoctores () {
    const renderItem = ({ item }) => {
          return (
            <TouchableOpacity
                  style={{ marginBottom: SIZES.padding * 2}}
                  onPress={() => navigation.navigate("SettingsScreen", {
                    item
                  })}
                  
              >
                  {/* Image */}
                  <View
                      style={{
                          flexDirection:'row',
                          width:500,
                          
                      }}
                  >
                      <Image
                          source={item.photo}
                          resizeMode="cover"
                          style={{
                              width: "10%",
                              height: 50,
                              borderRadius: SIZES.radius
                          }}
                      />

                          <View
                              style={{
                                  flexDirection:'row',
                                  backgroundColor: COLORS.white,
                                  marginLeft:15,
                                  width:340,
                                  ...styles.shadow
                              }}
                          >
                              <View style={{width:300}}>
                              <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                              <Text style={{ ...FONTS.body5 }}>{item.especialidad}</Text>
                              </View>
                              
                              
                          <View><Icon name="add" size={25}></Icon></View>
                              
                          </View>
                        
                          
                          
                      
                  </View>

              </TouchableOpacity>
          );
        }
        return (
        <View>
          <View style={{justifyContent: 'center' }}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          </View>
          <View style={{backgroundColor:'white', height:650}}>
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
          {renderDoctores()}
        </SafeAreaView>
      
    );
  }
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
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