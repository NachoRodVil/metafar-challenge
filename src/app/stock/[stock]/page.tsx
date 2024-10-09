"use client"
import { fetchStockData } from "@/api/stocks"
import { Chart } from "@/components/chart"
import { intervalValues, StockData, timeOption } from "@/types/types"
import { useQueries, useQuery } from "@tanstack/react-query"
import { use, useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"

function SingleStockView({ params }: { params: { stock: string } }) {
    const [interval, setInterval] = useState<intervalValues>(1)
    const [timeOption, setTimeOption] = useState<timeOption>()
    const [startTime, setStartTime] = useState<Date>()
    const [endTime, setEndTime] = useState<Date>()
    const [stockData, setStockData] = useState<StockData[]>([])
    const [refetching, setRefetching] = useState(false)
    const { data, isLoading, refetch, error } = useQuery({
        queryKey: ["stockData", params.stock, interval, timeOption, startTime, endTime],
        queryFn: async () => await fetchStockData(params.stock, interval, timeOption || "rt", startTime, endTime),
        refetchInterval: timeOption == "rt" ? 60000 * interval : false,
        enabled: refetching
    })

    useEffect(() => {
        if (data) {
            if(timeOption == "rt") {
                setStockData((prevData) => [...prevData, data])
            }
            else{
                setStockData(data)
            }
        }
    }, [data])
    const handleChange = (value: any, setter: (value: any) => void) => {
        setter(value)
        setRefetching(false)
    }
    return (
        <div className='bg-white rounded-md p-12'>
            <h1 className="text-3xl">{params.stock}</h1>
            <div>
                <div className="flex">
                    <div className="mr-4">
                        <input type="radio" value="rt" name="real-time" checked={timeOption == "rt"} onChange={(e) => handleChange(e.target.value as timeOption, setTimeOption)} /> Real Time
                    </div>
                    <div>
                        <input type="radio" value="hist" name="historic" checked={timeOption == "hist"} onChange={(e) => handleChange(e.target.value as timeOption, setTimeOption)} /> Historic
                    </div>
                </div>
                {timeOption == "hist" && (
                    <div className="flex mt-4">
                        <div className='mr-4'>
                            <label>Start Time</label>
                            <input className=" ml-2 rounded-full border-2 px-2 py-1 focus:outline-light-purple" type='datetime-local' onChange={(e) => handleChange(new Date(e.target.value), setStartTime)} />
                        </div>
                        <div className=''>
                            <label>End Time</label>
                            <input className=" ml-2 rounded-full border-2 px-2 py-1 focus:outline-light-purple" type='datetime-local' onChange={(e) => handleChange(new Date(e.target.value), setEndTime)} />
                        </div>
                    </div>
                )}
                <div className='flex mt-4'>
                    <div>
                        <label>Interval</label>
                        <select className=" ml-2 rounded-full border-2 px-2 py-1 focus:outline-light-purple" value={interval} onChange={(e) => handleChange(parseInt(e.target.value) as intervalValues, setInterval)}>
                            <option value={1}>1min</option>
                            <option value={5}>5min</option>
                            <option value={15}>15min</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        setStockData([])
                        if (timeOption == "rt") {
                            setRefetching(true)
                        }
                        refetch()
                    }} className="rounded-full text-white bg-purple hover:bg-deep-purple px-2 py-1 mt-4 disabled:bg-gray-500" disabled={!timeOption || refetching || (timeOption == "hist" && (!startTime || !endTime)) || isLoading}>Get Data</button>
                </div>
            </div>
            {isLoading ? <BeatLoader color='purple' className='text-center' /> : error ? <div className="text-red-500">Error fetching data</div> : null}
            {
                stockData.length ? (
                <div className="my-6">
                <Chart stockData={stockData} symbol={params.stock}/>
                </div>
                ) : null
            }
        </div>
    )
}

export default SingleStockView