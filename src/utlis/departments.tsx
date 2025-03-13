const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCollegeById = async (id: string, lang: string) => {
  try {
    const response = await fetch(`${API_URL}category/${id}`, {
      method: "GET",
      headers: {
        lang: lang,
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data; 
    } else {
      throw new Error(`فشل جلب البيانات: ${response.status}`);
    }
  } catch (error) {
    console.error("خطأ في جلب البيانات:", error);
    throw error;
  }
};
