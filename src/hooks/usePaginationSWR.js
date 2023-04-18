import { useState } from "react";
import useSWR from "swr";

function usePaginationSWR(url, fetcher, options) {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, mutate } = useSWR(
    `${url}?page=${currentPage}&limit=${limit}`,
    fetcher,
    {
      ...options,
    }
  );

  function onPageChange(page) {
    setCurrentPage(page);
  }

  return {
    data: data?.[0],
    isLoading: !data && !error,
    isError: error,
    currentPage,
    onPageChange,
    refresh: mutate,
  };
}
export default usePaginationSWR;
