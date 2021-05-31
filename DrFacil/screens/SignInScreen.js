import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Dimensions,

} from 'react-native';
import { useState , useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../components/context';

//import Users from '../model/Users';
//import { black, lightBlue100 } from 'react-native-paper/lib/typescript/styles/colors';

const DrFacilURL = "http://192.168.0.107:5000/api/usuarios/";

const SignInScreen= ({navigation}) => {

    //const [isLoading, setLoading] = useState(true);
    const [Users, setUsers] = useState([]);
    useEffect(()=>{
        fetch(DrFacilURL)
        .then ((response)=> response.json())
        .then((json)=>{
          setUsers(json.Users);
          
        })
        .catch((error) => console.error(error));
        //.finally(() => setLoading(false));
      }, []);

    const [data, setData] =React.useState({
        username:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        isValidUser:true,
        isValidPassword:true,

    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true

            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser:false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if(val.trim().length >=8){
        setData({
            ...data,
            password:val,
            isValidPassword:true
        });
        }else{
            setData({
                ...data,
                password:val,
                isValidPassword:false
            });
        }
    }
    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        });
    }

    const loginHandle = (userName, password) =>{
        const foundUser = Users.filter(item =>{
            return userName ==item.email && password == item.password
        });
        if (data.username.length == 0 || data.password.length == 0){
            Alert.alert('Entrada Incorrecta','Los campos no pueden estar vacios',[ 
                {text:'okay'}
            ]);
            return;
        }
        if (foundUser.length == 0){
            Alert.alert('Usuario Desconocido','Usuario o Contraseña Incorrecta',[ 
                {text:'okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return(
        <View style={styles.container}>
                <StatusBar backgroundColor='#A1E39D' barStyle="light-content"/>
            <LinearGradient
                colors={['#A1E39D', '#3AD8AF']}
                style={styles.container}
            >
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
                <Text style={[styles.text_header,{fontSize:40, fontWeight:'bold'}]}>Dr Facil</Text>
                <Text style={[styles.text_header,{fontSize:20}]}>Bienvenido</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <View style={styles.button}>
                    
                    <TouchableOpacity
                        style={[styles.signIn,{
                            width:'45%',
                            
                            
                        }]}
                        
                    >
                    <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign , {color:'#fff'}]}>Iniciar Sesion</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            width:'45%',
                            borderColor:'#009387',
                            borderWidth:1,
                            
                        }]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#009387'
                        }]}>Registarse</Text>

                    </TouchableOpacity>

                </View>

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>textInputChange(val)}
                        
                    />
                    {data.check_textInputChange?
                    <Animatable.View
                        animation='bounceIn'
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />

                    </Animatable.View>
                    
                    :null}
                </View>
                {data.isValidUser ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>El nombre debe tener 4 caracteres</Text>
                </Animatable.View>
                }   
                <Text style={[styles.text_footer,{marginTop:35}]}>Contraseña</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >   
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>La contraseña debe tener 8 caracteres</Text>
                </Animatable.View>
                }
                <View style={styles.button1}>
                    
                    <TouchableOpacity
                        style={styles.signIn1}
                        onPress={()=> {loginHandle(data.username,data.password)}}
                    >
                    <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign , {color:'#fff'}]}>Iniciar Sesion</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>

                
                
            </Animatable.View>
            </LinearGradient>             
        </View>
    );
}
export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.10;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        marginTop:20,
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:20,
        marginTop: 20,
        marginBottom:30,
        

    },
    button1: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom:30

    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    signIn1: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });