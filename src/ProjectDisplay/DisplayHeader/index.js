import React from "react-dom"

import { Button, Grid, Icon } from "semantic-ui-react"

import { useProjectContext } from "../../utils/ProjectState"
import {NEXT_PROJECT, PREV_PROJECT} from "../../utils/ProjectState/action"
import projectInfo from "../../utils/projectInfo"

import "./style.css"

export default function DisplayHeader({ ...props }) {

    const [projectState, projectDispatch] = useProjectContext()

    const nextProject = () => {
        projectDispatch({type: NEXT_PROJECT})
    }

    const prevProject = () => {
        projectDispatch({type: PREV_PROJECT})
    }

    const openDeployedLink = () => {
        window.open(projectInfo[projectState.selectedIndex].deployedLink)
    }

    const openCodeLink = () => {
        window.open(projectInfo[projectState.selectedIndex].codebaseLink)
    }

    return (
        <Grid.Column width={16} textAlign="center">
            <Button icon="angle left" onClick = {prevProject} color="black"/>
            <Button animated="fade" color="blue" onClick = {openCodeLink}>
                <Button.Content visible>Source Code</Button.Content>
                <Button.Content hidden>
                    <Icon name='database' />
                </Button.Content>
            </Button>
            <Button animated="fade" color="blue" onClick = {openDeployedLink}>
                <Button.Content visible>Deployed Application</Button.Content>
                <Button.Content hidden>
                    <Icon name='cloudsmith' />
                </Button.Content>
            </Button>
            <Button icon="angle right" onClick = {nextProject} color="black"/>
        </Grid.Column>
    )



}