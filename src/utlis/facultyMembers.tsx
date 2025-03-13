const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMembers = async (lang: string, page: number) => {
  try {
    const response = await fetch(`${API_URL}faculty-members?page=${page}`, {
      method: "POST",
      headers: {
        lang: lang,
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