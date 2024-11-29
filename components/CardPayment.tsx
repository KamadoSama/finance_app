import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';


interface CardPaymentProps {
    icon:React.ReactNode;
    title:string;
    iconColor:string;
    color:string;
}

const CardPayment:React.FC<CardPaymentProps> = ({icon,title,iconColor,color}) => {
  return (
    <View style={[styles.container,{backgroundColor:color}]}>
        <View style={[styles.contentIcon,{backgroundColor:iconColor}]}>
            {icon}
        </View>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default CardPayment

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        // justifyContent:'space-between',
        alignItems:'flex-start',
        width:"30%",
        height: 120,
        borderRadius: Spacing.radius*2,
        padding:Spacing.padding/2,
        marginBottom:Spacing.spacing*1.5,   
    },
    contentIcon:{
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        marginTop: Spacing.spacing,
        fontSize:FontSize.medium,
        fontWeight: 'bold',
        color: Colors.textDark,
        // textAlign: 'center',
    }
})