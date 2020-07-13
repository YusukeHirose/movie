import React from 'react'

import Content from './Content'

const Contents = ({contents}) => {
    const contentsStyle = {
        marginTop: "calc(100vh - 90vh)",
        marginRight: "auto",
        marginLeft: "auto"
    }

    return (
        <>
            <div className="row" style={contentsStyle}>
                { contents.map((content, index) => (
                    <Content key={index} content={content} />))
                }
            </div>
        </>
    )
}
export default Contents