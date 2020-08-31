import React from 'react'

import loadingArrow from '../images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>loading </h4>
            <img src={ loadingArrow } /> 
        </div>
    )
}
export default Loading