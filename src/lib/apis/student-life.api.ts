
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getFirstStep = async (lang:string) => {
    try {
      const response = await fetch(`${API_URL}student-life/start`, {
        method: "GET",
        headers: {
            lang: lang,
          },
          cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw error;
    }
};
export const getStories = async (lang: string, page: number = 1) => {
  try {
    const url = new URL(`${API_URL}student-life/stories`);
    url.searchParams.append("per_page", page.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        lang: lang,
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const getCareerPath= async (lang: string) => {
  try {
    const response = await fetch(`${API_URL}student-life/career-path`, {
      method: "GET",
      headers: {
        lang: lang,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};
