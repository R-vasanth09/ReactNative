import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {addprduct, getProducts,} from '../Api/productApi';

const Flatlist = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const Datas = [
    {id: 1, name: 'Rohit', role: 'RN'},
    {id: 2, name: 'Virat', role: 'Full Stack'},
  ];

  // const getProduct = async () => {
  //   try {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();
  //     setProducts(data);
  //     console.log('API Response:', res);
  //     console.log('data', data);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  const getProduct = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // const addproduct = async () => {
  //   try {
  //     const res = await axios.post(
  //       'https://fakestoreapi.com/products',
  //       {
  //         title: 'New Shirt',
  //         price: 500,
  //         description: 'Cotton shirt',
  //         image: 'https://i.pravatar.cc',
  //         category: 'fashion',
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );

  //     console.log('API Response:', res.data);

  //     Alert.alert('Success', 'Product Created');
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  const addproduct = async () => {
    try {
      const res = await addprduct({
        title: 'New Shirt',
        price: 500,
        description: 'Cotton shirt',
        image: 'https://i.pravatar.cc',
        category: 'fashion',
      });
      console.log('API Response:', res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateprduct = async () => {
    try {
      const res = await axios.put(
        'https://fakestoreapi.com/products/1',
        {
          title: 'New Shirt',
          price: 500,
          description: 'Cotton shirt',
          image: 'https://i.pravatar.cc',
          category: 'fashion',
        },
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      );
      console.log('API Response:', res.data);

      Alert.alert('Success', 'Product Updated');
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{padding: 10}}>
        <Image
          source={{uri: item.image}}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price}>₹ {item.price}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    );
  };

  const emptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Data Found</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{padding: 10}} onPress={addproduct}>
            <Text>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}} onPress={updateprduct}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 16}}
        // renderItem={({item})=>{
        //     return(
        //         <View style={{padding:10}}>
        //             <Text>{item.name}</Text>
        //             <Text>{item.subname}</Text>
        //         </View>
        //     )
        // }}
      />
    </SafeAreaView>
  );
};

export default Flatlist;

const styles = StyleSheet.create({});
