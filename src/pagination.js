import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for ( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={'page-list'}>
                {pageNumbers.map(number => (
                    <li key = {number} onClick={() => paginate(number)} className={'pag' + (currentPage === number? ' pag-active': '')}>
                        {number}
                    </li>
                ))}
           

            </ul>

        </nav>
     )
}

export default Pagination;