// React
import { useEffect, useRef } from "react";

// Packages
import ClipboardJS from "clipboard";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

// Assets
import clipboardIcon from "../../../assets/images/clipboard.svg";
import clipboardCheckIcon from "../../../assets/images/clipboard-check.svg";

const Clipboard = ({ title, valueToCopy }) => {
    const copyButton = useRef(null);

    useEffect(() => {
        new bootstrap.Tooltip(copyButton.current);

        const clipboard = new ClipboardJS(".copyButton"); 
        clipboard.on("success", clipboardSuccess);
    }, []);

    const clipboardSuccess = (e) => {
        const buttonIcon = e.trigger.children[0].classList;
        buttonIcon.replace("bi-clipboard", "bi-clipboard-check");
        setTimeout(() => {
            buttonIcon.replace("bi-clipboard-check", "bi-clipboard");
        }, 1000);
    } 

    return (
        <div className="d-inline-flex justify-content-center align-items-center bg-light p-3 rounded-3">
            <p className="m-0 me-1" style={{ fontSize: ".8rem" }}>
                { title + ": " + valueToCopy}
            </p>
            <button
                type="button"
                ref={copyButton}
                data-clipboard-text={valueToCopy}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Copy"
                className="bg-transparent border-0 d-inline-flex align-items-center copyButton"
            >
                <i className="bi bi-clipboard"></i>
            </button>
        </div>
    );
}

export default Clipboard;