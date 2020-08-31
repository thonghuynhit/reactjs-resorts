import React from 'react'
import { NavLink } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Service from '../components/Service'
import FeaturedRoom from '../components/FeaturedRoom'
import Button  from '../components/StyledHero'

function Home() {
    return (
        <>
            <Hero hero="defaultHero ">
                <Banner title="Luxury Rooms" subtitle="Deluxe rooms starting at 299$">
                    <NavLink to="/rooms/" className="btn-primary">Our Rooms</NavLink>
                </Banner>
            </Hero>
            <Service />
            <FeaturedRoom /> 
        </>
    )
}
export default Home