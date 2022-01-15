import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { connect } from 'react-redux'
import { Button } from 'react-native';
import { LoginContext } from '../utils/LoginProvider';
import { useContext } from "react";


function CartScreen(props)  {
    const { setCart } = useContext(LoginContext);

    const renderCount = ()=>{
        let sum = 0;

        for (let num of props.cartItems){

            sum = sum + num.price
        }
   
        return <Button color="#ff033e" onPress={() => {}} title={"amount: "+sum.toString()} /> 
    }
  
 
    // useEffect(()=>{
    //     {props.cartItems.map((item)=>{
    //         setCount(count+item.price)
    //      })}
    // })
    
    // console.log(props.cartItems)
    return (

            <View style={styles.container}>
                <ScrollView>
                {props.cartItems.length > 0 ?
                    <Products
                      
                        onPress={props.removeItem}
                        products={props.cartItems} />
                    : <Text>No items in your cart</Text>
                }
                </ScrollView>
                {renderCount()}
                 <Button color="#ff033e" onPress={() => setCart(false)} title="back " /> 
            </View>
        
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    }
});