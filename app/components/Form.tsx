import { IoSend } from "react-icons/io5";

export default function Form() {
    return (
        <form>
            <div className="form-group">
                <input type="text" placeholder="Type a message..." />
                <button type="submit">
                    <IoSend size={20} color="#fff" />
                </button>
            </div>
        </form>
    );
}
