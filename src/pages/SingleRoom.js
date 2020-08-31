import React from 'react'

import defaultImg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

class SingleRoom extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            slug: this.props.match.params.single,
            defaultImg
        }
    }
    componentDidMount() {

    }
    static contextType = RoomContext
    render() {
        const { getRoom } = this.context
        let room = getRoom(this.state.slug)
        if(!room) {
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to='/rooms/' className="btn-primary"> Back to rooms </Link>
            </div>
        }else{
            const { name, description, capacity, size, price, extras, breakfast, pets, images,  } = room
            const [mainImg, ...defaultImg] = images

            return (
                <>
                    <StyledHero img={mainImg}>
                        <Banner title={`${name} room`}>
                            <Link to="/rooms/" className="btn-primary">back to rooms</Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-room">
                        <div className="single-room-images">
                            { defaultImg.map((item, index) => <img key={index} src={item} alt={name} />) }
                        </div>
                        <div className="single-room-info">
                            <article className="desc">
                                <h3>details</h3>
                                <p>{ description }</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>Price : ${ price }</h6>
                                <h6>Size : { size } SQFT</h6>
                                <h6>Max Capacity : { capacity > 1 ? capacity +  " PEOPLE" : capacity + " PERSON" }</h6>
                                <h6>{ pets ? "Pets allowed" : "No pets allowed" }</h6>
                                { breakfast && <h6>Free Breakfast</h6> }
                            </article>
                        </div>
                    </section>
                    <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            { extras.map((item, index) => <li key={index}>{item}</li>) }
                        </ul>
                    </section>
                </>
            )
        }
        
    }
}
export default SingleRoom