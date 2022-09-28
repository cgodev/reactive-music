import AddToPlaylist from "./AddToPlaylist";

const Track = ({ thumbnail = "/assets/images/dummytrack.jpg", name = "no name", author = "no author", genre = "no genre", type, trackUri = "" }) => {
    return <a href="#" className="text-decoration-none text-black">
        <div className="card mb-3" style={{ "maxWidth": "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ thumbnail } className="img-fluid rounded-start" alt="Track image"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">Author: { author }</p>
                        <p className="card-text">
                            <small className="badge bg-primary">Genre: { genre }</small>
                        </p>
                        <AddToPlaylist trackUri={trackUri}/>
                    </div>
                </div>
            </div>
        </div>
    </a>
}

export default Track;