import { useState } from "react";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type LoadingResponse = {
  status: "loading";
};
type AffermativeResponse<T> = {
  status: "ok";
  data: T;
};
type ErrorResponse = {
  status: "error";
  errorCode: number;
  errorMessage: string;
};
type Response<T> = LoadingResponse | AffermativeResponse<T> | ErrorResponse;

export default function useRequest<T = any>(
  url: string,
  method: HTTPMethod = "GET",
  body?: any
) {
  const [response, setResponse] = useState<Response<T>>({
    status: "loading"
  });

  if(response.status !== "loading") return response;

  fetch(url, { method, body, headers: new Headers({'Accept': 'application/json'}) })
    .then(async function(response){
      if(response.ok) {
        const data = await response.json() as T;
        setResponse({
          status: "ok",
          data
        })
      } else {
        setResponse({
          status: "error",
          errorCode: response.status,
          errorMessage: response.statusText
        })
      }
    })
  
  return response;
}