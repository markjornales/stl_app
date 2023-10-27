import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import { TextinputProps } from '../../Types/TextinputProps'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; 
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

function STLTextinputs(props : TextinputProps) {
    const {
        label, 
        iconSize, 
        alignIcon="left", 
        icons, 
        placeholder, 
        onChangeText,
        securityText = false
    } = props;
    return (
        <View>
            <Text className="font-OutfitMedium text-black capitalize" style={style.labelStyle}>{label}</Text>
            <View className="border-b-2 border-b-black flex-row items-center">
                {alignIcon == 'left' && (typeof icons == 'string' ?
                    <FontAwesome name={icons} size={iconSize} color="#000000"/> : icons)}
                <TextInput 
                    placeholder={placeholder} 
                    onChangeText={onChangeText} 
                    className="font-OutfitRegular text-black flex-1 mx-4" 
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    style={style.inputStyle}
                    secureTextEntry={securityText}
                />
                {alignIcon == 'right' && (typeof icons == 'string' ?
                    <FontAwesome name={icons} size={iconSize} color="#000000"/> : icons)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    labelStyle: {
        fontSize: wp(4)
    },
    inputStyle: {
        fontSize: wp(5)
    }
});

export default STLTextinputs;