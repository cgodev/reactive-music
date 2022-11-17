// React
import { useEffect, useRef } from "react";

// Packages
import ClipboardJS from "clipboard";

// Assets
import clipboardIcon from "../../../assets/images/clipboard.svg";
import clipboardCheckIcon from "../../../assets/images/clipboard-check.svg";

const Clipboard = ({ valueToCopy }) => {
    const copyButton = useRef(null);

    useEffect(() => {
        const clipboard = new ClipboardJS(".copyButton"); 
        clipboard.on("success", clipboardSuccess);
    }, []);

    const clipboardSuccess = (e) => {
        const buttonIcon = e.trigger.children[0];
        buttonIcon.src = clipboardCheckIcon;
        setTimeout(() => {
            buttonIcon.src = clipboardIcon
        }, 1000);
    } 

    return (
        <div className="d-flex justify-content-center align-items-center">
            <span style={{ "userSelect": "none" }}>
                { valueToCopy }
            </span>
            <button
                type="button"
                data-clipboard-text={valueToCopy}
                className="bg-transparent border-0 d-inline-flex align-items-center copyButton"
            >
                <img src={clipboardIcon} alt="Copy"/>
            </button>
        </div>
    );
}

export default Clipboard;