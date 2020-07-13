import React from 'react'

const Content = () => {
    return (
        <>
            <div>content</div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://www.homepage-tukurikata.com/image/lion.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <h6 className="card-text">ReleaseDate</h6>
                    <a href="localhost:3000" className="btn btn-primary">Go Detail</a>
                </div>
            </div>
        </>
    )
}

export default Content