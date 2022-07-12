import './Paginator.scss'

export function Paginator({ postsPerPage, totalPosts, paginate, currentPage }) {
    const pageNumbers = []

    let maxPags = Math.ceil(totalPosts / postsPerPage)

    for (let i = 1; i <= maxPags; i++) {
        pageNumbers.push(i)
    }

    function up() {
        // console.log('maxpag', maxPags)
        if (currentPage < maxPags)
            paginate(currentPage + 1)
    }

    function back() {
        if (currentPage > 1)
            paginate(currentPage - 1)
    }


    return <nav className="pagination">
        {/* <ul> */}
        <button className='paginatorMove' onClick={back}>
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        {pageNumbers.map(number => (
            <div key={number.toString()}>

                <span key={number.toString()} className={currentPage === number ? 'active-pag' : 'inactive'}  >
                    <button className={currentPage === number ? 'active-pag' : 'pags inactive'} onClick={() => { paginate(number) }} key={number.toString()} >
                        {number}
                    </button>
                </span>
            </div>))}
        <button className='paginatorMove' onClick={up} key='forward'>
            <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        {/* </ul> */}
    </nav>
}