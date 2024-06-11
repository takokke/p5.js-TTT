import { Box, Container, Typography, Card } from '@mui/material'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Error from '@/components/Error'
import MarkdownText from '@/components/MarkdownText'
import { TableOfContents } from '@/components/TableOfContents'
import { client } from '@/libs/client'
import { renderToc } from '@/libs/render-toc'

type Chapter = {
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

type Props = {
  chapter: Chapter
  error: boolean
}

const ChapterDetail: NextPage<Props> = (props) => {
  const { chapter, error } = props
  if (error) return <Error />
  const toc = renderToc(chapter.content)

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.params!['id'] as string | undefined
    const data = await client.get({ endpoint: 'chapters', contentId: id })

    return {
      props: {
        chapter: data,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        chapter: [],
        error: true,
      },
    }
  }
  // paramsがundifiedの可能性がある
}

export default ChapterDetail
