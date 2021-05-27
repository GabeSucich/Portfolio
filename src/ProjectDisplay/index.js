import React from "react"
import { Grid } from "semantic-ui-react"

import { useProjectContext } from "../utils/ProjectState"

import DisplayHeader from "./DisplayHeader"
import Instructions from "./Instructions"
import ImageDisplay from "./ImageDisplay"
import CodeStack from "./CodeStack"
import ProjectDescription from "./ProjectDescription"

import projectInfo from "../utils/projectInfo"

import "./style.css"

export default function ProjectDisplay({ ...props }) {

    const [projectState, projectDispatch] = useProjectContext()
    

    if (projectState.selectedIndex !== null) {
        return (
            <Grid centered>
                <DisplayHeader />
                <ProjectDescription />
                <CodeStack />
                <ImageDisplay imageInfo = {projectInfo[projectState.selectedIndex].imageInfo}/>
            </Grid>
        )
    } else {
        return (
            <Instructions />
        )
    }



}