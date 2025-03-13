const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getHome = async (lang:string) => {
    try {
      const response = await fetch(`${API_URL}home`, {
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
export const getAdmission = async (lang: string ,id:string) => {
  try {
    const url = `${API_URL}admission/${id}`


    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
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
export const getAdminShow = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}admission/1/${id}`


    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
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
export const getFees = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}fees/${id}`


    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
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
export const getFeesDetails = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}fees-content/${id}`


    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
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
export const getAdmissionResources = async (lang: string, id?: number) => {
  try {
    const url = `${API_URL}admission-resources/${id}`


    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "lang": lang,  
      },
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
//Admission Links

export const getAdmissionLinks = async (lang: string) => {
  try {
    const url = `${API_URL}admission`


    const response = await fetch(url, {
      method: "GET",
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
export const getAdmissionResourcesLinks = async (lang: string) => {
  try {
    const url = `${API_URL}admission-resources`


    const response = await fetch(url, {
      method: "GET",
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
export const getAdmissionFees = async (lang: string) => {
  try {
    const url = `${API_URL}fees`


    const response = await fetch(url, {
      method: "GET",
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
export const getSerives = async (lang: string) => {
  try {
    const url = `${API_URL}services`


    const response = await fetch(url, {
      method: "GET",
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
export const getSeriveDetails = async (lang: string ,id?: number) => {
  try {
    const url = `${API_URL}services/${id}`


    const response = await fetch(url, {
      method: "GET",
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