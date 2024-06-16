import { GoogleGenerativeAI } from "@google/generative-ai";

const genai=new GoogleGenerativeAI("AIzaSyBaynuh6uI8BPfy6jemoqBXswYV6eekoWg");


export const fetchDataFromApi=async(prompt)=>{
    try {
        const model=genai.getGenerativeModel({ model: "gemini-1.5-flash"});

        const result=await model.generateContent(prompt)
        const response= await result.response;
        const responseText=response.text();

       return responseText;
  
    } 
    catch (error) {
        throw error;
    }

}