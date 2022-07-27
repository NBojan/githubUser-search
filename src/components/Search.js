import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useGlobalContext } from '../context';

const Search = () => {
    const {requests, errMsg, getData, loading} = useGlobalContext();
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(requests === 0 || loading) return;
        else {
            getData(searchTerm);
        }
    }

    return (
        <section className="searchCard positionR mb-32">
            {errMsg.show && <p className="capitalize fw-600 errC mb-12">{errMsg.msg}</p>}
            <div className="d-flex space-between align-center">
                <form className='searchForm d-flex align-center' onSubmit={handleSubmit}>
                    <label htmlFor='search' className='d-flex'><MdSearch /></label>
                    <input type="text" placeholder='Enter Github User' id="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} required/>
                    <button className='btn btn-m btn-prim'>{loading ? "Loading..." : "Search"}</button>
                </form>

                <div className="requests">
                    Requests : {requests} / 60
                </div>
            </div>
        </section>
        
    );
}
 
export default Search;