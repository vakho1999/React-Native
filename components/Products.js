import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class Products extends Component {

    renderProducts = (products) => {
        // console.log(products)
        return products.map((item,idx) => {
            return (
                <View key={idx} style={{ padding: 20 }}>
                    <Button onPress={(item) => this.props.onPress(item)} title={item.Name + " - " + item.price} />
                </View>
            )
        })
    }



    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});