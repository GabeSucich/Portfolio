import React, {useEffect, useState} from "react"

import { Button, Grid } from "semantic-ui-react"

import {useProjectContext} from "../../utils/ProjectState"

import LiveImage from "../LiveImage"

import "./style.css"

export default function ImageDisplay({imageInfo, ...props}) {

    const [projectState, projectDispatch] = useProjectContext()


    useEffect(() => {
        setStatic()
    }, [projectState.selectedIndex])



    const [displayedIndex, setDisplayedIndex] = useState(0)
    const [live, setLive] = useState(false);

    const toggleLive = () => {
        setLive(!live)
    }

    const setStatic = () => {
        setLive(false)
    }

    const nextImage = () => {
        setStatic()
        setDisplayedIndex(displayedIndex + 1)
    }

    const prevImage = () => {
        setStatic()
        setDisplayedIndex(displayedIndex - 1)
    }

    const NextButton = () => {
        
        return (
            <Button icon = "double angle right" onClick = {nextImage} disabled = {!(displayedIndex < imageInfo.length - 1)}/>
        )
    }

    const PrevButton = () => {
        return (
            <Button icon = "double angle left" onClick = {prevImage} disabled = {!(displayedIndex > 0)}/>
        )
    }



    return (
        <Grid.Column computer = "12" tablet = "14" mobile = "16" className="image-container" textAlign="center">

            <LiveImage 
                liveSRC = {process.env.PUBLIC_URL + imageInfo[displayedIndex].liveSRC} 
                staticSRC = {process.env.PUBLIC_URL + imageInfo[displayedIndex].staticSRC} 
                className = "live-image" 
                NextButton = {NextButton }
                PrevButton = {PrevButton}
                live = {live}
                toggleLive = {toggleLive}
                />
            
            
        </Grid.Column>
    )
}