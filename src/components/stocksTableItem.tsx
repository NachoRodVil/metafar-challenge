import { StockListItem } from "@/types/types";
import Link from "next/link";

const StockTableItem = ({ stock }: { stock: StockListItem }) =>
    <tr key={stock.symbol} className='w-full align-middle text-center flex flex-row py-3 border-b-2 border-grey'>
        <td className="basis-2/12"><Link className="rounded-full bg-deep-purple hover:bg-purple text-white px-2 py-1" href={'/stock/' + stock.symbol}>{stock.symbol}</Link></td>
        <td className="basis-6/12">{stock.name}</td>
        <td className="basis-2/12">{stock.currency}</td>
        <td className="basis-2/12">{stock.type}</td>
    </tr>

export default StockTableItem;