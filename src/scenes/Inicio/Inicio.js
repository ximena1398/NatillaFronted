import React, { useEffect } from "react"
import {styles} from "./InicioStyles"
import { View, Text} from "react-native"
import { Botones } from "../../common/components/Botones/Botones"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../services/User/UserSlice"

export const Inicio = () => {
    const dispatch = useDispatch()
    const {Campañas} = useSelector(state => state.user)
    useEffect(() => {
        dispatch(userActions.getCampañas())
    },[])
    return(
        <View style = {styles.View}>
            <Text style = {styles.Texto}>
                {Campañas[0].payload}
            </Text>
            <View style = {styles.ViewBotones}>
                <Botones nombreCampana = {'C1'}/>
                <Botones />
            </View>
        </View>
    )
}