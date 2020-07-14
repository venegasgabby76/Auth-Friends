import React from 'react';


const Friends = props => {
    return (
        <>
            <h3>Name:{props.name}</h3>
            <p>Age:{props.age}</p>
            <p>Email:{props.email}</p>
        </>
    )
}

export default Friends;