
//utils/explore.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getExplore(lang: string, id: number) {
  try {
    const url = `${API_URL}explore/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
}
export const getResearch = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}research-and-impact/${id}`


    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error response:", await response.text());
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};


export const getFStudents = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}for-student/${id}`


    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error response:", await response.text());
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};


export const getMedia = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}for-media/${id}`


    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error response:", await response.text());
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};