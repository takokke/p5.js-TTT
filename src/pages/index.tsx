import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import CourseCard from '@/components/CourseCard'
import Error from '@/components/Error'
import StyledLink from '@/components/StyledLink'
import { client } from '@/libs/client'
import { styles } from '@/styles'

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

type SSRProps = {
  articles: Article[]
  courses: Course[]
  error: boolean
}

const Index: NextPage<SSRProps> = (props) => {
  const { courses, articles, error } = props

  if (error) return <Error />
  return (
    <Box css={styles.pageMinHeight}>
      <Box sx={{ backgroundColor: '#fff2da' }}>
        <Container maxWidth="md" sx={{ py: 3 }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 6 }}>
            <StyledLink
              href="/articles/pages/1"
              message=" 作品をもっと探す➡️"
            />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="md" sx={{ py: 3 }}>
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

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  try {
    const data1 = await client.get({
      endpoint: 'articles',
      queries: { offset: 0, limit: 10 },
    })
    const data2 = await client.get({
      endpoint: 'courses',
      queries: { offset: 0, limit: 10 },
    })
    return {
      props: {
        articles: data1.contents,
        courses: data2.contents,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        articles: [],
        courses: [],
        error: true,
      },
    }
  }
}

export default Index
