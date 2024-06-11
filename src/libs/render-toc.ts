import * as cheerio from 'cheerio'

export const renderToc = (body: string) => {
  const $ = cheerio.load(body)
  const headings = $('h1, h2, h3').toArray()
  // 見出しの文字列と、idと、level
  const toc = headings.map((data) => ({
    text: $(data).text(),
    id: data.attribs.id,
    level: data.tagName.toLowerCase(),
  }))
  return toc
}
