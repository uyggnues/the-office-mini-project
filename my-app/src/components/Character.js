// import {useState} from 'react'


const Character = ({id, firstname, lastname, __v}) => {


    return (
        <div className="card"> 
            <>
                 {/* <span >id:{id}</span> */}
                 <span className='text'>Name: {firstname} {lastname}</span>
                 {/* <span >__v:{__v}</span> */}
            </>
        </div>
    )
}
export default Character;