import React from "react"

import {useProjectContext} from "../utils/ProjectState"

import { Segment } from "semantic-ui-react"

import projectInfo from "../utils/projectInfo"

import Thumbnail from "./Thumbnail"

import "./style.css"


export default function ProjectSelect({...props}) {

    const [projectState, projectDispatch] = useProjectContext()

    return (
        <Segment inverted className="select-background">
            {projectInfo.map((project, index, {length}) => {
                return (
                    <Thumbnail 
                        name = {projectInfo[index].name}
                        imageSRC = {projectInfo[index].thumbnailSRC} 
                        className = {projectState.selectedIndex === index ? "selected" : "not-selected"}
                        key = {index}
                        index = {index}
                        />
                )
            })}
        </Segment>
    )
    
}