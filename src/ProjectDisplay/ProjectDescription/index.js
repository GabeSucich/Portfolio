import React from "react"

import {Grid, Header, Segment} from "semantic-ui-react"

import descriptions from "./descriptions"

import {useProjectContext} from "../../utils/ProjectState"
import projectInfo from "../../utils/projectInfo"

import "./style.css"

export default function ProjectDescription({...props}) {

    const [projectState, projectDispatch] = useProjectContext()

    const projectObjName = projectInfo[projectState.selectedIndex].objName
    const title = projectInfo[projectState.selectedIndex].name

    return (
        <Grid.Column computer = {8} tablet = {16} mobile = {16} textAlign = "center" verticalAlign = "middle">
            <Header as = "h2" className="roboto no-bottom-margin">{title}</Header>
            <Segment basic textAlign="center" className="roboto no-top-margin">
                {descriptions[projectObjName]}
            </Segment>
        </Grid.Column>
    )
}