import React from 'react'
import {ImageBackground, View, Text} from 'react-native'
import styles from './style'
import StyledButton from '../StyledButton'
const CarItem = (props) => {

   const {tagline,modelName,imageSrc,taglineCTA} = props
     return ( 
        <View style={styles.carContainer}> 
        <ImageBackground source={imageSrc}
        style={styles.image} />        
        <View style={styles.titles}>
             <Text style={styles.title}>{modelName}</Text>
             <Text style= {styles.subtitle}>{tagline} {''}
             <Text style={styles.taglineDecor}>{taglineCTA}</Text>
             </Text>
     
           </View>
<View style={styles.btnContainer}>      
<StyledButton type='primary' name='custom order' onpress={()=>{console.warn("custom order pressed");}}/>
<StyledButton type='secondary' name='exisiting inventory' onpress={() => {
            console.warn("Existing Inventory was pressed");
          }} />
        </View>
        </View>
     );
    };
export default CarItem
