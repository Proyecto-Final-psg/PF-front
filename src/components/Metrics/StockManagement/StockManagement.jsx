import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { getAllProducts } from "../../../Redux/Actions"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './StockManagement.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { aosEffectConfig } from "../Metrics";

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

  useEffect(() => {
    Aos.init({ duration: aosEffectConfig, once: true })
  }, [])

  const products = useSelector(store => store.products)
  const dispatch = useDispatch()
  let noStock = products.filter(p => p.stock <= 0)
  let lowerThan10 = products.filter(p => p.stock > 0 && p.stock <= 10)
  let lowerThan50 = products.filter(p => p.stock > 10 && p.stock < 50)
  let stock = products.length;

  if (lowerThan10)
    stock = stock - lowerThan10.length

  if (lowerThan50)
    stock = stock - lowerThan50.length

  const data = {
    labels: ['No stock', 'Lower than 10', 'Lower than 50', 'All Products'],
    datasets: [
      {
        label: [noStock.length, lowerThan10.length, lowerThan50.length, stock],
        data: [noStock.length, lowerThan10.length, lowerThan50.length, stock],
        backgroundColor: [
          'rgb(255, 109, 109)',
          '#FFF3CD',
          'rgb(108, 177, 255)',
          'green'
        ],
        borderColor: [
          '#d62506',
          '#f9d66b',
          '#2041a3',
          'green'
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    dispatch(getAllProducts())
  },
    // eslint-disable-next-line 
    [])


  return (
    <div className="container datas">

      <h1 className="mt-5 custom-title">
        Stock Management
        <span id="stock" className="iconMenu material-symbols-outlined">inventory</span>
      </h1>
      <span>Stock with low quantity warnings</span>
      <div className="cmp-stockManagement-container">
        <div className="stock-mgm">

          <table className="table is-narrow shadow" data-aos='fade-right'>
            <thead>
              <tr>
                <th><abbr title="Product name">Product</abbr></th>
                <th><abbr title="Stock">Stock</abbr></th>
                <th><abbr title="Action">Edit</abbr></th>
              </tr>
            </thead>
            <tbody>
              {noStock && noStock.map((p, i) => {
                return <tr key={i} className='no-stock'>
                  <td>{p.name}</td>
                  <td>{p.stock}</td>
                  <td id='edit-btn'>
                    <NavLink className='link' to={`/products/edit/${p.id}`}>
                      <span className="material-symbols-outlined">edit_note</span>
                    </NavLink>
                  </td>
                </tr>
              })}

              {lowerThan10 && lowerThan10.map((p, i) => {
                return <tr key={i} className='lower-than-10'>
                  <td>{p.name}</td>
                  <td>{p.stock}</td>
                  <td id='edit-btn'><NavLink className='link' to={`/products/edit/${p.id}`}>
                    <span className="material-symbols-outlined">edit_note</span>
                  </NavLink></td>
                </tr>
              })}
              {lowerThan50 && lowerThan50.map((p, i) => {
                return <tr key={i} className='lower-than-50'>
                  <td>{p.name}</td>
                  <td>{p.stock}</td>
                  <td id='edit-btn'><NavLink className='link' to={`/products/edit/${p.id}`}>
                    <span className="material-symbols-outlined">edit_note</span>
                  </NavLink></td>
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

          <div className="circular-chart" data-aos='fade-left' data-aos-delay="600">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>)
}