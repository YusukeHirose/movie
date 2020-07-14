import React from 'react'

const Pagination = ({page, updatePage}) => {

    const pageStyle = {
        marginBottom: "calc(100vh - 95vh)"
    }

    // paging
    const priviousActive = () => {
       return page !== 1 ? "page-item" : "page-item disabled"
    }
    const pageNum = () => {
        return page === 1 ? page : page - 1
    }
    const page1 = () => {
        return page === 1 ? "page-item active" : "page-item"
    }
    const page2 = () => {
        return page >= 2 ? "page-item active" : "page-item"
    }

    return (
        <>
            <nav aria-label="Page navigation example" style={pageStyle}>
                <ul className="pagination justify-content-center">
                    <li className={priviousActive()}>
                        <button className="page-link" type="button" onClick={() => updatePage(page - 1)} tabIndex="-1" aria-disabled={page !== 1}>Previous</button>
                    </li>
                    <li className={page1()}><button type="button" className="page-link" onClick={() => updatePage(pageNum())}>{pageNum()}</button></li>
                    <li className={page2()}><button type="button" className="page-link" onClick={() => updatePage(pageNum() + 1)}>{pageNum() + 1} </button></li>
                    <li className="page-item"><button type="button" className="page-link" onClick={() => updatePage(pageNum() + 2)}>{pageNum() + 2}</button></li>
                    <li className="page-item">
                        <button className="page-link" type="button" onClick={() => updatePage(page + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination