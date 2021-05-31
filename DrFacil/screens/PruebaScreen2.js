
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, Alert, StatusBar,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Users from '../model/Users';
import ItemLibro from '../components/ItemLibro';
import Input from '../components/Input'
import axios from 'axios';


  const PruebaScreen2 = () => {
    const [listaLibros, setListaLibros] = useState([])
    const [nombre, setNombre] = useState('')
    const [edicion, setEdicion] = useState('')
    const [id, setId] = useState('')
    const [bandera, setBandera] = useState(false) 
    
       
    useEffect(() => {
        getLibros()
      }, [])
    
    const getLibros = async() => {
    const respuesta = await axios.get('http://192.168.0.103:5000/apilibro/')
    setListaLibros(respuesta.data)
    }
    const addLibro = async() => {
        const obj = {nombre, edicion}
        const respuesta = await axios.post('http://192.168.0.103:5000/apilibro/', obj)
        alert(respuesta.data.msg)
        getLibros()
        setNombre('')
        setEdicion('')
      }
      
      const deleteLibro = async (props) => {
        const id = props.id
        const respuesta = await axios.delete('http://192.168.0.103:5000/apilibro/?id='+id)
        alert(respuesta.data.msg)
        getLibros()
      }
      
      const getLibro = async(props) => {
        const id = props.id
        const respuesta = await axios.get('http://192.168.0.103:5000/apilibro/?id='+id)
        setId(respuesta.data.id)
        setNombre(respuesta.data.nombre)
        setEdicion(respuesta.data.edicion)
        setBandera(!bandera)
      } 
      
      const updateLibro = async() => {
        const obj = {id, nombre, edicion} 
        const respuesta = await axios.put('http://192.168.0.103:5000/apilibro/',obj)
        alert(respuesta.data.msg)
        setId('') 
        setNombre('')
        setEdicion('')
        setBandera(false)
        getLibros()
      } 
      
      const addOrUpdate = () => {
       {bandera? updateLibro() : addLibro() }
      }
      
    const renderItem = ({ item }) => (
        <ItemLibro id={item.id} getlibro={getLibro}
            nombre={item.name} edicion={item.password} mypress={deleteLibro}
        /> )

    return(
        <View style={styles.container}>
      <View style={{flex:0.1, marginTop:20,marginBottom:25 }} >
         <Text style={{fontWeight:'bold',color:'#0E69E5', fontSize:20}}>
             CRUD REACT NATIVE PHP Y MYSQL
          </Text>
      </View> 
      <TextInput  
            placeholder={"Nombre"} 
            onChangeText={e=>setNombre(e)}
            value={nombre}>
       </TextInput>
       <TextInput  
            placeholder={"Edicion"} 
            onChangeText={e=>setEdicion(e)}
            value={edicion}>
       </TextInput>
       {/* <Input texto={"Nombre"} valor={nombre} campo={e=>setNombre(e)}/> */}
      {/* <Input texto={"Edicion"} valor={edicion} campo={e=>setEdicion(e)}/> */}
      
      
      <TouchableOpacity 
            style={{backgroundColor:'#0E69E5', padding:15,borderRadius:12}}
            onPress={addLibro}  >
          <Text style={{color:'#fff'}}>añadir</Text>
      </TouchableOpacity>

     <FlatList
        style={{marginTop:15}}
        data={listaLibros}
        renderItem={renderItem}
        keyExtractor={item =>item.id} 
      />
      <StatusBar style="auto" />
   </View>
        
      
    );

  }


export default PruebaScreen2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });