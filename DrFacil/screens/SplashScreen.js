  
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SplashScreen = ({navigation}) => {


    return (
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
            <Text style={styles.title}>Dr Facil</Text>
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in commodo mollis amet. A vulputate et donec proin scelerisque sapien id diam. Amet accumsan sit.</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Comenzar</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
        </LinearGradient> 
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387' 
  },
  header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: 'transparent',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
      alignItems:'center',
      justifyContent:'center'

  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      
  },
  text: {
      color: '#fff',
      marginTop:5
  },
  button: {
      alignItems: 'center',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});