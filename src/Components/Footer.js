import { StyleSheet, View, Text } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign'

export function Footer( {navigation} ) {
    return (
        <View style={styles.footer}>
            <Icon 
                name="home"
                size={30}
                color='#141414'
                onPress={() => navigation.navigate('Home') }
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    footer:  {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 12,
        zIndex: 5,
        borderTopWidth: 1,
        borderTopColor: '#14141410'
    },
    text: {
        fontSize: 18,
        fontWeight: "900"
    }
})