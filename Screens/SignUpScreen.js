import { StyleSheet, Text, TextInput, TouchableOpacity, View,StatusBar,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';


const SignUpScreen = () => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <KeyboardAvoidingView className="items-center" style={styles.container}>
  
      <TouchableOpacity onPress={()=>navigation.goBack()} className="self-start" style={styles.backArrow}>
          <Ionicons name='arrow-back' size={35}/>
      </TouchableOpacity>
      
      <View className="flex-column items-center">        
        <Text className="text-4xl" style={styles.createHead}>Create Account</Text>
        <Text className="text-1xl" style={styles.createSubTxt}>Create a new Account</Text>
      </View>


      <View style={styles.inputLayout} className="padding-">
        <View className="border-2 w-64 p-1 h-10 rounded-[12px]" style={styles.borderColor}>
          <TextInput className="w-full text-[18px] text-center"  placeholder="ID" placeholderTextColor="#006738" style={styles.inputTxt}/> 
        </View>
        
        <View className="border-2 w-64 p-1 h-10 rounded-[12px] " style={styles.borderColor}>
          <TextInput className="w-full text-[18px] text-center"  placeholder="NAME" placeholderTextColor="#006738" style={styles.inputTxt}/>   
        </View>

        <View className="border-2 w-64 p-1 h-10 rounded-[12px]" style={styles.borderColor}>
          <TextInput className="w-full text-[18px] text-center"  placeholder="DEPARTMENT" placeholderTextColor="#006738" style={styles.inputTxt}/>
        </View>

        <View className="border-2 w-64 p-1 h-10 rounded-[12px] " style={styles.borderColor}>
          <TextInput className="w-full text-[18px] text-center"  placeholder="PASSWORD" placeholderTextColor="#006738" style={styles.inputTxt}/>
        </View>

        <View className="border-2 64 p-1 h-10 rounded-[12px]" style={styles.borderColor}>
          <TextInput className="w-full text-[18px] text-center"  placeholder="CONFIRM PASSWORD" placeholderTextColor="#006738" style={styles.inputTxt}/>
        </View>
      </View>

      <TouchableOpacity className="border-2 p-2 w-1/2 h-10 rounded-[10px] items-center bg-[#006738] border-transparent" style={styles.creatBTn}>
        <Text className="text-white text-[18px]" style={styles.btnText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>


      <View className="flex-row"  style={styles.btnBfText}>
            <Text className="text-[16px] text-black">Need and Account?</Text>  
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} className="items-center ">
                <Text className="text-[16px]" style={styles.btnText1}>Sign Up</Text>
            </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )}
}

export default SignUpScreen

const styles = StyleSheet.create({

  container:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1,
  },
  createHead:{
    marginTop: 40,
    fontFamily: 'Poppins_600SemiBold',
    color: "#006738"
  },

  createSubTxt:{
    fontFamily: "Poppins_500Medium",
    opacity: 0.5
  },
  backArrow:{
    marginLeft:10,
    marginTop:15
  },
  btnText:{
    fontFamily: 'Poppins_600SemiBold',
  },
  creatBTn:{
    marginTop: 20
  },

  btnBfText:{
    marginTop: 20
  },

  inputTxt:{
    fontFamily: 'Poppins_600SemiBold',
  },
  btnText1:{
    fontFamily: 'Poppins_500Medium',
    color: "#006738",
    marginLeft: 5
  },
  borderColor:{
    borderColor: "#006738",
    marginTop:25
  },

});