import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { getAllProducts } from "../../../Redux/Actions"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../Metrics.scss'

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

export function StockManagement() {

  const products = useSelector(store => store.products)
  const dispatch = useDispatch()
  let noStock = products.filter(p => p.stock <= 0)
  let lowerThan10 = products.filter(p => p.stock > 0 && p.stock <= 10)
  let lowerThan50 = products.filter(p => p.stock > 10 && p.stock < 50)


  //PIE CHART
  const data = {
    labels: ['No stock', 'Lower than 10', 'Lower than 50'],
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


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // eslint-disable-next-line 
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
  },
    // eslint-disable-next-line 
    [])


  return <div className="container datas">
    <h1 className="mt-5">Stock Management</h1>
    {/* <hr /> */}

    <div className="lower-10">
      <table className="table is-bordered is-narrow shadow">
        <thead>
          <tr>
            <th><abbr title="ID">ID</abbr></th>
            <th>Product</th>
            <th><abbr title="Stock">Stock</abbr></th>
            <th><abbr title="Action">Action</abbr></th>
          </tr>
        </thead>
        <tbody>
          {noStock && noStock.map((p, i) => {
            return <tr key={i} className='no-stock'>
              <th style={{ color: "white" }}>{p.id}</th>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td>
                <NavLink className='link' to={`/products/edit/${p.id}`}>Edit</NavLink>
              </td>
            </tr>
          })}

          {lowerThan10 && lowerThan10.map((p, i) => {
            return <tr key={i} className='lower-than-10'>
              <th style={{ color: "white" }}>{p.id}</th>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td><NavLink className='link' to={`/products/edit/${p.id}`}>Edit</NavLink></td>
            </tr>
          })}
          {lowerThan50 && lowerThan50.map((p, i) => {
            return <tr key={i}  className='lower-than-50'>
              <th style={{ color: "white" }}>{p.id}</th>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td><NavLink className='link' to={`/products/edit/${p.id}`}>Edit</NavLink></td>
            </tr>
          })}

          {noStock.length === 0 && lowerThan10.length === 0 && lowerThan50.length === 0 &&
            <tr className=''>
              <th>-</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          }
        </tbody>
      </table>

      <div className="circular-chart">
        <Pie data={data} />
      </div>
    </div>

  </div>
}