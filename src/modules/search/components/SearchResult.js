import Track from "../../track/components/Track";

const SearchResult = ({ results }) => {
    // console.log(results);

    return (
        results.map((result) => {
            return <Track
                key={result.id}
                author={result.artists[0].name}
                name={result.name}
                thumbnail={result.album.images[0].url}
            />
        })
    );
}

export default SearchResult;