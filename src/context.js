import React from 'react'

import items from './data'

const RoomContext = React.createContext()

class RoomProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            breakfast: true,
            pets: true,
            rooms: [],
            sortRooms: [],
            featuredRoom: [],
            loading: true,
            type: "all",
            capacity: 1,
            price: 0,
            maxPrice: 0,
            minPrice: 0,
            maxSize: 0,
            minSize: 0,
            test: false


        }
    }
    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRoom = rooms.filter(item => {
            return item.featured === true
        })
        //rooms.map(item => console.log(item.price))
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        console.log(maxSize)

        this.setState({
            loading: false,
            sortRooms: rooms,
            featuredRoom: featuredRoom,
            rooms,
            price: maxPrice,
            maxSize,
            maxPrice,
            breakfast: false,
            pets: false,


        })
    }

    formatData = (items) => {
        
        return items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => {
                return image.fields.file.url
            })
            return { id: id, ...item.fields, images: images,  }
        })
    }

    getRoom = (slug) => {
        let temp = [...this.state.rooms]
        let room = temp.find(item => item.slug === slug)
        return room
    }

    handleChange = event => {
        const name = event.target.name
        const target = event.target
        let value = event.type === "checked" ? target.checked : target.value
        if(event.target.type === "checkbox") {
            this.setState({ [name]: !this.state[name] }, this.filterRooms)
        }else{
            this.setState({ [name]: value }, this.filterRooms)
        }
    }
    
    filterRooms = () => {
        let { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = this.state
        let tempRooms = [...rooms]
        if(type !== "all") 
            tempRooms = tempRooms.filter(item => item.type === type)
        
        capacity = parseInt(capacity)
        if(capacity !== 1){
            tempRooms = tempRooms.filter(item => item.capacity >= capacity)
        }
        tempRooms = tempRooms.filter(item => item.price <= price)
        tempRooms = tempRooms.filter(item => item.size >= minSize && item.size <= maxSize)

        console.log(this.state.breakfast, this.state.pets)
        if(breakfast) {
            tempRooms = tempRooms.filter(item => item.breakfast === true)
        }
        if(pets) {
            tempRooms = tempRooms.filter(item => item.pets === true)
        }
        this.setState({sortRooms: tempRooms, })

    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange, }}>
                 { this.props.children }
            </RoomContext.Provider>
        )
    }
}
const RoomConsummer = RoomContext.Consumer

export function withRoomsComsumer(Component) {
    return function ComsumerWrapper(props) {
        return <RoomConsummer>
            { value => <Component {...props} context={value} /> }
        </RoomConsummer>
    }
}

export { RoomConsummer, RoomContext, RoomProvider }