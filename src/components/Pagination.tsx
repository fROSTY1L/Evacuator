import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setAllPages, setPage } from '../store/PageReducer';
import { PaginationContainer, PaginationItem, PaginationNext } from '../styles/Component styles/Pagination.styles';
import { RightOutlined } from '@ant-design/icons';

const Pagination: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.page.pageNumber);
  const allPages = useSelector((state: RootState) => state.page.allPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllPages(5));
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 4;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(allPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
        >
          {i}
        </PaginationItem>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationContainer>
      {renderPageNumbers()}
      <PaginationNext
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === allPages}
      >
        <RightOutlined/>
      </PaginationNext>
    </PaginationContainer>
  );
};

export default Pagination;
