import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   position:'fixed',
   top:50,
   zIndex:1,
   flexDirection:'row',
   width:'100%',
   justifyContent:'space-between',
  
   
  },
  logo: {
    width:100,
    height:20,
    resizeMode:'contain',
    marginLeft:20,
  },
  menu: {
    width:25,
    height:25,
    marginRight:20,
   }
});

export default styles;
