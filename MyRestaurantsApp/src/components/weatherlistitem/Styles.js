import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row',
        marginVertical:3,
        marginHorizontal:5,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },   
    innerLayout:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
    },
    textDate:{
        color:'#707070',
        fontSize: 20,
    },
    textHeat:{
        color:'#454545',
        fontSize: 40,
        margin:10,
    },

});

export default styles;