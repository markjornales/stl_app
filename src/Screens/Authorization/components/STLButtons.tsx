import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ButtonProps } from '../../Types/TextinputProps';

export default function (props: ButtonProps) {
    const {label, onPress} = props;
    return (
        <TouchableOpacity className="overflow-hidden rounded-xl shadow-sm" onPress={onPress}>
            <View className="bg-blue-400 items-center py-3">
                <Text className="font-OutfitMedium text-white" style={style.textStyle}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: wp(5)
    }
})