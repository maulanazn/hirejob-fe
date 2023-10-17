import './Pagination.css';

const Pagination = ({onNext,onPrev,totalPage,currentPage}) => {
    return (
        <div id="pagination">
            <div className="pagination mb-5 d-flex">
                <button type="button" className="btn bg-yellow mx-2" onClick={onPrev} >Prev</button>
                    <span>{currentPage}</span>
                <button type="button" className="btn bg-yellow mx-2" onClick={onNext}>Next</button>
            </div>
        </div>

    );
};

export default Pagination;