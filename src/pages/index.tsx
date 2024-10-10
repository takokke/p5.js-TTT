import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import ArticleCard from '@/components/ArticleCard'
import CourseCard from '@/components/CourseCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import StyledLink from '@/components/StyledLink'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

//記事と講座の二つに分け
type Article = {
  id: string
  title: string
  updatedAt: string
  eyecatch: {
    url: string
  }
  author: string
}

type Course = {
  id: string
  name: string
  updatedAt: string
  thumbnail: {
    url: string
  }
}

const Index: NextPage = () => {
  // 記事の取得URL
  const url1 =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL + '/articles?offset=0&limit=3'
  const { data: articlesData, error: articlesError } = useSWR(url1, fetcher)

  // 講座の取得URL
  const url2 =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL + '/courses?offset=0,limit=10'
  const { data: coursesData, error: coursesError } = useSWR(url2, fetcher)

  if (articlesError || coursesError) return <Error />
  if (!articlesData || !coursesData) return <Loading />

  const articles = articlesData.contents
  const courses = coursesData.contents

  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#fff2da' }}>
      <Box>
        <Container maxWidth="lg" sx={{ py: 10 }}>
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
              <Grid key={i} item xs={12} md={4}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 6 }}>
            <StyledLink href="/articles" message=" 作品をもっと探す➡️" />
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Typography
            component="h2"
            sx={{ color: '#54391f', fontSize: 32, fontWeight: 'bold', pb: 4 }}
          >
            講座
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={5}
          >
            {courses.map((course: Course, i: number) => (
              <Grid key={i} item xs={12} md={6}>
                <CourseCard
                  id={course.id}
                  name={course.name}
                  thumbnailUrl={course.thumbnail.url}
                  href={'/courses/' + course.id}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 6, pb: 3 }}>
            <StyledLink href="/courses" message="講座一覧へ➡️" />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
export default Index
