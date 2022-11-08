import Track from "../../track/components/Track";

const SearchResult = ({ results }) => {
    if(!results || results.length == 0){
        return (
            <h2 className="fs-4 fw-light text-center">Sin resultados</h2>
        );
    }

    return (
        <div className="search-result-wrapper">
            {results.map((result) => {
                // console.log(result);
                return <Track
                    key={result.id}
                    thumbnail={result.album.images[0].url}
                    name={result.name}
                    author={result.artists[0].name}
                    genres={result.genres}
                    trackUri={result.uri}
                />
            })}
        </div>
    );
}

export default SearchResult;