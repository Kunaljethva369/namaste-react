import React from 'react'

function Shimmer() {

    return (
        <>
            {
                Array.from({ length: 10 }).map((_,index) => (
                    <>
                        <div className="shimmer-card" key={index}>
                            <div className="shimmer image"></div>
                            <div className="content">
                                <div className="shimmer title"></div>
                                <div className="shimmer subtitle"></div>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
}

export default Shimmer