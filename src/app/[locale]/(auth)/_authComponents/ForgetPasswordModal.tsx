import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Dispatch, SetStateAction } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ForgetPasswordModal: React.FC<{
  setShowForgetModal: Dispatch<SetStateAction<boolean>>;
  setShowOtpModal: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
}> = ({ setShowForgetModal, setShowOtpModal, setEmail }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
  });

  const handleSubmit = async (
    values: { email: string },
    { setSubmitting, setErrors }: FormikHelpers<{ email: string }>
  ) => {
    try {
      const response = await fetch(`${API_URL}forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        setEmail(values.email);
        setShowOtpModal(true);
        setShowForgetModal(false);
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
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-xl font-semibold mb-4">أدخل بريدك الإلكتروني</h2>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    className="border border-gray-300 p-2 rounded-md w-full text-center text-xl"
                    placeholder="example@mail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-2 bg-[#C49732] text-white rounded-md hover:bg-[#dcb55b]"
                >
                  {isSubmitting ? "جاري الإرسال..." : "تأكيد"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordModal;
