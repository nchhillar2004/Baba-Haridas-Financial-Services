import toast from "react-hot-toast";
import Notification from "@/components/navbar/new-updates/Notification";
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import "./home.css";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LaptopWindowsOutlinedIcon from "@mui/icons-material/LaptopWindowsOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Link from "next/link";

export default function Home() {
    const successToast = () => {
        toast.success("Done");
    };
    const errorToast = () => {
        toast.error("Try again later");
    };
    const loadingToast = () => {
        toast.loading("Please wait", {
            duration: 1200,
        });
    };
    return (
        <div className="home_section bg-slate-100">
            <Notification
                title="-V.1.0.0 About this version"
                point1="Website is under development"
                point2="This is a sample notification"
            />
            <Layout title="BHFS - Home Page">
                <div className="home-container">
                    <div className="quiz flex flex-col py-2 items-center justify-between w-1/2 m-auto">
                        <Image
                            src="https://www.betterment.com/hs-fs/hubfs/Graphics/webpage-graphics/lightbulb.png?width=120&name=lightbulb.png"
                            width={120}
                            height={120}
                            alt="light bulb"
                        ></Image>
                        <div className="quiz-text text-center font-thin leading-relaxed">
                            <p>
                                Want to know how you can make the most of your
                                money? Take our quiz.
                            </p>
                        </div>

                        <Link href="/quiz/s">
                            <div className="quiz-card w-full h-20 bg-white">
                                <div className="qc-left">
                                    <BookOutlinedIcon fontSize="large" />
                                </div>
                                <div className="qc-center">I&apos;m in school</div>
                                <div className="qc-right">
                                    <ChevronRightOutlinedIcon />
                                </div>
                            </div>
                        </Link>

                        <Link href="/quiz/w">
                            <div className="quiz-card w-full h-20 bg-white">
                                <div className="qc-left">
                                    <LaptopWindowsOutlinedIcon fontSize="large" />
                                </div>
                                <div className="qc-center">
                                    I&apos;m working or job hunting
                                </div>
                                <div className="qc-right">
                                    <ChevronRightOutlinedIcon />
                                </div>
                            </div>
                        </Link>

                        <Link href="/quiz/r">
                            <div className="quiz-card w-full h-20 bg-white">
                                <div className="qc-left">
                                    <BeachAccessOutlinedIcon fontSize="large" />
                                </div>
                                <div className="qc-center">I&apos;m retired</div>
                                <div className="qc-right">
                                    <ChevronRightOutlinedIcon />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
