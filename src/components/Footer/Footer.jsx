import './footer.scss'
import like from '../../assets/like.png'
import logo from '../../assets/logo.png'
function Footer() {
    return <div className="">
        <div className="foot">


            <div className='footer-cmp-group'>
                <div className='footer-cmp'>
                    <span className="material-symbols-outlined">mail</span>
                    <span>weedical.shop@gmail.com</span>
                </div>

                <div className="footer-cmp">
                    <img className='footer-icon' src={logo} alt="logo_icon" />
                    <span>Application developed by PSG</span>
                </div>

                <div className='footer-cmp'>
                    <img className='footer-icon' src={like} alt="like_icon" />
                    <span>@weedical</span>
                </div>
            </div>
        </div>
    </div>
}

export default Footer