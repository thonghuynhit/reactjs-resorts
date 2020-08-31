import React from 'react'

import { RoomContext  } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

class FeaturedRoom extends React.Component {
    static contextType = RoomContext
    
    render() {
        const { loading, featuredRoom } = this.context
        let rooms = featuredRoom.map(room => {
            return <Room key={ room.id } room={ room } />
        })
        console.log(rooms)
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : rooms }
                </div>
            </section>
        )
    }
}
export default FeaturedRoom