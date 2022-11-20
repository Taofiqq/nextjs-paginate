import React from "react";
import styles from "../../styles/Home.module.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10
  //   console.log(pagesCount, "pagesCount");
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  //   console.log(pages, "pages");
  return (
    <div>
      <nav>
        <ul className={styles.pagination}>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? styles.pageItemActive : styles.pageItem
              }
            >
              <a className={styles.pageLink} onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
