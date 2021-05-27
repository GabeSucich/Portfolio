import React, { useEffect, useState } from "react"

import { Link, NavLink, useLocation, useRouteMatch } from "react-router-dom"

import { Segment, Menu, Icon } from "semantic-ui-react"

import "./style.css"

export default function Navigation({ ...props }) {

    const [active, setActive] = useState()

    const loc = useLocation()
    const match = useRouteMatch()

    useEffect(() => {
        setActive(loc.path)
    }, [])

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/gabriel-sucich-6a28a71a8/")
    }

    const openGithub = () => {
        window.open("https://github.com/GabeSucich")
    }

    const openResume = () => {
        window.open(process.env.PUBLIC_URL + "/Resume.pdf")
    }

    return (
        <div className="no-margin no-padding">
            <Segment inverted>
                <Menu inverted secondary>
                    <Menu.Item
                        as={NavLink}
                        to="/about"
                        name="About Me"
                        active={active === "/about"}
                    />
                    <Menu.Item
                        as={NavLink}
                        to="/projects"
                        name="Projects"
                        active={active === "/projects"}
                    />
                    <Menu.Item
                        onClick = {openResume}
                        name="Resume"
                        
                    />
                    <Menu.Menu position="right">
                        <Menu.Item className="icon-menu-item" onClick = {openGithub}>
                            <Icon className="social-icon" name="github" color="orange" size="big" />
                        </Menu.Item>
                        <Menu.Item className="icon-menu-item" onClick = {openLinkedin}>
                            <Icon className="social-icon" name="linkedin" color="blue" size="big" />
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
            </Segment>
        </div>
    )

}