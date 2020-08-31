import React from 'react'
import { NavLink } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import RoomsContainer from '../components/RoomsContainer'

function Rooms(props) {

    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms" subtitle="">
                    <NavLink to="/" className="btn-primary">return home</NavLink>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}
export default Rooms