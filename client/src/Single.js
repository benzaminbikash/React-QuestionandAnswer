import React, { useState } from 'react'

const Single = ({ title, info }) => {
    const [show, setShow] = useState(false)
    return (
        <main>
            <div className='single'>
                <div className='mainsingle'>
                    <header>
                        <p>{title}</p>
                        <button className='btn' onClick={() => setShow(!show)}>
                            {show ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
                        </button>
                    </header>
                    {show && info}
                </div>
            </div>
        </main>
    )
}
export default Single