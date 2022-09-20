import React from 'react'

export default function RandomNumbers(props) {
    if (props.number < 5) {
        throw new Error()
    }
    return (
        <div style={{ marginBottom: '13px' }}>
            <h1>{props.number}</h1>
        </div>
    )
}
