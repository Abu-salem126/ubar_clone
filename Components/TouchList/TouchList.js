import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';


const TouchList = props => {
    return(
        <TouchableWithoutFeedback onPress ={props.onItempressed}>
            <View style={styles.newDesign}>
                <Text>
                    {props.placeName}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    newDesign:{
        padding:10,
        width:"100%",
        backgroundColor:'#eee',
        marginTop:5,
        cursor:'pointer',
    }
})
export default TouchList;