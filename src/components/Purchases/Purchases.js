import './Purchases.scss'
const Purchases = ({ data }) => {
    return (
        <div className='cmp-purchases-container'>
            {console.log(data.arrayItems[0].img)}
            <div className="card container-card">



                <div className="media-left">
                    {/* <img className='cmp-purchases-img' src={data.arrayItems[0].img} alt="Placeholder image" /> */}
                </div>

                <div className="media-content">
                    <p className="subtitle is-6">{data.user_email}</p>
                </div>

                <div className="content ">
                    <span class="tag is-success is-light">Success</span>
                </div>





            </div>
        </div>
    )
}
export default Purchases;