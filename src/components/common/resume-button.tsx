"use client";

import { useState } from "react";
import { LuDownload, LuCheck } from "react-icons/lu";
import { Button } from "../ui/button";

export function ResumeButton() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/forever-ephraim.pdf";
    link.download = "Forever-Ephraim-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <Button size="lg" onClick={handleDownload} className="cursor-pointer">
      {downloaded ? (
        <>
          <LuCheck className="mr-2 h-4 w-4" />
          <span>Downloaded!</span>
        </>
      ) : (
        <>
          <LuDownload className="mr-2 h-4 w-4" />
          <span>Download Resume</span>
        </>
      )}
    </Button>
  );
}
