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
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import MarkdownText from '@/components/MarkdownText'
import { TableOfContents } from '@/components/TableOfContents'
import { renderToc } from '@/libs/render-toc'
import { fetcher } from '@/utils'

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

class DateStr {
  created_at: Date

  constructor(date: Date) {
    this.created_at = date
  }

  formatDate(): string {
    const year = this.created_at.getFullYear()
    const month = ('0' + (this.created_at.getMonth() + 1)).slice(-2)
    const day = ('0' + this.created_at.getDate()).slice(-2)

    return `${year}/${month}/${day}`
  }
}

const ArticleDetail: NextPage<Props> = () => {
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL + '/articles/'
  const { id } = router.query
  const { data, error } = useSWR(id ? url + id : null, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />
  const article = data
  const toc = renderToc(article.content)
  const createdDate = new DateStr(new Date(article.createdAt))
  const updatedDate = new DateStr(new Date(article.updatedAt))

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
                        <ListItemText primary={createdDate.formatDate()} />
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
                        <ListItemText primary={updatedDate.formatDate()} />
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

export default ArticleDetail
