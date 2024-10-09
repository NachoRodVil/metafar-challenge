"use client";
import { fetchStocksList } from '@/api/stocks';
import Pagination from '@/components/pagination';
import StockTableItem from '@/components/stocksTableItem';
import { StockListItem } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

const HomePage = () => {
    const [page, setPage] = useState(1);
    const [stockList, setStockList] = useState<StockListItem[]>([]);
    const { data, error, isLoading } = useQuery({
        queryKey: ["stockList"],
        queryFn: async () => fetchStocksList()
    })
    useEffect(() => {
        if (data) {
            setStockList(data.slice((page - 1) * 20, page * 20));
        }
    }, [data, page])
    return (
        <div className='bg-white rounded-md p-12 h-fit'>
            {isLoading ? <BeatLoader color='purple' className='text-center' /> :
                error ? <div className="text-red-500">Error fetching data</div>
                    :
                    <>
                        <table className='w-full'>
                            <tbody>
                                {stockList.map((stock, i) => (
                                    <StockTableItem key={i} stock={stock} />
                                ))}
                            </tbody>
                        </table>
                        <Pagination page={page} setPage={setPage} maxPage={Math.ceil((data?.length ?? 0) / 20)} />
                    </>
            }
        </div>
    );
};

export default HomePage;