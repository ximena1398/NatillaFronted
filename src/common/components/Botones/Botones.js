import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../../services/User/UserSlice"
import { styles } from "./BotonesStyles"


export const Botones = ({ nombreCampana }) => {
    return (
        <View style={styles.View}>
            {nombreCampana ?
                <TouchableHighlight>
                    <Text style={styles.Texto}>
                        {nombreCampana}
                    </Text>
                </TouchableHighlight>
                :
                <TouchableHighlight>
                    <Text style={styles.Texto}>
                        +
                    </Text>
                </TouchableHighlight>}
        </View>
    )
}