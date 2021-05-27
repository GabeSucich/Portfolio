import React from "react"

import { Container, Divider, Grid } from "semantic-ui-react"

import PhotoDisplay from "./PhotoDisplay"
import {Section1, Section2, Section3} from "./Text"

export default function Bio({...props}) {

    const openTranscript = () => {
        window.open("/Transcript.pdf")
    }

    return (
        
        <Container fluid style = {{marginTop: "5%"}}>
            <Grid centered verticalAlign="middle">
                <Grid.Column computer = {10} tablet = {10} mobile = {16} textAlign="center">
                    <Section1/>
                    <Divider hidden/>
                    <Section2/>
                    <Divider hidden />
                    <Section3 />
                </Grid.Column>
                <Grid.Column computer = {6} tablet = {6} mobile = {16} textAlign="center">
                    <PhotoDisplay /> 
                </Grid.Column>
            </Grid>
            
        </Container>
           
    )
    

}