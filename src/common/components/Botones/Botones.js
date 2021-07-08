import React from "react"
import { View, Text } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { useDispatch } from "react-redux"
import { userActions } from "../../../services/User/UserSlice"
import { styles } from "./BotonesStyles"


export const Botones = ({ nombreCampana }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.View}>
            {nombreCampana ?
                <TouchableHighlight>
                    <Text style={styles.Texto}>
                        {nombreCampana}
                    </Text>
                </TouchableHighlight>
                :
                <TouchableHighlight onPress = {() => dispatch(userActions.getCampañas)}>
                    <Text style={styles.Texto}>
                        +
                    </Text>
                </TouchableHighlight>}
        </View>
    )
}