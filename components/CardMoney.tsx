import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Spacing from '@/constants/Spacing';
import useCurrencyFormat from '@/hooks/useCurrencyFormat';
import FontSize from '@/constants/FontSize';
import { Iconify } from 'react-native-iconify';

interface CardMoneyProps {
    amount: number;
    cardNumber: string;
    date: string;
    withdrawFunction?: () => void;
    transferFunction?: () => void;
    depositFunction?: () => void;
}

const CardMoney: React.FC<CardMoneyProps> = ({ amount, cardNumber, date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={{ color: Colors.light }}>Available balance</Text>
                    <Text style={styles.amount}>${useCurrencyFormat(amount)}</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={{ color: Colors.light }}>{cardNumber}</Text>
                    <Text style={{ color: Colors.light }}>{date}</Text>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Iconify icon='solar:download-linear' size={24} color={Colors.light} />
                    <Text style={styles.textButton}>Withdraw</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Iconify icon='prime:send' size={24} color={Colors.light} />
                    <Text style={styles.textButton}>Transfer</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}>
                    <Iconify icon='solar:wallet-outline' size={24} color={Colors.light} />
                    <Text style={styles.textButton}>Deposit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardMoney

const styles = StyleSheet.create({
    container: {
        marginTop: Spacing.spacing * 2,
        borderRadius: Spacing.radius * 2,
        height: 250,
        width: "100%",
        backgroundColor: "#2d2d2d",
    },
    header: {
        height: "70%",
        backgroundColor: Colors.primary,
        borderRadius: Spacing.radius * 2,
        padding: Spacing.padding,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    amount: {
        fontSize: FontSize.big,
        fontWeight: '600',
        color: Colors.light,
        marginTop: Spacing.spacing,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:Spacing.padding,
        paddingHorizontal:Spacing.padding*2,
    },
    textButton:{
        color:Colors.light,
        fontSize:FontSize.medium,
        marginTop:Spacing.spacing/2,
    }
})