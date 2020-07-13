import React from 'react'

const Content = ({content}) => {
    const wrapperStyle = {
        marginLeft:"calc(100vw - 98vw)",
        marginBottom:"calc(100vh - 98vh)"
    }

    return (
        <>
            <div className="col-sm-2" style={wrapperStyle}>
                <div className="card" style={{width: "16rem"}}>
                    <img src="https://www.homepage-tukurikata.com/image/lion.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{content["title"]}</h5>
                        <h6 className="card-text">{content["release_date"]}</h6>
                        <a href="localhost:3000" className="btn btn-primary">Go Detail</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content