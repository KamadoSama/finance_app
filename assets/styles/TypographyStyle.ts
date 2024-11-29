import { Colors } from '@/constants/Colors';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
export const Typo = StyleSheet.create( {

    date: {
        fontSize: 10,
        color: Colors.textDark,
        fontWeight: "300"
    },
    error: {
        // fontFamily: 'regular',
        fontSize: FontSize.small,
        color: Colors.error,
        textAlign: "left",
        marginTop: Spacing.spacing,

        // marginVertical: Spacing.spacing,
    },
    statut: {
        fontSize: 10,
        color: Colors.light,
        fontWeight: "500",
    },
    description: {
        fontSize: FontSize.small,
        color: Colors.textDark,
        fontWeight: "500",
    },
    message: {
        fontSize: FontSize.medium,
        color: Colors.textDark,
        fontWeight: 'regular',
        textAlign: 'justify'
    },
    statTitle: {
        fontSize: FontSize.small,
        color: Colors.dark,
        fontWeight: "400",
    },
    statLevel: {
        fontSize: FontSize.medium,
        color: Colors.textDark,
        fontWeight: "500",
    },
    profilOption: {
        fontSize: FontSize.large,
        color: Colors.textDark,
        fontWeight: "500",
        paddingLeft: wp(5)
    },
    attenteMessage: {
        fontSize: FontSize.medium,
        color: Colors.textDark,
        fontWeight: "400",
        marginTop: Spacing.spacing,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify'
    },
    sessionTitle: {
        fontSize: FontSize.medium,
        color: Colors.textDark,
        fontWeight: "600",
    },
    bodySmall: {
        fontSize: FontSize.small,
        color: Colors.textDark,
        fontWeight: "800"
    },
    bodyMedium: {
        fontSize: FontSize.medium,
        color: Colors.dark,
        fontWeight: "500"

    },
    bodyLarge: {
        fontSize: FontSize.large,
        color: Colors.textDark,
    },
    labelSmall: {
        fontSize: FontSize.small,
        color: Colors.textDark,
        fontWeight: "600",
    },
    labelMedium: {
        fontSize: FontSize.medium,
        color: Colors.textDark,
        fontWeight: "400",
    },
    labelLarge: {
        fontSize: FontSize.large,
        color: Colors.textDark,
        fontWeight: "600",
    },
    titleSmall: {
        fontSize: FontSize.large,
        color: Colors.textDark,
    },
    titleMedium: {
        fontSize: FontSize.xLarge,
        color: Colors.textDark,
        fontWeight: "600",
    },
    titleLarge: {
        fontSize: FontSize.xxLarge,
        color: Colors.dark,
        fontWeight: 'bold',
    },
    headlineSmall: {
        fontSize: FontSize.xxxLarge,
        color: Colors.textDark,
        fontWeight: 900,
    },
    headlineMedium: {
        fontSize: FontSize.big,
        color: Colors.textDark,
        fontWeight: 'bold',
    },
    headlineLarge: {
        fontSize: FontSize.xBig,
        color: Colors.textDark,
        fontWeight: "800",
    },
});