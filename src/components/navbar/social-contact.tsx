import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "../theme-switch/theme-switch";
import { email, githubPath, linkedInPath } from "./config";
import { MdOutlineEmail } from "react-icons/md";
export default function SocialContact() {
    return (
        <div className="flex justify-end items-center">
            <Link href={email} target="_blank"
                className="px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500 md:text-xl">
                <MdOutlineEmail/>
            </Link>
            <Link href={githubPath} target="_blank"
                className="px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500 ">
                <FaGithub />
            </Link>
            <Link href={linkedInPath} target="_blank"
                className="px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500">
                <FaLinkedin />
            </Link>
            <ThemeSwitch />
        </div>
    )
}