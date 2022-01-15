import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet,ScrollView, Text, View,Image } from 'react-native';
import { LoginContext } from '../utils/LoginProvider';
import AuthorizationService from '../services/AuthService';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { Badge, Icon, withBadge } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
 function HomeScreen(props) {
  const { setUser, setCart } = useContext(LoginContext);
  const service = new AuthorizationService();
  const [items,setItems] = useState([]);


  const BadgedIcon = withBadge(props.cartItems.length)(Icon);

  const signOut = () => {
     setUser(false)
  };

  useEffect(()=>{
    service.getTopItems().then((response)=>{
        const loadData = response.data.data.products.data
        setItems(
            loadData.map((item)=>{
              return  {
                    id: item.id,
                    Name: item.name,
                    img: item.thumbnail,
                    price: item.original_price
                }
            })
        )
    })
  },[])

  return (
    <View style={styles.container}>
      <View>
        {/* <Text> Home: welcome </Text>  */}
        <BadgedIcon onPress={() => setCart(true)}  type="ionicon" name="ios-cart" />
      <Button color="#ff033e" onPress={() => signOut()} title="Logout " /> 

      </View>
      <ScrollView>

      {
          items.map((item,idx)=>{
            return <View key={item.id} style={styles.item}>
              <Image
              style={styles.tinyLogo}
              source={{
                uri: item.img
              }}
              />
            <Text style={styles.title}>{item.Name}</Text>
            <Button color="#fe6f5e" onPress={()=>{}} title={"GEL: " + item.price} />
            <Button onPress={()=>{props.addItemToCart(items[idx])}} color="#f0f8ff" title="add to cart " /> 

          </View>
          })
      }
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
   
  },
  button: {
     
  },
  item: {
      borderRadius: 10,
    backgroundColor: '#5d8aa8',
    height: 350,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {},
  tinyLogo: {
      borderRadius: 10,
      paddingBottom: 10,
    width: 250,
    height: 160,
  },
});


const mapStateToProps = (state) => {
  return {
      cartItems: state
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HomeScreen));
// export default connect(mapStateToProps)(HomeScreen);