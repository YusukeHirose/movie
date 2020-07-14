import React from 'react'

const Pagination = ({page, updatePage}) => {

    const pageStyle = {
        marginBottom: "calc(100vh - 95vh)"
    }

    return (
        <>
            <nav aria-label="Page navigation example" style={pageStyle}>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <button className="page-link" type="button" onClick={() => updatePage(page - 1)} tabIndex="-1" aria-disabled="true">Previous</button>
                    </li>
                    <li className="page-item active"><button type="button" className="page-link" onClick={() => updatePage(page)}>{page}</button></li>
                    <li className="page-item"><button type="button" className="page-link" onClick={() => updatePage(page + 1)}>{page + 1} </button></li>
                    <li className="page-item"><button type="button" className="page-link" onClick={() => updatePage(page + 2)}>{page + 2}</button></li>
                    <li className="page-item">
                        <button className="page-link" type="button" onClick={() => updatePage(page + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination