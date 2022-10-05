import Track from "../../track/components/Track";

const SearchResult = ({ results }) => {
    // console.log(results);

    return (
        <div className="search-result-wrapper">
            {results.map((result) => {
                // console.log(result);
                return <Track
                    key={result.id}
                    author={result.artists[0].name}
                    name={result.name}
                    thumbnail={result.album.images[0].url}
                    trackUri={result.uri}
                />
            })}
        </div>
    );
}

export default SearchResult;