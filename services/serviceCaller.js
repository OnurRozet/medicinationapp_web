import axios from 'axios';
import https from "https";


const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URI ?? "";
const API_KEY = process.env.NEXT_PUBLIC_API_API_KEY ?? "";

function getHeaders(isAnonymous, clientToken) {
  const result= {
    "x-api-key": API_KEY,
    Authorization: undefined,
  };
  if (!isAnonymous && clientToken) {
    result.Authorization = "Bearer ".concat(clientToken);
  }
  return result;
}


export async function Get(
  endpointUri,
  requestData,
  isAnonymous,
  clientToken
) {
  return axios.get(BASE_URI + `${endpointUri}`, {
    headers: getHeaders(isAnonymous, clientToken),
    params: requestData ? { ...requestData } : undefined,
    httpsAgent: new https.Agent({
      rejectUnauthorized: process.env.NODE_ENV !== "development",
    }),
  });
}
export async function Put(
  endpointUri,
  requestData,
  isAnonymous,
  clientToken
) {
  return axios.put(BASE_URI + `${endpointUri}`, requestData, {
    headers: getHeaders(isAnonymous, clientToken),
    httpsAgent: new https.Agent({
      rejectUnauthorized: process.env.NODE_ENV !== "development",
    }),
  });
}
export async function Post(
  endpointUri,
  requestData,
  isAnonymous,
  clientToken
) {
  return axios(BASE_URI + `${endpointUri}`, {
    method: "POST",
    data: requestData,
    headers: getHeaders(isAnonymous, clientToken),
    // httpsAgent: new https.Agent({
    //   rejectUnauthorized: process.env.NODE_ENV !== "development",
    // }),
  });
}
export async function Delete(
  endpointUri,
  requestData,
  isAnonymous,
  clientToken
) {


  return axios.delete(BASE_URI + `${endpointUri}`, {
    headers: getHeaders(isAnonymous, clientToken),
    params: { ...requestData },
    httpsAgent: new https.Agent({
      rejectUnauthorized: process.env.NODE_ENV !== "development",
    }),
  });
}

