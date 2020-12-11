import PropTypes from 'prop-types';
import React from 'react';

import styles from './Pagination.module.sass';
import PaginationButton from './PaginationButton';

const Pagination = ({
  pages, activePage, showOnly, onChangePage,
}) => {
  const numbers = new Array(pages).fill(0).map((_, i) => i + 1);
  const startSlice = Math.max(0, activePage - (showOnly / 2));
  const endSlice = activePage + (showOnly / 2);

  return (
    <ul className={styles.pagination}>
      {
        activePage !== 1
        && (
          <>
            <PaginationButton
              controls
              onClick={() => onChangePage(1)}
            >
              &lt;&lt;
            </PaginationButton>

            <PaginationButton
              controls
              onClick={() => onChangePage(activePage - 1)}
            >
              &lt;
            </PaginationButton>
          </>
        )
      }

      {
        numbers
          .slice(startSlice, endSlice)
          .map((page) => (
            <PaginationButton
              key={page}
              active={activePage === page}
              onClick={() => onChangePage(page)}
            >
              {page}
            </PaginationButton>
          ))
      }

      {
        activePage !== pages && (
          <>
            <PaginationButton
              controls
              onClick={() => onChangePage(activePage + 1)}
            >
              &gt;
            </PaginationButton>

            <PaginationButton
              controls
              onClick={() => onChangePage(pages)}
            >
              &gt;&gt;
            </PaginationButton>
          </>
        )
      }
    </ul>
  );
};

Pagination.propTypes = {
  showOnly: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
  onChangePage: () => { },
};

export default Pagination;
