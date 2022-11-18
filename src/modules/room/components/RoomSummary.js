// React
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import Clipboard from "../../clipboard/components/Clipboard";
// import QRCode from "react-qr-code";
import { QRCodeCanvas } from 'qrcode.react';
import { generateRoomUrl } from "../../helpers/ManageRoomUrl";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

const RoomSummary = ({ roomData, genresSelection }) => {
    const openRoomBtn = useRef(null);
    const fullUrl = generateRoomUrl(roomData.body._id, true);
    const partUrl = generateRoomUrl(roomData.body._id);

    useEffect(() => {
        new bootstrap.Tooltip(openRoomBtn.current);
    });

    const handleOpenRoom = () => {
        const tooltip = bootstrap.Tooltip.getInstance(openRoomBtn.current);
        tooltip.hide();
    }

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("roomQr");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `room_${roomData.body._id}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className="qr-code d-block text-center">
            <h2 className="display-6 mb-4">
                { roomData.body ? "Your new room" : roomData.message }
            </h2>
            {
                roomData.body &&
                <div className="d-flex flex-column align-items-center">
                    <p className="mb-1">{roomData.body.name}</p>
                    <p>Genres: {genresSelection.join(", ").trim()}</p>
                    <div className="qrcode mb-3" onClick={downloadQRCode}>
                        <QRCodeCanvas value={fullUrl} size={256} id="roomQr"/>
                    </div>
                    <Clipboard title="Room id" valueToCopy={roomData.body._id}/>
                    <div className="mt-3 d-flex justify-content-center align-items-center bg-light rounded-3 pe-3">
                        <Clipboard title="Room url" valueToCopy={fullUrl}/>
                        <Link
                            to={partUrl}
                            ref={openRoomBtn}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Go to the room"
                            onClick={handleOpenRoom}
                            id="openRoomBtn"
                            className="d-flex justify-content-center align-items-center text-black text-decoration-none"
                        >
                            <i className="bi bi-box-arrow-up-right"></i>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default RoomSummary;