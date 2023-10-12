import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useHookstate } from '@hookstate/core';
import css from './css';
import img from '../../contants/images/img';
import axios from 'axios';

export let Srch = () => {
 

 // let setSrchData = async () => {
 //  if (srchStr.get()) {
 //   let url = 'https://fakestoreapi.com/products';
 //   let data = await (await axios.get(url)).data;
 //   let str = srchStr.get().toLowerCase();
 //   let result = data.filter(item =>
 //    item.description.toLowerCase().includes(str) ||
 //    item.title.toLowerCase().includes(str) ||
 //    item.category.toLowerCase().includes(str)
 //   );
 //   storeList.set(result);  
 //   storeListCount.set(result.length);   
 //  }
 // };

 return (
  <View>
   <View style={css.container}>
    <Text style={css.welcomeMessage}>Search our store!</Text>
   </View>

   <View style={css.searchContainer}>
    <View style={css.searchWrapper}>
     <TextInput
      style={css.searchInput}
      value={''}
      placeholder='What are you looking for?'
     />
    </View>

    <TouchableOpacity style={css.searchBtn}>
     <Image
      source={img.search}
      resizeMode='contain'
      style={css.searchBtnImage}
     />
    </TouchableOpacity>
   </View>


  </View>
 )
};