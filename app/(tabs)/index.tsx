import { Typo } from '@/assets/styles/TypographyStyle';
import CardMoney from '@/components/CardMoney';
import CardPayment from '@/components/CardPayment';
import CardPhotoName from '@/components/cardPhotoName';
import { Colors } from '@/constants/Colors';
import FontSize from '@/constants/FontSize';
import Spacing from '@/constants/Spacing';
import { Image, StyleSheet, Platform, SafeAreaView, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Iconify } from 'react-native-iconify';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <CardPhotoName name='Kamado' />

          <TouchableOpacity>
            <Iconify icon='solar:bell-bold' size={24} color={Colors.tertiary} />
          </TouchableOpacity>
        </View>

        <CardMoney amount={100000} date='12/27' cardNumber='4785 1234 5678 9012' />

        <View style={styles.sessionTitle}>
          <Text style={Typo.sessionTitle}>Payment List</Text>
          <TouchableOpacity>
            <Text style={[Typo.statut, styles.btnVoirPlus]}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: "wrap" }}>
          <CardPayment
            title='Electricity'
            icon={<Iconify icon='hugeicons:sustainable-energy' size={24} color={Colors.tertiary} />}
            iconColor={"#dbdbdb"}
            color={"#f8f8fa"}
          />
          <CardPayment
            title='Internet'
            icon={<Iconify icon='f7:wifi' size={24} color={Colors.light} />}
            iconColor={'#056dfb'}
            color={'#eef0ff'}
          />
          <CardPayment
            title='Artime'
            icon={<Iconify icon='gg:phone' size={24} color={Colors.light} />}
            iconColor={'#056dfb'}
            color={'#e3efff'}
          />
          <CardPayment
            title='Apple - iTunes'
            icon={<Iconify icon='ic:baseline-apple' size={24} color={Colors.light} />}
            iconColor={"#7486fa"}
            color={'#eef0ff'}
          />
          <CardPayment
            title='DSTV'
            icon={<Iconify icon='fa-solid:satellite-dish' size={24} color={Colors.tertiary} />}
            iconColor={"#dbdbdb"}
            color={"#f8f8fa"}
          />
          <CardPayment
            title='Health'
            icon={<Iconify icon='si:briefcase-medical-line' size={24} color={Colors.light} />}
            iconColor={'#1cce7c'}
            color={'#e2fbe8'}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.padding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Spacing.spacingMedium * 2,
    marginBottom: Spacing.spacingMedium,
  },
  btnVoirPlus: {
    fontSize: FontSize.medium,
    color: Colors.textDark,
    fontWeight: '400',
  },
});
