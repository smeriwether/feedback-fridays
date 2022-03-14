import { Link } from "react-router-dom";
import { useState } from 'react';

function Help() {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(document.location.href);
    setCopiedToClipboard(true);
  };

  return (
    <>
      <div className="text-sm italic text-gray-600">
        <p>
          Pro Tip: You can share the URL with your team so they can see the lineup for this week's Feedback Friday.
        </p>

        <button className="mt-4 py-1 px-6 text-black border border-gray-400 hover:bg-gray-600 hover:text-white" onClick={copyToClipboard}>
          Copy URL to Clipboard
        </button>

        {
          copiedToClipboard && (
            <span className="pl-2 text-green-600">
              Done!
            </span>
          )
        }
      </div>

      <div className="mt-8">
        <Link to="/" className="py-1 px-6 border border-gray-400 hover:bg-gray-600 hover:text-white">
          Start over
        </Link>
    </div>
    </>
  );
}

export default Help;
