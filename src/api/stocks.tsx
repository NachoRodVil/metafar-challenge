import { intervalValues, StockListItem, timeOption } from "@/types/types";
import axios from "axios";

export async function fetchStocksList() : Promise<StockListItem[]> {
    const response = await axios.get("https://api.twelvedata.com/stocks?exchange=NASDAQ");
    return response.data.data;
}

export async function fetchStockData(stock: string, interval: intervalValues, timeOption: timeOption, startTime?: Date, endTime?: Date) {
    if (timeOption == "rt") {
        const response = await axios.get(`https://api.twelvedata.com/time_series?symbol=${stock}&order=ASC&date=${new Date().toLocaleDateString()}&interval=${interval + "min"}&apikey=${process.env.TWELVEDATA_API_KEY}`);
        return response.data.values[0];
    } else {
        const response = await axios.get(`https://api.twelvedata.com/time_series?symbol=${stock}&order=ASC&interval=${interval + "min"}&start_date=${startTime?.toISOString()}&end_date=${endTime?.toISOString()}&apikey=${process.env.TWELVEDATA_API_KEY}`);
        return response.data.values;
    }
}