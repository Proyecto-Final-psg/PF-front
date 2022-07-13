import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getAllProducts } from "../../Redux/Actions"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,  ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Pie } from 'react-chartjs-2';
import './Metrics.scss'

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export function Metrics() {

    const products = useSelector(store => store.products)
    const dispatch = useDispatch()
    let noStock = products.filter(p => p.stock <= 0)
    let lowerThan10 = products.filter(p => p.stock < 10 && p.stock > 0)
    let lowerThan50 = products.filter(p => p.stock < 50 && p.stock > 10)


    //PIE CHART
    const data = {
        labels: ['No stock','Lower than 10', 'Lower than 50'],
        datasets: [
            {
                label: [noStock.length, lowerThan10.length, lowerThan50.length],
                data: [noStock.length, lowerThan10.length, lowerThan50.length],
                backgroundColor: [
                    'red',
                    '#FFF3CD',
                    'blue'

                ],
                borderColor: [
                    '#d62506',
                    '#f9d66b',
                    '#2041a3'

                ],
                borderWidth: 1,
            },
        ],
    };

    // YEAR CHART
    const options = {
        responsive: true,
        interaction: {
          mode: 'index' /*as const*/,
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Sells of 2022',
          },
        },
        scales: {
          y: {
            type: 'linear' /*as const*/,
            display: true,
            position: 'left' /*as const*/,
          },
          y1: {
            type: 'linear' /*as const*/,
            display: true,
            position: 'right' /*as const*/,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data2 = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: products.map(p => p.stock),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
          },
          {
            label: 'Dataset 2',
            data: products.map(p => p.name),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
          },
        ],
      };
      


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    return <div className="container datas">
        <h1 className="mt-5">Metrics</h1>
        <hr />
        <div className="lower-10">

            <table class="table">
                <thead>
                    <tr style={{border:"1px solid black"}}>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                {noStock && noStock.map(p => {
                        return <tr className={p.stock < 5 ? 'table-danger' : 'table-info'}>
                            <th scope="row">{p.id}</th>
                            <td>{p.name}</td>
                            <td>{p.stock}</td>
                            <td>
                                <Link to={`/products/edit/${p.id}`}>Edit</Link>
                                </td>
                        </tr>
                    })}

                    {lowerThan10 && lowerThan10.map(p => {
                        return <tr className={p.stock < 5 ? 'table-warning' : 'table-info'}>
                            <th scope="row">{p.id}</th>
                            <td>{p.name}</td>
                            <td>{p.stock}</td>
                            <td><Link to={`/products/edit/${p.id}`}>Edit</Link></td>
                        </tr>
                    })}
                    {lowerThan50 && lowerThan50.map(p => {
                        return <tr className={p.stock < 50 && p.stock > 10 ? 'table-info' : 'table-info'}>
                            <th scope="row">{p.id}</th>
                            <td>{p.name}</td>
                            <td>{p.stock}</td>
                            <td><Link to={`/products/edit/${p.id}`}>Edit</Link></td>
                        </tr>
                    })}


                </tbody>
            </table>
            <div className="circular-chart">
                <Pie data={data} />
            </div>
        </div>
        <br /><br />
        <div className="sells-year">
            <Line options={options} data={data2} />;
        </div>
    </div>
}