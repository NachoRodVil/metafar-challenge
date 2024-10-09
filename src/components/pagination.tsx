import { PaginationProps } from '@/types/types';
import React from 'react';

export const Pagination: React.FC<PaginationProps> = ({ page, setPage, maxPage }) => {
    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="mx-auto table mt-10">
            <button className="rounded-full bg-light-purple hover:bg-purple px-1 py-0.5 mr-4" onClick={handlePrevious} disabled={page == 0}>
                {"<<"}
            </button>
            <span>{page}</span>
            <button className="rounded-full bg-light-purple hover:bg-purple px-1 py-0.5 ml-4" onClick={handleNext} disabled={page== maxPage}>
                {">>"}
            </button>
        </div>
    );
};

export default Pagination;