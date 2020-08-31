import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

import Title from './Title'

class Service extends React.Component {
    state = {
        services: [
            {icon: <FaCocktail />, title: "T la fontend developer web", info: "I'm an enigeer web the single page application (SPA). This is my first project"},
            {icon: <FaHiking />, title: "T la fontend developer web", info: "I'm an enigeer web the single page application (SPA). This is my first project"},
            {icon: <FaShuttleVan />, title: "T la fontend developer web", info: "I'm an enigeer web the single page application (SPA). This is my first project"},
            {icon: <FaBeer />, title: "T la fontend developer web", info: "I'm an enigeer web the single page application (SPA). This is my first project"}
        ]
    }
    render() {
        const service = this.state.services.map((item, index) => {
            return <article key={ index } className="service">
                <span>{ item.icon }</span>
                <h6>{ item.title }</h6>
                <p>{ item.info }</p>
            </article>
        })
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    { service }
                </div>
            </section>
        );
    }
}

export default Service