import axios, { AxiosResponse, AxiosError } from 'axios'

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        'Content-type': 'application/json',
        'X-MICROCMS-API-KEY ': 'veGm3RYpGm8OzpiupVFeDtECpN1gzfsS6B5P',
      },
    })
    .then((res: AxiosResponse) => res.data)
    .catch((err: AxiosError) => {
      console.log(err.message)
      throw err
    })
