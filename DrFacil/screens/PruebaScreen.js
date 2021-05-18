import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Users from '../model/Users';

  const DrFacilURL = "http://192.168.0.103:5000/api/empresas/index.php";

  const PruebaScreen = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    
    
    useEffect(()=>{
      fetch(DrFacilURL)
      .then ((response)=> response.json())
      .then((json)=>{
        setData(json.doctores);
        setTitle(json.titulo);
        setDescription(json.titulo);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, []);
    
    const loginHandle = (userName, password) =>{
      const foundUser = data.filter(item =>{
          return userName ==item.nombre && password == item.pais
      });
      
      if (foundUser.length != 0){
          Alert.alert('Usuario Desconocido','Usuario o Contraseña Incorrecta',[ 
              {text:'okay'}
          ]);
          return;
      }
      
  }

    return(


      <SafeAreaView>
        {isLoading?(<ActivityIndicator/>
        ):(
          <View>
            <Text>{title}</Text>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
              <Text>{item.id}. {item.nombre}, {item.pais}</Text>
            )}
            />
            <Text>{description}</Text>
            <TouchableOpacity
                        
                        onPress={()=> {loginHandle('micaela','colombia')}}
                    >
                    
                        <Text >Iniciar Sesion</Text>
                    
                    </TouchableOpacity>
          </View>

        )}
      </SafeAreaView>
    );

  }


export default PruebaScreen;

