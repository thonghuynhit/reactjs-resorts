import React from 'react'
import Room from './Room'

function RoomsList({ rooms }) {
    if(rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no room matchd your search paramaters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => (
                        <Room key={item.id} room={item}>

                        </Room>
                    ))
                }
            </div>
        </section>
    )
}
export default RoomsList 