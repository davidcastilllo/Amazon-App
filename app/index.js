import { hookstate, useHookstate } from '@hookstate/core'
import { View, Text, ScrollView, SafeAreaView,TouchableOpacity, Image, ImageBackground, Linking } from 'react-native'
import { Link, Stack, useRouter } from 'expo-router'
import img from '../contants/images/img'
import theme from '../contants/theme/theme'
import { Srch } from '../Comps/Srch/Srch'

const Home = () => {
 let router = useRouter();
 let url = 'https://www.amazon.com/ref=nav_logo'

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen
   options={{
    headerStyle: { backgroundColor: theme.COLORS.lightWhite },
    headerShadowVisible: false,
    headerLeft: () => (
     <TouchableOpacity style={theme.ico.btnContainer} onPress={() => Linking.openURL(url)}>
      <Image 
      source={img.amazon}
      resizeMode='cover'
      style={theme.ico.img('60%')}
     />
     </TouchableOpacity>
    ),
    headerRight: () => (
     <View style={theme.ico.btnContainer2}>
      <TouchableOpacity onPress={() => router.push('/Heart/')}>
       <ImageBackground
        source={img.heartOutline}
        resizeMode='contain'
        style={theme.ico.heart(35)}
       >
        <Text style={{ fontWeight: 600, fontSize: 19, paddingLeft: 18 }}>
         0
        </Text>
       </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push(`/Cart/`)}>
        <ImageBackground
         source={img.cart}
         resizeMode='cover'
         style={theme.ico.cart(40)}>
         <Text style={{ fontWeight: 600, fontSize: 19, paddingLeft: 18 }}>
          0
         </Text>
        </ImageBackground>
       </TouchableOpacity>

     </View>
    ),
    headerTitle: "Amazon",
    headerTItleStyle: { fonWeight: "bold" },
    headerTitleAlign: 'center'
   }}
   />

   <ScrollView showsVerticalScrollIndicator={false}>
    <View
    style={{
     flex: 1,
     padding: '1%'
    }}
    >
     <Srch/>

    </View>
   </ScrollView>
    
  </SafeAreaView>
 )
}

export default Home