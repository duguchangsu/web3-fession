import { useState } from 'react';
import useSWR from 'swr';

function usePaginationSWR(url, fetcher, options) {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, mutate } = useSWR(`${url}?page=${currentPage}&limit=${limit}`, fetcher, {
    ...options,
  });

  function onPageChange(page: number) {
    setCurrentPage(page);
  }

  return {
    data,
    isLoading: !data && !error,
    isError: error,
    currentPage,
    onPageChange,
    refresh: mutate,
  };
}
export default usePaginationSWR;
