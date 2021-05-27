import React, {createContext, useContext, useReducer} from "react"

import {PREV_PHOTO, NEXT_PHOTO, SELECT_PHOTO} from "./action"

import photoInfo from "./bioPhotoInfo"


const BioContext = createContext()
const {Provider} = BioContext

const initial = {
    selectedIndex: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case NEXT_PHOTO:
            if (state.selectedIndex >= photoInfo.length - 1) {
                return {...state, selectedIndex: 0}
            }
            else {
                return {...state, selectedIndex: state.selectedIndex + 1}
            }
        case PREV_PHOTO:
            if (state.selectedIndex === 0) {
                return {...state, selectedIndex: photoInfo.length - 1}
            } else {
                return {...state, selectedIndex: state.selectedIndex - 1}
            }
        case SELECT_PHOTO:
            return {...state, selectedIndex: action.selectedIndex}
    }
}

const BioProvider = ({value = [], ...props}) => {

    const [state, dispatch] = useReducer(reducer, initial)

    return (
        <Provider value = {[state, dispatch]} {...props} />
    )
}

const useBioContext = () => {
    return useContext(BioContext)
}

export {BioProvider, useBioContext}