import React from "react"

import { Grid, Header, Image, Segment } from "semantic-ui-react"

import { useProjectContext } from "../../utils/ProjectState"
import { SELECT_PROJECT } from "../../utils/ProjectState/action"

import "./style.css"

export default function Thumbnail({ imageSRC, index, name, ...props }) {

    const [projectState, projectDispatch] = useProjectContext()

    const selectProject = () => {
        projectDispatch({ type: SELECT_PROJECT, selectedIndex: index })
    }


    return (
        <div className={"thumbnail-container " + props.className} onClick={selectProject}>
        
              <Header as = "h3" className = "thumbnail-header roboto">{name}</Header>
            
              <Image src={process.env.PUBLIC_URL + imageSRC} centered fluid />  

        </div>
    )
}