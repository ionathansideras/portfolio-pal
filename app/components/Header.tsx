import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

export default function Header() {
    return (
        <header>
            <div className="identity">
                <Image
                    src="/avatar.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="avatar"
                />
                <h1 className="name">Ionathan Sideras</h1>
            </div>
            <div className="chat-controls">
                <GrPowerReset size={25} color="#fff" />
                <IoClose size={33} color="#fff" />
            </div>
        </header>
    );
}
