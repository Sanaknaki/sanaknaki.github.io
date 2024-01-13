import { LuCode2, LuSparkles, LuPackage, LuBriefcase } from "react-icons/lu";


const PriceSection = () => {
    return (
        <div className={"text-slate-800 w-full flex flex-col gap-4 items-center justify-center p-6 sm:flex-row sm:gap-28 sm:p-28"}>

            <div className={"p-6 rounded-md flex bg-white w-full flex-col gap-6 shadow max-w-96"}>
                <div className={"w-full flex justify-between"}>
                    <p className={"text-xl-2 font-bold"}>Enterprise</p>
                    <p className={"text-xl-2 font-bold text-gray-500"}>$0<span className={"text-lg font-medium"}>/forever</span></p>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <p className={"text-lg font-bold"}>Professional</p>

                    <div className={"flex w-full gap-4 items-center"}>
                        <div className={"p-2 text-white aspect-square rounded-full bg-slate-800"}>
                            <LuBriefcase size={16} />
                        </div>

                        <p className={"text-base"}><span className={"font-semibold"}>Perpetua (04/21 - Present)</span> — Senior Software Engineer</p>
                    </div>

                    <div className={"flex w-full gap-4 items-center"}>

                        <div className={"p-2 text-white aspect-square rounded-full bg-slate-800"}>
                            <LuBriefcase size={16} />
                        </div>

                        <p className={"text-base"}><span className={"font-semibold"}>Shoplogix (02/19 - 04/21)</span> — Frontend Engineer</p>
                    </div>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <p className={"text-lg font-bold"}>Projects</p>

                    <div className={"flex w-full gap-4 items-center"}>
                        <div className={"p-2 text-white aspect-square rounded-full bg-slate-800"}>
                            <LuSparkles size={16} />
                        </div>

                        <p className={"text-base"}><span className={"font-semibold"}>Lost & Found</span> — Website re-design</p>
                    </div>

                    <div className={"flex w-full gap-4 items-center"}>
                        <div className={"p-2 text-white aspect-square rounded-full bg-slate-800"}>
                            <LuSparkles size={16} />
                        </div>

                        <p className={"text-base"}><span className={"font-semibold"}>Surface Tension</span> — Engineering design installation</p>
                    </div>
                </div>

                <div className={"flex flex-col gap-3"}>
                    <p className={"text-lg font-bold"}>Skills</p>

                    <div className={"flex w-full gap-4 items-center"}>
                        <div className={"p-2 text-white aspect-square rounded-full bg-slate-800"}>
                            <LuCode2 size={16} />
                        </div>

                        <p className={"text-base"}><span className={"font-semibold"}>Development</span> — React, Typescript, Javascript, GraphQL, TailwindCSS</p>
                    </div>

                    <div className={"flex w-full gap-4 items-center"}>

                        <div className={"p-2 text-white aspect-square rounded-full bg-slate-800"}>
                            <LuPackage size={16} />
                        </div>

                        <p className={"text-base"}><span className={"font-semibold"}>Services</span> — Firebase, Git, Jira, Postman, Launch Darkly, Contentful, Miro</p>
                    </div>
                </div>

                <div className={"w-full rounded-md p-2.5 flex justify-center text-white cursor-pointer"}
                style={{ background: "linear-gradient(to top right, #2196F3, #9333EA)" }}
                onClick={() => {
                    const email = "sanaknaki.ali@gmail.com";
                    const subject = "We're Interested!";
                    const body = "Ali,";
    
                    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
                    // Open the mailto link in a new tab or window
                    window.location.href = mailtoLink;
                }}>
                    <p className={"text-lg font-medium"}>Get in contact</p>
                </div>
            </div>
        </div>
    )
}

export default PriceSection;