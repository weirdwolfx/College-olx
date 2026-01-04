import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { googleLogin } from "../api/auth";
import { useState } from "react";

export default function LoginCard() {
    const { login } = useAuth();
    const [showVNITPopup, setShowVNITPopup] = useState(false);
    const [error, setError] = useState("");

    const handleSuccess = async (res) => {
        try {
            const data = await googleLogin(res.credential);
            login(data.token, data.user);
        } catch (err) {
            if (err?.response?.data?.code === "VNIT_ONLY") {
                setShowVNITPopup(true);
                return;
            }
            setError("Login failed. Please try again.");
        }
    };

    return (
        <>
            {/* login crd popop */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm text-center">
                <h1 className="text-3xl font-bold mb-1">CampX</h1>
                <p className="text-gray-500 mb-4">
                    Buy, sell inside VNIT
                </p>

                <p className="text-gray-600 text-sm mb-6">
                    Welcome to CampX 👋 <br />
                    Please login using your VNIT student email
                </p>

                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => setError("Google authentication failed")}
                />

                {error && (
                    <p className="text-red-500 text-sm mt-4">{error}</p>
                )}
            </div>

            {/* no other st is allowed , warning for non vnit st*/}
            {showVNITPopup && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">
                            Access Restricted
                        </h3>

                        <p className="text-gray-600 mb-4">
                            CampX is exclusively for VNIT students. <br />
                            Please use your
                            <br />
                            <span className="font-semibold">
                                @students.vnit.ac.in
                            </span>
                            <br />
                            email to continue.
                        </p>

                        <button
                            onClick={() => setShowVNITPopup(false)}
                            className="px-6 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 transition"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

