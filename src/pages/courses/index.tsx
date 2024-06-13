import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import useSWR from 'swr'
import CourseCard from '@/components/CourseCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import MuiBreadcrumbs from '@/components/MuiBreadcrumb'
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
    <Box css={styles.pageMinHeight}>
      <Box
        sx={{
          backgroundColor: '#fff2da',
          py: 5,
          px: { md: 20, xs: 2 },
          color: '#54391f',
          display: 'flex',
          justifyContent: 'space-between', // 横並びの要素間にスペースを均等に配置
          alignItems: 'center', // 垂直方向に中央揃え
        }}
      >
        <Box sx={{ backgroundColor: '#fff2da' }}>
          <Typography
            component="h2"
            sx={{
              textAlign: { md: 'left' },
              fontSize: { md: 30, xs: 18 },
              fontWeight: 'bold',
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            学習コンテンツ一覧
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: { md: 18, xs: 12 } }}>
            チュートリアル形式でプログラミングを学ぼう
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pl: { md: 17, sx: 0 }, py: 1, backgroundColor: 'white' }}>
        <MuiBreadcrumbs />
      </Box>
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
