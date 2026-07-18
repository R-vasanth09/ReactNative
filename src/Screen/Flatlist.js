import React, {
  useState,
  useEffect,
  useCallback,
  memo,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Item = memo(({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>₹ {item.price}</Text>
    </View>
  );
});

const Flatlist = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [footerLoading, setFooterLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const ITEMS_PER_PAGE = 5;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://fakestoreapi.noksha.dev/api/products',
      );

      const json = await response.json();

      setAllProducts(json.data);
      setProducts(json.data.slice(0, ITEMS_PER_PAGE));
    } catch (e) {
      setError('Failed to load products.');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  const loadMore = () => {
    if (footerLoading) {
      return;
    }

    if (products.length >= allProducts.length) {
      return;
    }

    setFooterLoading(true);

    setTimeout(() => {
      const newLength = products.length + ITEMS_PER_PAGE;

      setProducts(allProducts.slice(0, newLength));

      setFooterLoading(false);
    }, 1000);
  };

  const renderItem = useCallback(({item}) => {
    return <Item item={item} />;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error !== '') {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={7}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={50}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        getItemLayout={(data, index) => ({
          length: 90,
          offset: 90 * index,
          index,
        })}
        ListHeaderComponent={() => (
          <Text style={styles.header}>
            Product List
          </Text>
        )}
        ListFooterComponent={() =>
          footerLoading ? (
            <ActivityIndicator
              size="small"
              style={{marginVertical: 20}}
            />
          ) : null
        }
        ListEmptyComponent={() => (
          <Text style={styles.empty}>
            No Products Found
          </Text>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </SafeAreaView>
  );
};

export default Flatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15,
  },

  itemContainer: {
    height: 90,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },

  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },

  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
});