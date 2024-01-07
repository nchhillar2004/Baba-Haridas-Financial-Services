import config from "@/config/config";

export const checkAdmin = (password) => {
    const adminPassword = config.ADMIN_PASSWORD; // Replace this with your actual admin password
    return password === adminPassword;
};