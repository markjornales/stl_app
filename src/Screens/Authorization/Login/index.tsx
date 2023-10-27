import React, {useState, useEffect, useRef} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'; 
import PhoneInput from 'react-native-phone-number-input';
import STLButtons from '../components/STLButtons';    
import STLTextinputs from '../components/STLTextinputs'; 


 function Login () { 
  const [isPassword, setPassword] = useState<boolean>(false);
  const textAnimatedRef = useRef<any>(new Animated.Value(400))

  const handleOnpress = () => {
    setPassword(true); 
      Animated.timing(textAnimatedRef.current,{
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
        easing: Easing.ease
      }).start(); 
   
  }

  return (
    <View className="bg-gray-100 h-full w-full items-center "> 
        <View className="py-10">
          <Image style={styles.logoStyle} resizeMode="contain" source={require('images/main_logo.png')} />
        </View>
        <View className="px-7 w-full h-full">
          <View className="py-6 ">
            <Text style={styles.textLabelStyle} className="font-OutfitBold text-gray-500">
                VERIFIY ACCOUNT
            </Text> 
          </View> 
          {!isPassword && <View className="w-full">
            <PhoneInput 
                defaultCode="PH"
                textContainerStyle={styles.phoneTextContainer}
                containerStyle={styles.phoneContainer}
                textInputStyle={styles.phoneTextColor}
                flagButtonStyle={{width: '15%'}}
                codeTextStyle={styles.phoneTextColor} 
                disableArrowIcon={true} 
                textInputProps={{placeholderTextColor: 'grey', maxLength: 11}}
                placeholder="Enter Phone number"  
            />
            <View className="items-end gap-2 my-2">
              <Text className="text-black font-OutfitRegular" style={styles.textSmall}>You dont have Account?</Text>
              <TouchableOpacity>
                <Text className="text-red-400 font-OutfitRegular" style={styles.textdefaultSize}>Register here!</Text>
              </TouchableOpacity> 
            </View>
          </View>}
          <Animated.View style={[{transform: [{
            translateX: wp('100%')
          }]}, {transform: [{translateX: textAnimatedRef.current}]}]}>
            {isPassword && <View className="">
              <STLTextinputs
                iconSize={15}
                label="Password"
                icons="lock"
                alignIcon="left"
                placeholder="Enter password"
                securityText={true}
              />
              <View className="items-end gap-2 my-2"> 
                <TouchableOpacity>
                  <Text className="text-red-400 font-OutfitRegular" style={styles.textdefaultSize}>Forgot Password!</Text>
                </TouchableOpacity> 
              </View> 
              <View className="my-2"/>
              </View>}
          </Animated.View>
        
          <View className="flex-[0.52] justify-end">
            <STLButtons label={isPassword? "Continue" : "Sign in"} onPress={handleOnpress}/>
          </View> 
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  logoStyle: {
    width: wp(30),
    height: wp(30)
  },
  phoneTextContainer: {
    backgroundColor: "rgba(107,114,128,0)",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneContainer: {
    width: '100%',
    paddingVertical: 2, 
    borderBottomWidth: 2,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: "rgba(107,114,128,0)"
  },
  phoneTextColor: {
    fontSize: wp('4.5%'),
    color: 'black',
    fontFamily: "Outfit-Medium",
    
  },
  textLabelStyle: {
    fontSize: wp(5)
  },
  textdefaultSize: {
    fontSize: wp(4)
  },
  textSmall: {
    fontSize: wp(3.5)
  },
  defaultPanel: { 

  }
});

export default Login;