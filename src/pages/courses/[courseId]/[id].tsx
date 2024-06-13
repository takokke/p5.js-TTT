import { Box, Container, Typography, Card } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import MarkdownText from '@/components/MarkdownText'
import MuiBreadcrumbs from '@/components/MuiBreadcrumb'
import { TableOfContents } from '@/components/TableOfContents'
import { renderToc } from '@/libs/render-toc'
import { fetcher } from '@/utils'

const ChapterDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const url = process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL + '/chapters/'
  const { data, error } = useSWR(id ? url + id : null, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />
  const chapter = data
  const toc = renderToc(chapter.content)
  const course = chapter.courseId
  return (
    <Box
      sx={{
        backgroundColor: '#ebe1d1',
        pb: 6,
        minHeight: 'calc(100vh - 57px)',
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
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          alignItems: 'center',
          backgroundColor: 'white',
          borderTop: '0.5px solid #acbcc7',
          height: 56,
          pl: 4,
          color: '#6e7b85',
        }}
      ></Box>
      <Container maxWidth="lg">
        <Box sx={{ pt: 6, pb: 3 }}>
          <Box sx={{ maxWidth: 840, m: 'auto', textAlign: 'center' }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 21, sm: 25 },
                fontWeight: 'bold',
              }}
            >
              {chapter.title}
            </Typography>
          </Box>
          <Typography
            component="p"
            align="center"
            sx={{
              display: {
                xs: 'block',
                lg: 'none',
              },
              color: '#6e7b85',
              mt: '20px',
            }}
          >
            {chapter.createdAt}に公開
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '0 24px' }}>
          <Box sx={{ width: '100%' }}>
            <Card
              sx={{
                boxShadow: 'none',
                borderRadius: '4px',
                maxWidth: 840,
                m: '0 auto',
              }}
            >
              <Box
                sx={{
                  padding: { xs: '0 24px 24px 24px', sm: '0 40px 40px 40px' },
                  marginTop: { xs: '24px', sm: '40px' },
                }}
              >
                <MarkdownText content={chapter.content} />
              </Box>
            </Card>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              width: 300,
              minWidth: 300,
            }}
          >
            <Box sx={{ mt: '15px', position: 'sticky', top: '20px' }}>
              <Card
                sx={{
                  boxShadow: 'none',
                  borderRadius: '4px',
                }}
              >
                <TableOfContents toc={toc} />
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ChapterDetail
