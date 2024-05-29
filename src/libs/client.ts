import { createClient } from 'microcms-js-sdk'

//予約語に対して、型を定義したいときdeclareを使う
declare let process: {
  env: {
    API_KEY: string
  }
}

export const client = createClient({
  serviceDomain: 'p5js-text',
  apiKey: process.env.API_KEY,
})
