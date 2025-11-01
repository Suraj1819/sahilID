import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Auto redirect after countdown
  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="text-center max-w-md w-full">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Path Display */}
        <div className="mb-8 p-3 bg-gray-100 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 break-all">
            <span className="font-semibold">Attempted path:</span> {location.pathname}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow hover:shadow-md w-full sm:w-auto"
          >
            Go Back
          </button>
        </div>

        {/* Auto Redirect Countdown */}
        <p className="text-sm text-gray-500">
          Automatically redirecting to home in{" "}
          <span className="font-bold text-blue-600">{countdown}</span> seconds...
        </p>

        {/* Optional: Fun illustration */}
        <div className="mt-8 text-6xl opacity-50">
          🔍
        </div>
      </div>
    </div>
  );
};

export default NotFound;