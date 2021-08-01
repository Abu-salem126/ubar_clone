import React from 'react';
import {Modal, View, Button, Text,Image} from 'react-native';


const ModalList = props => {
    return(
        <Modal>
            <View>
                <Image 
                
                source = {props.placeData.value}

                />
                <Text>
                    {props.placeData.value}
                </Text>
                <Button
                
                title = "Delete"
                />
            </View>
        </Modal>
    )
}


export default ModalList;


