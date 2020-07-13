import React from 'react'

const Content = ({content}) => {
    const wrapperStyle = {
        marginLeft:"calc(100vw - 98vw)",
        marginBottom:"calc(100vh - 98vh)",
        height: "calc(100vh - 32vh)",
    }
    const cardStyle = {
        width: "16rem",
    }
    const titleStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }

    const imgStyle = {
        height: "calc(100vh - 60vh)"
    }

    return (
        <>
            <div className="col-sm-2" style={wrapperStyle}>
                <div className="card" style={cardStyle}>
                    <img src={content["poster_path"]} className="card-img-top" alt="..." style={imgStyle}></img>
                    <div className="card-body">
                        <h5 className="card-title" style={titleStyle}>{content["title"]}</h5>
                        <p className="card-text">Release: {content["release_date"]}</p>
                        <a href="localhost:3000" className="btn btn-primary">Go Detail</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content