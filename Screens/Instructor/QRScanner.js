import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

const QRScanner = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission]= useState();
  const [scanned, setScanned] = useState();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} className="pt-16 pb-5 pl-6 bg-[#006738]">
            <Ionicons name='chevron-back-outline' color={"#fff"} size={30}/>
        </TouchableOpacity>
        <View className="flex-1">
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                className="flex-1 border-2 m-2"
            />
        </View>
      {
        scanned &&
        <TouchableOpacity onPress={() =>{setScanned(false)}} className="border-2 p-2 rounded-[10px]">
          <Text>Scan Again</Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  )
}

export default QRScanner

const styles = StyleSheet.create({})