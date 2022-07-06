import './grid.scss'
import Card from "../Card/Card";

export function Grid(){
    return <div className="grid">
        <div className="filters">
            <span>filters</span>
            <form className='form'>
                <label>Name</label><br />
                <input type="text" name="name" id="name" placeholder='Enter name product' /><br /><br />
                
                <label>Category</label><br />
                <select name="category" id="">
                    <option value="all">All categories</option>
                </select>
                <br /><br />

                <input type="submit" value="Search" />

                
            </form>
        </div>

        <div className="cards">
            <Card />
        </div>
    </div>
}