//選択した講座の詳細画面
//章一覧が表示される
import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type Course = {
  id: string
  name: string
  updatedAt: string
  thumbnail: {
    url: string
  }
}

type Chapter = {
  id: string
  title: string
  courseId: Course
  updatedAt: string
}

// 講座一覧画面
const Index: NextPage = () => {
  const router = useRouter()
  const url1 =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL +
    '/chapters?filters=courseId[equals]'
  const { courseId } = router.query
  const { data: chaptersData, error: chaptersError } = useSWR(
    courseId ? url1 + courseId : null,
    fetcher,
  )
  const url2 = process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL + '/courses/'
  const { data: courseData, error: courseError } = useSWR(
    courseId ? url2 + courseId : null,
    fetcher,
  )
  if (chaptersError || courseError) return <Error />
  if (!chaptersData || !courseData) return <Loading />

  const chapters = chaptersData.contents
  const course = courseData

  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#fff2da' }}>
      <Typography
        component="h2"
        sx={{
          color: '#54391f',
          textAlign: 'center',
          pt: 10,
          mb: 4,
          fontSize: 32,
          fontWeight: 'bold',
          lineHeight: 1.5,
        }}
      >
        p5.js{course.name}
      </Typography>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          {chapters.map((chapter: Chapter, i: number) => (
            <Grid key={i} item xs={12} md={4}>
              <Link href={'/courses/' + courseId + '/' + chapter.id}>
                {chapter.title}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Index
