"use client";

import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { mainLogo } from "../../../../../public";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { LuLoaderCircle } from "react-icons/lu";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RegisterFormValues {
  email: string;
  password: string;
  password_confirmation: string;
}

interface RegisterError {
  message: string;
}

const Register = () => {
  const [errorMessage, setErrorMessage] = useState<RegisterError | null>(null);


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
    values: RegisterFormValues,
    { setSubmitting }: FormikHelpers<RegisterFormValues>
  ) => {
    try {
      const response = await fetch(`${API_URL}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("token", data.data.token, { expires: 7 });
        setErrorMessage(null);
      } else {
        setErrorMessage({ message: data.message || "حدث خطأ في التسجيل" });
      }
    } catch (error) {
      setErrorMessage({ message: `${error}` });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center w-full px-4">
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <Link href="/" className="w-full flex justify-center items-center my-6">
          <Image
            src={mainLogo}
            alt="Hesperides Logo"
            width={223}
            height={89}
            priority
          />
        </Link>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          إنشاء حساب جديد
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-800 p-2 mb-4 rounded">
            {errorMessage.message}
          </div>
        )}

        <Formik
          initialValues={{ email: "", password: "", password_confirmation: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md my-4 font-medium"
                >
                  البريد الإلكتروني
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C49732]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

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

              <Link className="py-6 my-6 text-md text-[#C49732]" href="/login">
                لديك حساب بالفعل؟
              </Link>

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

    </section>
  );
};

export default Register;
