import React from 'react';
import _ from "lodash"

const Pagination = ({itemsCount, pageSize , onPageChange, currentPage}) => {
    const pageCount = Math.ceil(itemsCount/pageSize) //округление Math.ceil
    if(pageCount === 1 ) return null
    const pages = _.range(1,pageCount+1) //необходимый метод для lodash(для создания массива) 
    console.log(pages)
    return <nav>
        <ul className="pagination"> 
            {pages.map((page)=> (
            <li 
            className={
                "page-item" +
            (page === currentPage ? "active" : "")
            }
             key={"page_"+page}>  
                <a className="page-link" onClick={()=>onPageChange(page)}>{page} </a>
            </li>
            ))}
        </ul>
    </nav>
}
 
export default Pagination;