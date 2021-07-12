import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    buttonWrapper:{
        borderRadius: 100,
        paddingVertical: 13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText:{
        color:'#ffffff',
        fontSize: 17,
        textAlign:'center',
    },

});

export default styles;