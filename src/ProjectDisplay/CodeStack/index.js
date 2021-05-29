import React from "react"

import {Grid, Image} from "semantic-ui-react"

import {useProjectContext} from "../../utils/ProjectState"

import projectInfo from "../../utils/projectInfo"

import "./style.css"

export default function CodeStack({...props}) {

    const [projectState, projectDispatch] = useProjectContext()

    return (
        <Grid.Column computer = {8} tablet = {8} mobile = {8} verticalAlign = "middle">
            <Image className="stack-image" fluid src = {process.env.PUBLIC_URL + projectInfo[projectState.selectedIndex].codeStackSRC} />
        </Grid.Column>
    )
}