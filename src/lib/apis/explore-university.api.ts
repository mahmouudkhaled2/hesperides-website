const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const contactWithUniversity = async (lang: string) => {

    try {
        const response = await fetch(`${API_URL}contact-us`, {

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

/* 
=== Our Leadership section apis
*/

// 
export const getUniversityFounder = async (lang: string) => {

    try {
        const response = await fetch(`${API_URL}leadership/founder`, {

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

// 
export const getUniversityPresident = async (lang: string) => {

    try {
        const response = await fetch(`${API_URL}leadership/president`, {

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

// 
export const getBoardTrustees = async (lang: string) => {

    try {
        const response = await fetch(`${API_URL}leadership/board-of-trustees`, {

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

// 
export const getOrgStructure = async (lang: string) => {

    try {
        const response = await fetch(`${API_URL}leadership/structure-universities`, {

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