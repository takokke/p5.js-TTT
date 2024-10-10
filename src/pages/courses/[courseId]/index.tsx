//選択した講座の詳細画面
//章一覧が表示される
import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
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

type Chapter = {
  id: string
  title: string
  courseId: Course
  updatedAt: string
}

// 講座一覧画面
const Index: NextPage = () => {
  const router = useRouter()
  const url =
    process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL +
    '/chapters?filters=courseId[equals]'
  const { courseId } = router.query
  const { data, error } = useSWR(courseId ? url + courseId : null, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const chapters = data.contents
  const course = chapters[0].courseId

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        backgroundColor: 'white',
        pb: 10,
      }}
    >
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
        <Box>
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
            p5.js開発コース{course.name}編
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: { md: 18, xs: 12 } }}>
            {course.subtitle}
          </Typography>
        </Box>
        <Box>
          <Image
            alt="講座サムネイル画像"
            src={course.thumbnail.url}
            width={140}
            height={95}
            layout="responsive"
            sizes="(max-width: 400px) 33vw, (max-width: 1000px) 25vw, 15vw"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // シャドウを追加
              objectFit: 'cover', // 画像のフィット方法を設定
            }}
          />
        </Box>
      </Box>
      <Box sx={{ pl: { md: 17, sx: 0 }, py: 1, backgroundColor: 'white' }}>
        <MuiBreadcrumbs />
      </Box>
      <Container maxWidth="lg" sx={{ pt: 7 }}>
        {chapters.map((chapter: Chapter, i: number) => (
          <Link key={i} href={'/courses/' + courseId + '/' + chapter.id}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start', // 横並びの要素間にスペースを均等に配置
                alignItems: 'center', // 垂直方向に中央揃え
                borderTop: 1,
                py: 4,
                borderBottom: i === chapters.length - 1 ? 1 : 0,
                borderColor: 'grey.500',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    backgroundColor: '#54391f',
                    color: 'white',
                    py: 1,
                    px: 2,
                    fontWeight: 'bold',
                    mr: 5,
                    borderRadius: 10,
                  }}
                >
                  DAY{i + 1}
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                {chapter.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Container>
    </Box>
  )
}

export default Index
