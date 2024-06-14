import { Pagination, Box, Container, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import ArticleCard from '@/components/ArticleCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { styles } from '@/styles'
import { fetcher } from '@/utils'
import { PER_PAGE } from '@/utils/per_page'

type Article = {
  id: string
  title: string
  updatedAt: string
  eyecatch: {
    url: string
  }
  author: string
}

const Index: NextPage = () => {
  const router = useRouter()
  const page: number = 'page' in router.query ? Number(router.query.page) : 1
  const url1 =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL +
    "/articles?fields='totalCount''"
  const { data: totalCountData, error: totalCountError } = useSWR(url1, fetcher)
  const url2 =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL +
    '/articles/?offset=' +
    (page - 1) * PER_PAGE +
    '&limit=' +
    PER_PAGE
  const { data: articlesDate, error: articlesError } = useSWR(url2, fetcher)
  if (totalCountError || articlesError) return <Error />
  if (!totalCountData || !articlesDate) return <Loading />

  const articles = articlesDate.contents
  const totalCount = totalCountData.totalCount
  console.log(articles)

  const hundleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push('/articles/?page=' + value)
  }

  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#fff2da' }}>
      <Container maxWidth="md" sx={{ pt: 6 }}>
        <Typography
          component="h2"
          sx={{ color: '#54391f', fontSize: 32, fontWeight: 'bold', mb: 4 }}
        >
          作品集
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={5}
        >
          {articles.map((article: Article, i: number) => (
            <Grid key={i} item xs={12} md={6}>
              <Link href={'/articles/' + article.id}>
                <ArticleCard
                  id={article.id}
                  title={article.title}
                  userName={article.author}
                  thumbnailUrl={article.eyecatch.url}
                  updatedAt={article.updatedAt}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <Pagination
            count={Math.ceil(totalCount / PER_PAGE)}
            page={page}
            onChange={hundleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}
export default Index
