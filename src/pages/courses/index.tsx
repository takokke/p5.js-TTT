import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import useSWR from 'swr'
import CourseCard from '@/components/CourseCard'
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

// 講座一覧画面
const Index: NextPage = () => {
  const url =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL + '/courses?offset=0'

  const { data, error } = useSWR(url, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const courses = data.contents

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
        学習講座
      </Typography>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          {courses.map((course: Course, i: number) => (
            <Grid key={i} item xs={12} md={4}>
              <CourseCard
                id={course.id}
                name={course.name}
                thumbnailUrl={course.thumbnail.url}
                href={'/courses/' + course.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Index
