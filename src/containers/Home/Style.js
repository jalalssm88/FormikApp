import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");
import { Metrics} from '../../config/';

export default StyleSheet.create({
    textStyle:{
        height:Metrics.VerticalSize(50),
        width:Metrics.HorizontalSize(330),
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray',
        marginTop:Metrics.VerticalSize(5)
    },
    buttonStyle:{
        height:Metrics.VerticalSize(50),
        width:Metrics.HorizontalSize(330),
        borderRadius:Metrics.VerticalSize(10),
        borderWidth:1,
        borderColor:'gray',
        marginTop:Metrics.VerticalSize(5),
        backgroundColor:'blue',
        alignItems:"center",
        justifyContent:'center'
    }
})