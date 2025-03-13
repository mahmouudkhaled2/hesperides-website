import { useState, useRef } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface OtpModalProps {
  email: string;
  setShowReturnPasswordModal: (value: boolean) => void;
  setShowOtpModal: (value: boolean) => void;
}

const OtpModal: React.FC<OtpModalProps> = ({
  email,
  setShowOtpModal,
  setShowReturnPasswordModal,
}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = async () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 4) {
      setError("يجب أن يكون رمز التحقق 4 أرقام");
      return;
    }

    try {
      const response = await fetch(`${API_URL}verfiy-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpValue }),
      });

      const data = await response.json();
      if (response.ok) {
        setShowReturnPasswordModal(true);
        setShowOtpModal(false);
      } else {
        setError(data.message || "حدث خطأ أثناء التحقق من الرمز");
      }
    } catch (error) {
      setError(`حدث خطأ في الاتصال بالخادم ${error}`);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-xl font-semibold mb-4">أدخل رمز التحقق</h2>
          <p className="text-gray-600 mb-4">تم إرسال رمز التحقق إلى {email}</p>

          <div className="flex justify-between gap-4 mb-4 w-full">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="border border-gray-300 p-2 rounded-md text-center text-xl  size-12"
                maxLength={1}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            onClick={handleOtpSubmit}
            className="mt-2 w-full py-2 bg-[#C49732] text-white rounded-md hover:bg-[#dcb55b]"
          >
            تأكيد
          </button>
        </div>
      </div>
    </>
  );
};

export default OtpModal;
