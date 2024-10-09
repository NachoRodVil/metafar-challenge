import { ChartProps, StockData } from "@/types/types";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
require('highcharts/indicators/indicators')(Highcharts)
require('highcharts/indicators/pivot-points')(Highcharts)
require('highcharts/indicators/macd')(Highcharts)
require('highcharts/modules/exporting')(Highcharts)

export const Chart: React.FC<ChartProps> = ({ stockData, symbol }) => {
    const chartData = stockData.map((stock) => [stock.datetime, parseFloat(stock.open)])
    const stockOptions = {
        yAxis: {
            title: {
                text: symbol + ' Open Price'
            }
        },
        series: [{
            data: chartData,
            name: symbol + " Open Price",
        }],
        xAxis: {
            labels: {
                enabled: false
            }
        },
        title: {
            text: symbol
        }
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={stockOptions}
            />
        </div>
    )

}
