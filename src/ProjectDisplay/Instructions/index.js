import React from "react"

import {Container, Header} from "semantic-ui-react"

import "./style.css"

export default function Instructions({...props}) {

    return (
        <Container textAlign="center" className="instructions roboto">
            <Header size = "huge" className="roboto">Select a project</Header>
            <Header size = "medium" className="roboto no-top-margin">Project details and relevant links will appear here</Header>
        </Container>
    )
}