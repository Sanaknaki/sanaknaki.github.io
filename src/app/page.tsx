"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
const Home = () => {
  const [hoveringIcon, setHoveringIcon] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [lastTappedIcon, setLastTappedIcon] = useState<string>("");

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth < 768 || "ontouchstart" in window;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center cursor-default">
      {!hoveringIcon ? (
        <p className="text-2xl md:text-4xl font-mnews">
          Ali Sanaknaki,{" "}
          <span className="bg-[#1E42F6] text-white">Design Engine</span>er.
        </p>
      ) : (
        <p
          className="text-2xl md:text-4xl font-mnews"
          dangerouslySetInnerHTML={{ __html: hoveringIcon }}
        />
      )}
      {/* Right Panel / Bottom Panel*/}
      <div className="absolute bottom-4 md:bottom-0 right-0 md:right-4 w-full md:w-fit h-fit md:h-full flex gap-5 flex-row md:flex-col items-center justify-center">
        <Image
          src="/everydayworks.svg"
          alt="Everyday Works"
          width={20}
          height={20}
          className={`cursor-pointer ${
            lastTappedIcon !== "" && lastTappedIcon !== "everydayworks"
              ? "blur-sm transition-all duration-100 ease-in-out"
              : ""
          }`}
          onMouseEnter={() => {
            setHoveringIcon(
              "<span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Everyday Works</span>, Design Portfolio."
            );
            setLastTappedIcon("everydayworks");
          }}
          onClick={() => {
            if (isMobile) {
              if (lastTappedIcon === "everydayworks") {
                // Second tap - open link
                window.open("https://everyday-works.com/", "_blank");
                setLastTappedIcon("");
                setHoveringIcon("");
              } else {
                // First tap - show text and mark as tapped
                setLastTappedIcon("everydayworks");
                setHoveringIcon(
                  "<span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Everyday Works</span>, Design Portfolio."
                );
              }
            } else {
              window.open("https://everyday-works.com/", "_blank");
            }
          }}
          onMouseLeave={() => {
            setHoveringIcon("");
            setLastTappedIcon("");
          }}
        />
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={20}
          height={20}
          className={`cursor-pointer ${
            lastTappedIcon !== "" && lastTappedIcon !== "linkedin"
              ? "blur-sm transition-all duration-100 ease-in-out"
              : ""
          }`}
          onMouseEnter={() => {
            setHoveringIcon(
              "Let's <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Link</span>edIn."
            );
            setLastTappedIcon("linkedin");
          }}
          onClick={() => {
            if (isMobile) {
              if (lastTappedIcon === "linkedin") {
                // Second tap - open link
                window.open(
                  "https://www.linkedin.com/in/alisanaknaki/",
                  "_blank"
                );
                setLastTappedIcon("");
                setHoveringIcon("");
              } else {
                // First tap - show text and mark as tapped
                setLastTappedIcon("linkedin");
                setHoveringIcon(
                  "Let's <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Link</span>edIn."
                );
              }
            } else {
              window.open(
                "https://www.linkedin.com/in/alisanaknaki/",
                "_blank"
              );
            }
          }}
          onMouseLeave={() => {
            setHoveringIcon("");
            setLastTappedIcon("");
          }}
        />
        <Image
          src="/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className={`cursor-pointer ${
            lastTappedIcon !== "" && lastTappedIcon !== "github"
              ? "blur-sm transition-all duration-100 ease-in-out"
              : ""
          }`}
          onMouseEnter={() => {
            setHoveringIcon(
              "<span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Pushing P</span>Rs."
            );
            setLastTappedIcon("github");
          }}
          onClick={() => {
            if (isMobile) {
              if (lastTappedIcon === "github") {
                // Second tap - open link
                window.open("https://github.com/sanaknaki", "_blank");
                setLastTappedIcon("");
                setHoveringIcon("");
              } else {
                // First tap - show text and mark as tapped
                setLastTappedIcon("github");
                setHoveringIcon(
                  "Pushing <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>P</span>Rs."
                );
              }
            } else {
              window.open("https://github.com/sanaknaki", "_blank");
            }
          }}
          onMouseLeave={() => {
            setHoveringIcon("");
            setLastTappedIcon("");
          }}
        />
        <Image
          src="/inbox.svg"
          alt="Inbox"
          width={20}
          height={20}
          className={`cursor-pointer ${
            lastTappedIcon !== "" && lastTappedIcon !== "inbox"
              ? "blur-sm transition-all duration-100 ease-in-out"
              : ""
          }`}
          onMouseEnter={() => {
            setHoveringIcon(
              "Hit my <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>line.</span>"
            );
            setLastTappedIcon("inbox");
          }}
          onClick={() => {
            if (isMobile) {
              if (lastTappedIcon === "inbox") {
                // Second tap - open email
                const link = document.createElement("a");
                link.href = "mailto:sanaknaki.ali@gmail.com";
                link.click();
                setLastTappedIcon("");
                setHoveringIcon("");
              } else {
                // First tap - show text and mark as tapped
                setLastTappedIcon("inbox");
                setHoveringIcon(
                  "Hit my <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>line.</span>"
                );
              }
            } else {
              const link = document.createElement("a");
              link.href = "mailto:sanaknaki.ali@gmail.com";
              link.click();
            }
          }}
          onMouseLeave={() => {
            setHoveringIcon("");
            setLastTappedIcon("");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
