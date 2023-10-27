import { View, Text, Button, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState }  from 'react'


function Registration () {

const [toggleCheckBox, setToggleCheckBox] = useState(false)


  return (
   <View className='bg-slate-300 shadow-lg'>
      <Text className="text-green-900" style={{ borderWidth: 0 }}>Kindly fill out this form to register</Text>
      <Text className="text-black mx-3 ">First Name</Text>
      <TextInput
        className='border-spacing-3 border-b text-lg p-4'
        placeholder='Juan'
        autoCapitalize="none"
        placeholderTextColor='gray' maxLength={50}/>

      <Text className="text-black mx-3 ">Middle Name</Text>
      <TextInput
        className='border-spacing-3 border-b text-lg p-4'
        placeholder='Santos'
        autoCapitalize="none"
        placeholderTextColor='gray' maxLength={30}/>  

      <Text className="text-black mx-3">Last Name</Text>
      <TextInput
        className='border-spacing-3 border-b text-lg p-4'
        placeholder='Dela Cruz'
        autoCapitalize="none"
        placeholderTextColor='gray' maxLength={40}/>

      <Text className="text-black mx-3">Mobile Number</Text>
      <TextInput
        className='border-spacing-3 border-b text-lg p-4'
        placeholder='09123456789'
        autoCapitalize="none"
        placeholderTextColor='gray' maxLength={11} keyboardType={'phone-pad'}/>

      <Text className="text-black mx-3">Password</Text>
      <TextInput
        className='border-spacing-3 border-b text-lg p-4'
        secureTextEntry={true}
        placeholder='Password'
        autoCapitalize="none"
        placeholderTextColor='gray' maxLength={30}/>
      
  <Text className="text-black mx-3 text-xs">I have read and agreed the Terms and Conditions</Text>

    <CheckBox className='border-spacing-3 float-right' disabled={false}  value={toggleCheckBox}
    onChange={(newValue) => setToggleCheckBox((init)=> !init)}></CheckBox>
    <Button title='Register'/>
    </View>
    
  )
}

export default Registration;