import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#ffffff',
        alignItems:'stretch',
        justifyContent:'center',
    },
    topLayout:{
        flex:0.85,
        alignItems:'center',
        justifyContent:'center',
    },
    bottomLayout:{
        flex:1.15,
        flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'center',
        paddingHorizontal: 40,
    },
    titleText:{
        fontWeight:'bold',
        color:'#454545',
        textTransform: 'uppercase',
        fontSize: 50,
    },
    textInputContainer:{
        marginBottom: 10,
    },
    textInput:{
        borderRadius:100,
        borderWidth:0.5,
        borderColor:'#000000',
        color:'#000000',
        fontSize: 17,
        paddingHorizontal: 20,
        paddingVertical:10,
    },
    errorMsg:{
        paddingHorizontal: 20,
        color:'#ff5a5a',
    },
    
});

export default styles;