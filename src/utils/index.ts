import axios, { AxiosResponse, AxiosError } from 'axios'

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        'Content-type': 'application/json',
        'X-MICROCMS-API-KEY ': process.env.NEXT_PUBLIC_API_KEY,
      },
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: AxiosError) => {
      console.log(err.message)
      throw err
    })
