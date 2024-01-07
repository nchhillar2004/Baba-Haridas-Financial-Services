import React, { useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import "./loading.css";
import { checkAdmin } from "@/middleware/checkAdmin";

const customStyles = {
    content: {
        width: "300px",
        height: "200px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};

const AdminButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [password, setPassword] = useState("");

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setPassword("");
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (checkAdmin(password)) {
            toast.success("Access granted");
            window.location.href = "/admin";
        } else {
            toast.error("Access denied");
        }
    };

    return (
        <div>
            <button onClick={openModal} className="text-white">Admin</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2>Enter Admin Password</h2>
                <form onSubmit={handlePasswordSubmit} className="adminlogin">
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "10px",
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                        }}
                    >
                        Enter
                    </button>
                </form>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default AdminButton;
