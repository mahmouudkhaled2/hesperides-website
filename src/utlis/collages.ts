const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchColleges = async (lang: string): Promise<College[]> => {
  try {
    const response = await fetch(`${API_URL}colleges`, {
      method: "GET",
      headers: {
        lang: lang,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`فشل جلب البيانات: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("خطأ في جلب الكليات:", error);
    throw error;
  }
};

export const fetchCollegeById = async (id: string, lang: string): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_URL}category/${id}`, {
      method: "GET",
      headers: {
        lang: lang,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`فشل جلب البيانات: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("خطأ في جلب الأقسام:", error);
    throw error;
  }
};

export interface College {
  id: number;
  name: string;
}

export interface Category {
  title: string;
  id?: string | number;
}