import React from "react"

import { Grid, Image, Segment, } from "semantic-ui-react"

import { useBioContext } from "../../utils/BioState"
import { SELECT_PHOTO, NEXT_PHOTO, PREV_PHOTO } from "../../utils/BioState/action"

import bioPhotoInfo from "../../utils/BioState/bioPhotoInfo"

import "./style.css"

export default function PhotoDisplay({ ...props }) {

    const [bioState, bioDispatch] = useBioContext()

    const nextPhoto = () => {
        bioDispatch({ type: NEXT_PHOTO })
    }

    const prevPhoto = () => {
        bioDispatch({ type: PREV_PHOTO })
    }

    const selectPhoto = selectedIndex => {
        bioDispatch({ type: SELECT_PHOTO, selectedIndex: selectedIndex })
    }

    const getSelectedSRC = () => {
        return bioPhotoInfo[bioState.selectedIndex].src
    }

    const getAllSRCs = () => {
        return bioPhotoInfo.map(photoInfo => photoInfo.src)
    }


    return (

        <Grid centered verticalAlign="middle">
            <Grid.Column computer = {10} tablet = {10} mobile = {16} textAlign="center" className="no-bottom-padding">
                <Image circular className="main-image" centered src={process.env.PUBLIC_URL + getSelectedSRC()} />
            </Grid.Column>

            <Grid.Column computer = {16} tablet = {8} mobile = {10} textAlign="center">
                <Image.Group>
                    {getAllSRCs().map((src, index) => {
                        if (index !== bioState.selectedIndex) {
                            return (
                                <Image
                                    circular
                                    verticalAlign="middle"
                                    className="selectable-thumbnail"
                                    key={index}
                                    src={process.env.PUBLIC_URL + src}
                                    onClick={() => selectPhoto(index)}
                                />
                            )
                        }
                    })}

                </Image.Group>
            </Grid.Column>
        </Grid>

    )
}


