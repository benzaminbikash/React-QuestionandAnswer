import React, { } from 'react'
import "./App.css"
import data from "./data"
import Single from './Single'

const App = () => {
    return (
        <>
            <div className='container'>

                <div className='main'>
                    <h4>Question and Answer of React</h4>
                    <div className='bikash'>
                        {data.map((items) => {
                            return (
                                <>
                                    <Single key={items.id} {...items} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App