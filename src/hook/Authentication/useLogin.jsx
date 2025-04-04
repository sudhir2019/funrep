import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../stores/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [locationError, setLocationError] = useState("");
    const [isLocationAvailable, setIsLocationAvailable] = useState(false);
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { isLoading } = useSelector((state) => state.auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });

    // Generate a random captcha
    const generateCaptcha = () => {
        setCaptcha(Math.floor(10000000 + Math.random() * 90000000).toString());
    };

    // Geolocation check
    const checkLocationPermission = () => {
        if (!navigator.geolocation) {
            console.warn("Geolocation not supported by browser.");
            setLocationError("Your browser does not support geolocation.");
            setIsLocationAvailable(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Location received:", position.coords);
                setIsLocationAvailable(true);
                setLocationError("");
                setShowLocationPopup(false); // Hide popup if location is available
            },
            (error) => {
                console.error("Geolocation error:", error);

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        setLocationError("⚠️ Location access is blocked. Please enable it in browser settings.");
                        setShowLocationPopup(true); // Show popup for manual enabling
                        break;
                    case error.POSITION_UNAVAILABLE:
                        setLocationError("❌ Location is unavailable. Please check your GPS or internet connection.");
                        break;
                    case error.TIMEOUT:
                        setLocationError("⏳ Location request timed out. Please try again.");
                        break;
                    default:
                        setLocationError("❗ Unknown error occurred while fetching location.");
                        break;
                }

                setIsLocationAvailable(false);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    };


    useEffect(() => {
        generateCaptcha();
        checkLocationPermission();
    }, []);


    // Prepare API payload
    const preparePayload = (data) => ({
        username: data.userName.trim(),
        password: data.userPassword,
    });

    // Handle form submission
    const onSubmit = async (data) => {
        setServerError("");
        setSuccessMessage("");
        const payload = preparePayload(data);

        try {
            const response = await dispatch(loginAsync(payload)).unwrap();
            setSuccessMessage("Login successful!");
            reset();


            // console.log(response.success);
            if(response.success === "true"){
                navigate("/Dashboard");
            }else{
                navigate("/Home");
            }
           
            // setTimeout(() => {
            //     const rolePathMap = {
            //         superadmin: "/Dashboard",
            //         admin: "/Dashboard",
            //         superdistributor: "/Dashboard",
            //         distributor: "/Dashboard",
            //         retailer: "/Dashboard",
            //         user: "/Dashboard",
            //     };

            //     if (!response || !response.roles) {
            //         console.error("Roles data is missing or invalid:", response?.roles);
            //         navigate("/Home");
            //         return;
            //     }

            //     // Navigate based on role
            //     const userRole = response.roles.toLowerCase();
            //     navigate(rolePathMap[userRole] || "/Home");
            // }, 1000);

        } catch (error) {
            setServerError(error.message || "An error occurred during login.");
        }
    };

    // Reset server error after 1 second
    useEffect(() => {
        const errorTimeout = setTimeout(() => setServerError(""), 1000);
        return () => clearTimeout(errorTimeout);
    }, []);

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        isLoading,
        serverError,
        successMessage,
        captcha,
        generateCaptcha,
        locationError,
        isLocationAvailable,
        showLocationPopup,
        checkLocationPermission,
    };
}
