import React from 'react'
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import ViewPager from '@react-native-community/viewpager'

import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerActions, DrawerItems } from 'react-navigation-drawer'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

//load icon
import Icon from 'react-native-vector-icons/MaterialIcons'

import Styles from './src/style/Style'

import DetailPaket from './src/screens/DetailPaket'

// load icon
const tabsOption = (props) => 
  ({
    tabBarIcon: ({focused}) => {
      const { routeName } = props.navigation.state;
      if (routeName === 'Home') {
        return (
          <Icon name="home" size={24} color={focused ? 'blue' : 'gray'} />
        );
      } else if (routeName === 'DetailPaket') {
        return (
          <Icon name="library-books" size={24} color={focused ? 'blue' : 'gray'} />
        );
      }
    },
    tabBarLabel: ({focused}) => {
      const { routeName } = props.navigation.state;
      if (routeName === 'Home') {
          title = 'Home'
      } else if (routeName === 'DetailPaket') {
          title = 'Detail Paket'
      }
      return (<Text style={{textAlign:'center', color:(focused ? 'blue' : 'gray')}}>{title}</Text>)
    },
  })

const drawerOption = (props) => (
  <View style={{flex:1}}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
  </View>
)



const stackOption = (props) => {
  return {
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTitle: (
      <View style={Styles.headerTitle}>
        <Text style={Styles.title}>Logo Shop</Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity 
        style={Styles.headerRightWrap}
        onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Image style={Styles.menuIcon} source={{uri:'https://img.icons8.com/android/96/ffffff/menu.png'}}/>
      </TouchableOpacity>
    ),
  }
}

function App(props) {
  return (
    <View style={Styles.wrapper}>
       
        
      <ScrollView>
       
        <View>
          <ViewPager showPageIndicator={true} style={Styles.viewBanner} initialPage={0}>
            <View key="1">
              <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
            </View>
            <View key="2">
              <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
            </View>
          </ViewPager>
        </View>

        <View style={[Styles.container, Styles.shadow]}>
          <Text style={Styles.titleSection}>Package</Text>
          <ScrollView horizontal={true}>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={Styles.boxPaket}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('DetailPaket')}
                >
                  <Text style={Styles.textPaket}>Website</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={Styles.boxPaket}>
              <Text style={Styles.textPaket}>Desain</Text>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={Styles.boxPaket}>
              <Text style={Styles.textPaket}>Mobile</Text>
            </ImageBackground>
          </ScrollView>
        </View>

        <View style={[Styles.container, Styles.shadow]}>
          <Text style={Styles.titleSection}>Popular</Text>
          <ScrollView horizontal={true}>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={[Styles.container, Styles.shadow]}>
          <Text style={Styles.titleSection}>New</Text>
          <ScrollView horizontal={true}>
          <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={Styles.header}>
          <Text style={Styles.title}>@copyright 2019</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const DraweNavigator = createDrawerNavigator({
  Home:{
    screen: createBottomTabNavigator({
      Home : {screen: App},
      DetailPaket : {screen : DetailPaket},
     },
     //Load icon
     {
      defaultNavigationOptions: tabsOption,
    }),
    //
  },
  Paket: {
    screen: DetailPaket ,
  },
},{
  contentComponent : drawerOption,
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: DraweNavigator  ,
    navigationOptions:stackOption
  },
  DetailPaket: {
    screen: DetailPaket,
  },
});

export default createAppContainer(AppNavigator);