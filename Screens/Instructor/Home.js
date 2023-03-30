import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
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
  console.log(scanned);
  return (
    <View className="flex-1 items-center justify-center">
      {/* <Text>Home Instructor</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        className="h-1/2 border-2 w-full"
      /> */}
      <TouchableOpacity onPress={() =>{navigation.navigate("QRScanner")}} className="border-2 p-2 rounded-[10px]">
        <Text>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    contain:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0000",
    }
})