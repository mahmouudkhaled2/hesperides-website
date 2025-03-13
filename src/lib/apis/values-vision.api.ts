const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getValuesAndVision = async (lang: string) => {
    console.log("API_URL", API_URL);
    
    try {
        const response = await fetch(`${API_URL}explore-university`, {

            method: "GET",
            headers: {
              "Content-Type": "application/json",
              lang,  
            },
          });
    
        if (!response.ok) {
            console.error("Failed to fetch data");
            throw new Error("Failed to fetch data")
        }

        const payload = await response.json();

        return payload;
    }
    catch (err) {
        console.error("Error: ", err);
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error(String(err));
        }
    }
}