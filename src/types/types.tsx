export interface StockListItem {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
    figi_code: string;
}

export interface StockData {
    datetime: Date;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
}

export interface ChartProps {
    symbol: string;
    stockData: StockData[];
}
export interface PaginationProps {
    page: number;
    maxPage: number;
    setPage: (page: number) => void;
}

export type intervalValues = 1 | 5 | 15

export type timeOption = "rt" | "hist"