import React, {createContext, useContext, useReducer} from "react"

import {NEXT_PROJECT, PREV_PROJECT, SELECT_PROJECT} from "./action"

import projectInfo from "../projectInfo"

const ProjectContext = createContext()
const {Provider} = ProjectContext

const initial = {
    selectedIndex: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case NEXT_PROJECT:
            if (state.selectedIndex === projectInfo.length - 1) {
                return {...state, selectedIndex: 0}
            } else {
                return {...state, selectedIndex: state.selectedIndex + 1}
            }
        
        case PREV_PROJECT:
            if (state.selectedIndex === 0) {
                return {...state, selectedIndex: projectInfo.length - 1}
            } else {
                return {...state, selectedIndex: state.selectedIndex - 1}
            }
        
        case SELECT_PROJECT:

            return {...state, selectedIndex: action.selectedIndex}

        default:
            return state
    }
}

const ProjectProvider = ({value = [], ...props}) => {

    const [state, dispatch] = useReducer(reducer, initial)

    return (
        <Provider value = {[state, dispatch]} {...props} />
    )
}

const useProjectContext = () => {
    return useContext(ProjectContext)
}

export {ProjectProvider, useProjectContext}