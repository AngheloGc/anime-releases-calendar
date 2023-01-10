export const REQUEST_INIT: RequestInit = {
  headers: {
    "authorization": `Bearer ${process.env.API_KEY}`
  }
}