"use client";

import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { mainLogo } from "../../../../../public";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { LuLoaderCircle } from "react-icons/lu";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useState } from "react";
import ForgetPasswordModal from "../_authComponents/ForgetPasswordModal";
import OtpModal from "../_authComponents/OtpModal";
import ReturnPasswordModal from "../_authComponents/ReturnPasswordModal";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgetModal, setShowForgetModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showReturnPasswordModal, setShowReturnPasswordModal] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف")
      .required("كلمة المرور مطلوبة"),
  });

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting, setFieldError, setErrors }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const response = await fetch(`${API_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("token", data.data.token, { expires: 7 });
        router.push("/");
      } else if (response.status === 401) {
        setFieldError("email", "كلمة المرور أو البريد غير صحيح");
        setFieldError("password", "كلمة المرور أو البريد غير صحيح");
      } else {
        setErrors({ email: data.message || "حدث خطأ في تسجيل الدخول" });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors({ email: "حدث خطأ أثناء الاتصال بالخادم" });
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
            className="object-contain shrink-0 lg:w-[223px] lg:h-[89px] w-[165px] h-[72px] "
          />
        </Link>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          تسجيل الدخول
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-md my-1 font-medium"
                >
                  البريد الإلكتروني
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C49732]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-md my-1 font-medium"
                >
                  كلمة المرور
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C49732] pe-10"
                />
                <button
                  type="button"
                  className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 size-7 mt-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                </button>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-xs my-1"
                />
              </div>

              <button
                onClick={() => setShowForgetModal((open) => !open)}
                type="button"
                className="my-3 text-lg text-[#C49732]"
              >
                هل نسيت كلمة المرور ؟
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-[#C49732] text-white rounded-md hover:bg-[#dcb55b] focus:outline-none flex justify-center items-center"
              >
                {isSubmitting ? (
                  <LuLoaderCircle className="mr-3 size-5 animate-spin" />
                ) : (
                  "تسجيل الدخول"
                )}
              </button>
            </Form>
          )}
        </Formik>

        <div className="my-3 text-lg">
          ليس لديك حساب ؟
          <Link className="text-[#C49732]" href="/register">
            سجل الان
          </Link>
        </div>
      </div>
      {/* Show ForgetPasswordModal */}
      {showForgetModal && (
        <ForgetPasswordModal
          setShowForgetModal={setShowForgetModal}
          setShowOtpModal={setShowOtpModal}
          setEmail={setEmail}
        />
      )}

      {/* Show OtpModal */}
      {showOtpModal && (
        <OtpModal
          email={email}
          setShowOtpModal={setShowOtpModal}
          setShowReturnPasswordModal={setShowReturnPasswordModal}
        />
      )}

      {/* Show ReturnPasswordModal */}
      {showReturnPasswordModal && (
        <ReturnPasswordModal
          email={email}
          setShowReturnPasswordModal={setShowReturnPasswordModal}
        />
      )}
    </section>
  );
};

export default Login;
