import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'
import UpdateIcon from '@mui/icons-material/Update'
import {
  Box,
  Container,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import Error from '@/components/Error'
import MarkdownText from '@/components/MarkdownText'
import { TableOfContents } from '@/components/TableOfContents'
import { client } from '@/libs/client'
import { renderToc } from '@/libs/render-toc'

type Article = {
  title: string
  content: string
  createdAt: string
  updatedAt: string
  eyecatch: {
    url: string
  }
  author: string
}

type Props = {
  article: Article
  error: boolean
}

interface Content {
  id: string
}

const ArticleDetail: NextPage<Props> = (props) => {
  const { article, error } = props
  if (error) return <Error />
  const toc = renderToc(article.content)

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
      >
        <Box sx={{ pr: 1 }}>
          <PersonIcon />
        </Box>
        <Box sx={{ mr: 2 }}>
          <Typography component="p">著者:</Typography>
        </Box>
        <Typography component="p" sx={{ fontWeight: 'bold', color: 'black' }}>
          {article.author}
        </Typography>
      </Box>
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
              {article.title}
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
            {article.createdAt}に公開
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
                <MarkdownText content={article.content} />
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
            <Box>
              <Card sx={{ boxShadow: 'none', borderRadius: '4px' }}>
                <List sx={{ color: '#b59259' }}>
                  <ListItem divider>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ pr: 1 }}>
                          <PersonIcon />
                        </Box>
                        <ListItemText primary="著者" />
                      </Box>
                      <Box>
                        <ListItemText primary={article.author} />
                      </Box>
                    </Box>
                  </ListItem>
                  <ListItem divider>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ pr: 1 }}>
                          <ArticleIcon />
                        </Box>
                        <ListItemText primary="公開" />
                      </Box>
                      <Box>
                        <ListItemText primary={article.createdAt} />
                      </Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ pr: 1 }}>
                          <UpdateIcon />
                        </Box>
                        <ListItemText primary="本文更新" />
                      </Box>
                      <Box>
                        <ListItemText primary={article.updatedAt} />
                      </Box>
                    </Box>
                  </ListItem>
                </List>
              </Card>
            </Box>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<{ contents: Content[] }>({
    endpoint: 'articles',
  })

  const paths = data.contents.map(
    (content: Content) => `/articles/${content.id}`,
  )
  //paths以外は404
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params!['id'] as string | undefined
    const data = await client.get({ endpoint: 'articles', contentId: id })

    return {
      props: {
        article: data,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        article: [],
        error: true,
      },
    }
  }
  // paramsがundifiedの可能性がある
}

export default ArticleDetail
