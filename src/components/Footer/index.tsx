import { FaGithub, FaTiktok, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => (
    <div className={"bg-slate-800 text-white py-6 px-8 sm:px-28 flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row justify-between"}>
        <p className={"text-base self-center"}>Made with ⌨️ by Ali Sanaknaki</p>


        <div className={"flex flex-col gap-2"}>
            <p className={"text-base font-semibold"}>
                Contact Me
            </p>

            {/* LinkedIN Link */}
            <div className={"flex gap-1 items-center cursor-pointer hover:opacity-50"} onClick={() => window.open("https://www.linkedin.com/in/alisanaknaki/", "_blank")}>
                <FaLinkedin size={14} />

                <p className={"text-base"}>
                    LinkedIn
                </p>
            </div>

            {/* GitHub Link */}
            <div className={"flex gap-1 items-center cursor-pointer hover:opacity-50"} onClick={() => window.open("https://github.com/sanaknaki", "_blank")}>
                <FaGithub size={14} />

                <p className={"text-base"}>
                    GitHub
                </p>
            </div>

            {/* Email Link */}
            <div className={"flex gap-1 items-center cursor-pointer hover:opacity-50"} onClick={() => {
                const email = "sanaknaki.ali@gmail.com";
                const subject = "We're Interested!";
                const body = "Ali,";

                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Open the mailto link in a new tab or window
                window.location.href = mailtoLink;
            }}>
                <BiLogoGmail size={14} />

                <p className={"text-base"}>
                    Email
                </p>
            </div>

            {/* TikTok Link */}
            <div className={"flex gap-1 items-center cursor-pointer hover:opacity-50"} onClick={() => window.open("https://tiktok.com/@fullmemorycard", "_blank")}>
                <FaTiktok size={14} />

                <p className={"text-base"}>
                    TikTok
                </p>
            </div>
        </div>
    </div>
);

export default Footer;