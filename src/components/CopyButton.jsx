import React, { useState } from 'react'
import { infoToast } from '../toasts/toasts';

const CopyButton = ({ cloneUrl, txt }) => {
    const [copied, setCopied] = useState(false);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(cloneUrl);
            setCopied(true);
            infoToast("Copied Clone URL!");
            
            setTimeout(() => {
                setCopied(false);
            }, 5000)
        } catch (error) {
            console.log("Failed To Copy", error);
        }
    }
    return (
        <button onClick={handleCopy}>{copied ? "Copied" : txt}</button>
    )
}

export default CopyButton