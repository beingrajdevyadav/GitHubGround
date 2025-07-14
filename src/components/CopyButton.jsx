import React, { useState } from 'react'

const CopyButton = ({ cloneUrl, txt }) => {
    const [copied, setCopied] = useState(false);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(cloneUrl);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 5000)
        } catch (error) {
            console.log("Failed To Copy", error);
        }
    }
    return (
        <button onClick={handleCopy}>{copied? "Copied" : txt}</button>
    )
}

export default CopyButton