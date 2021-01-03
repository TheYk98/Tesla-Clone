import React from 'react'
import{ Text,View, Pressable} from 'react-native'
import styles from '../StyledButton/style'
const StyledButton = (props)=>{
    const type = props.type
    const bgColor = (type == 'primary' ? '#171A25CC':'#FFFFFFA6');
    const fontColor = (type == 'primary' ? 'white':'#171A20');
    const onPressFn = props.onpress
    return (
    <View style = {styles.container}>
        <Pressable
        style= {[styles.button,{backgroundColor:bgColor}]}
       onPress = {() => onPressFn()}
        >
         <Text style={[styles.text,{color:fontColor}]}>{props.name}</Text>
        </Pressable>
    </View>
    );
};
export default StyledButton
 




