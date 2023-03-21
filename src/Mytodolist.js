import React from 'react'

const Mytodolist = (props) => {

    return (
        <>
            <div className='todo_style'>
                <i className="bi bi-x-circle-fill fa-times"
                    onClick={() => {
                        props.onSelect(props.id)
                    }} aria-hidden="true" />
                <li>{props.text}</li>
            </div>
        </>
    )

}

export default Mytodolist