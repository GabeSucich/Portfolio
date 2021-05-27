import React from "react"

import { Segment, Image } from "semantic-ui-react"

import "./style.css"

export default function StaticImage({src, ...props}) {

    return (
        <Segment basic className = {props.className} textAlign="center">
            <Image fluid centered src = {src} />
        </Segment>
    )
}