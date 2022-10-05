import AddToPlaylist from "./AddToPlaylist";

const Track = ({ thumbnail = "/assets/images/dummytrack.jpg", name = "no name", author = "no author", genre = "no genre", type, trackUri = "" }) => {
    return <div className=" text-decoration-none text-black">
        <div className="card bg-dark border border-light mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ thumbnail } className="img-fluid rounded-start" alt="{{name}}"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-light">{ name }</h5>
                        <p className="card-text text-light">Author: { author }</p>
                        <p className="card-text text-light">
                            <small className="badge bg-primary">Genre: { genre }</small>
                        </p>
                        <AddToPlaylist trackUri={trackUri}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Track;