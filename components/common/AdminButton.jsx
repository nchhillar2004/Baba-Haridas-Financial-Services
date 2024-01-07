import React, { useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import "./loading.css";

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

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:8080/api/adminLogin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ password }),
                }
            );
            console.log(password);
            const data = await response.json();
            if (data.success && response.status === 201) {
                toast.success("Access granted");
                window.location.href = "/admin";
            } else {
                toast.error("Access denied");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error occurred");
        }
    };

    return (
        <div>
            <button onClick={openModal} className="text-white">
                Admin
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
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
