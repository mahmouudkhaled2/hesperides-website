const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLibrary = async (lang: string) => {
  try {
    const response = await fetch(`${API_URL}libaray`, {
      method: "GET",
      headers: {
        lang: lang, // Use dynamic language from next-intl
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  } catch (error) {
    console.error("خطأ في جلب البيانات:", error);
    throw error;
  }
};
