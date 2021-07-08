import React from "react"
import {styles} from "./InicioStyles"
import { View, Text} from "react-native"
import { Botones } from "../../common/components/Botones/Botones"

export const Inicio = () => {
    return(
        <View style = {styles.View}>
            <Text style = {styles.Texto}>
                NatillApp
            </Text>
            <View style = {styles.ViewBotones}>
                <Botones nombreCampana = {'C1'}/>
                <Botones />
            </View>
        </View>
    )
}