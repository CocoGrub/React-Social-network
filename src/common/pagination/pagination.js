import React from 'react'
import styles from "./style.module.css";

const Pagination = ({currentPage,reqPage}) => {

    const pagesCount = 10; // Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
{pages.map((x, k) => {
    return (
        <span key={k} className={currentPage === x ? styles.activePage : ''}
              onClick={() => {reqPage(x)}}>{x}</span>
    )
})}
</div>
}

export default Pagination;