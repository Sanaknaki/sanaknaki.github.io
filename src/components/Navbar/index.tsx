import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className={" z-10 w-full flex justify-between absolute top-0 py-4 px-6 sm:px-28 text-white"}>

            <div className={"flex flex-row items-center gap-2"}>
                <p className={"text-xl font-semibold"}>
                    Ali Sanaknaki
                </p>

                <div className={"h-full w-[1px] bg-white hidden sm:block"} />

                <p className={"text-sm font-medium hidden sm:block"}>
                    Your next developer
                </p>
            </div>

            <div className={"flex items-center gap-6"}>
                <FaGithub className={"cursor-pointer hover:opacity-50"} onClick={() => window.open("https://github.com/sanaknaki", "_blank")} size={24}/>

                <FaLinkedin className={"cursor-pointer hover:opacity-50"} onClick={() => window.open("https://www.linkedin.com/in/alisanaknaki/", "_blank")} size={24}/>
            </div>
        </div>
    )
}

export default Navbar;