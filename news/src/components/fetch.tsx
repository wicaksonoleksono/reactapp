import React from "react";
const FetchData = async (url: string, data?: any) => {
    if (data) {
      console.log(data);
      const response = await fetch(url, data);
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
      return await response.json();
    } else {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
      return await response.json();
    }
  };
  
  export default FetchData;

