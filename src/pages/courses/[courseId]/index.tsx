//選択した講座の詳細画面
//章一覧が表示される
import { Box, Grid, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
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

type Chapter = {
  id: string
  title: string
  courseId: Course
  updatedAt: string
}

type SSRProps = {
  chapters: Chapter[]
  error: boolean
}

// 講座一覧画面
const Index: NextPage<SSRProps> = (props) => {
  const { chapters, error } = props
  const courseId = chapters[0].courseId

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
        p5.js{courseId.name}
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
              <Link href={'/courses/' + courseId.id + '/' + chapter.id}>
                {chapter.title}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context,
) => {
  try {
    const courseId = context.params!['courseId'] as string | undefined
    const chapterData = await client.get({
      endpoint: 'chapters',
      queries: { offset: 0, filters: `courseId[equals]${courseId}` },
    })
    return {
      props: {
        chapters: chapterData.contents,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        chapters: [],
        error: true,
      },
    }
  }
}

export default Index
