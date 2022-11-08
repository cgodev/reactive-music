import { useState } from "react";

const Search = ({ handler }) => {
    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        
        const { value } = e.target;
        setSearch(value);
        handler(value);
    }

    return (
        <div className="search-wrapper bg-dark position-sticky top-0 pb-3">
            <form className="d-flex">
                <input
                    type="text"
                    name="criteria"
                    value={search}
                    placeholder="Search and play your favorite music here"
                    className="form-control me-4"
                    onChange={handleInput}
                />
                {/* <input
                    type="submit"
                    value="Buscar"
                    className="btn btn-secondary"
                /> */}
            </form>
        </div>
    );
}

export default Search;