import React, {useState} from "react"

import { Segment, Image, Button, Divider } from "semantic-ui-react"

import "./style.css"

export default function LiveImage({NextButton, PrevButton, staticSRC, liveSRC, live, toggleLive, ...props}) {

    return (
        <Segment basic className = {props.className} textAlign="center">
            <Image fluid centered src = {live ? liveSRC : staticSRC} />
            <Divider fitted />
            {PrevButton && <PrevButton />}
            <Button 
                icon = {live ? "pause" : "play"} 
                onClick = {toggleLive} 
                color = "blue"
            />
            {NextButton && <NextButton />}
        </Segment>
    )

}