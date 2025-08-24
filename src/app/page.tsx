"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const Home = () => {
  const [hoveringIcon, setHoveringIcon] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center cursor-default">
      {/* Left Panel / Top Panel*/}
      <div className="absolute top-2 md:top-0 left-0 md:left-2 w-full md:w-fit h-fit md:h-full flex gap-5 flex-row md:flex-col items-center justify-center">
        <Image
          src="/everydayworks.svg"
          alt="Everyday Works"
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() =>
            setHoveringIcon(
              "<span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Everyday Works</span>, Design Portfolio."
            )
          }
          onClick={() => {
            if (isMobile) {
              if (hoveringIcon && hoveringIcon.includes("Everyday Works")) {
                window.open("https://everyday-works.com/", "_blank");
                setHoveringIcon("");
              }
            } else {
              setHoveringIcon(
                "<span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Everyday Works</span>, Design Portfolio."
              );
            }
          }}
          onMouseLeave={() => setHoveringIcon("")}
        />
      </div>
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
      <div className="absolute bottom-2 md:bottom-0 right-0 md:right-2 w-full md:w-fit h-fit md:h-full flex gap-5 flex-row md:flex-col items-center justify-center">
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() =>
            setHoveringIcon(
              "Let's <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Link</span>edIn."
            )
          }
          onClick={() => {
            if (isMobile) {
              if (hoveringIcon && hoveringIcon.includes("Link")) {
                window.open(
                  "https://www.linkedin.com/in/alisanaknaki/",
                  "_blank"
                );
                setHoveringIcon("");
              }
            } else {
              setHoveringIcon(
                "Let's <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>Link</span>edIn."
              );
            }
          }}
          onMouseLeave={() => setHoveringIcon("")}
        />
        <Image
          src="/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() =>
            setHoveringIcon(
              "Pushing <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>P</span>Rs."
            )
          }
          onClick={() => {
            if (isMobile) {
              if (hoveringIcon && hoveringIcon.includes("Pushing")) {
                window.open("https://github.com/sanaknaki", "_blank");
                setHoveringIcon("");
              }
            } else {
              setHoveringIcon(
                "Pushing <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>P</span>Rs."
              );
            }
          }}
          onMouseLeave={() => setHoveringIcon("")}
        />
        <Image
          src="/inbox.svg"
          alt="Inbox"
          width={20}
          height={20}
          className="cursor-pointer"
          onMouseEnter={() =>
            setHoveringIcon(
              "Hit my <span style='background-color: #1E42F6; color: white; padding: 0 4px;'>line.</span>"
            )
          }
          onClick={() => {
            if (isMobile) {
              if (hoveringIcon && hoveringIcon.includes("Hit my")) {
                const link = document.createElement("a");
                link.href = "mailto:sanaknaki.ali@gmail.com";
                link.click();
                setHoveringIcon("");
              }
            } else {
              const link = document.createElement("a");
              link.href = "mailto:sanaknaki.ali@gmail.com";
              link.click();
            }
          }}
          onMouseLeave={() => setHoveringIcon("")}
        />
      </div>
    </div>
  );
};

export default Home;
