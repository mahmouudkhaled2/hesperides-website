import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LuLoaderCircle } from "react-icons/lu";
import * as Yup from "yup";

interface OtpModalProps {
  email: string;
  setShowReturnPasswordModal: (value: boolean) => void;
}

const ReturnPasswordModal: React.FC<OtpModalProps> = ({
  email,
  setShowReturnPasswordModal,
}) => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف")
      .required("كلمة المرور مطلوبة"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "كلمة المرور غير متطابقة")
      .required("تأكيد كلمة المرور مطلوب"),
  });
  const handleSubmit = async (
    values: { email: string; password: string; password_confirmation: string },
    {
      setSubmitting,
      setErrors,
    }: FormikHelpers<{
      email: string;
      password: string;
      password_confirmation: string;
    }>
  ) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${API_URL}reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        setShowReturnPasswordModal(false); // Close modal after success
      } else {
        setErrors({ email: data.message || "حدث خطأ أثناء التحقق من الرمز" });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors({ email: "حدث خطأ في الاتصال بالخادم" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-4">أدخل كلمة المرور الجديدة</h2>

        <Formik
          initialValues={{ email, password: "", password_confirmation: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* حقل كلمة المرور */}
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-md my-4 font-medium"
                >
                  كلمة المرور
                </label>
                <div className="relative">
                  <Field
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C49732]"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-2 flex items-center"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        password: !prev.password,
                      }))
                    }
                  >
                    {showPassword.password ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="password_confirmation"
                  className="block text-md my-4 font-medium"
                >
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <Field
                    type={showPassword.confirmPassword ? "text" : "password"}
                    name="password_confirmation"
                    id="password_confirmation"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C49732]"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 left-2 flex items-center"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        confirmPassword: !prev.confirmPassword,
                      }))
                    }
                  >
                    {showPassword.confirmPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password_confirmation"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-[#C49732] text-white rounded-md hover:bg-[#dcb55b] focus:outline-none flex justify-center items-center"
              >
                {isSubmitting ? (
                  <LuLoaderCircle className="mr-3 size-5 animate-spin" />
                ) : (
                  "تسجيل"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ReturnPasswordModal;
