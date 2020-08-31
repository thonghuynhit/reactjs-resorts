import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomsComsumer  } from '../context'
import Loading from '../components/Loading'

function RoomsContainer({context}) {
    const {loading, sortRooms, rooms} = context
    if(loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortRooms} />
        </div>
    )
}
export default withRoomsComsumer(RoomsContainer)


// function RoomsContainer() {
//     return (
//         <RoomConsummer>
//             {
//                 value => {
//                     const { loading, sortRooms, rooms } = value
//                     console.log(sortRooms)
//                     if(loading) {
//                         return <Loading /> 
//                     }
//                     return <div>
//                         Container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortRooms} />
//                     </div>
//                 }
//             }
//         </RoomConsummer>
//     )
// }
// export default RoomsContainer