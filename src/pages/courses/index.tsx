import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import CourseCard from '@/components/CourseCard'
import Error from '@/components/Error'
import { client } from '@/libs/client'
import { styles } from '@/styles'

type Course = {
  id: string
  name: string
  updatedAt: string
  thumbnail: {
    url: string
  }
}

type SSRProps = {
  courses: Course[]
  error: boolean
}

// 講座一覧画面
const Index: NextPage<SSRProps> = (props) => {
  const { courses, error } = props

  if (error) return <Error />
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

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  try {
    const data = await client.get({
      endpoint: 'courses',
      queries: { offset: 0 },
    })
    return {
      props: {
        courses: data.contents,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        courses: [],
        error: true,
      },
    }
  }
}

export default Index
