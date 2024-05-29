import { Box, Grid, Container, Pagination } from '@mui/material'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArticleCard from '@/components/ArticleCard'
import Error from '@/components/Error'
import { client } from '@/libs/client'
import { styles } from '@/styles'
import { PER_PAGE } from '@/utils/per_page'

type Article = {
  id: number
  title: string
  updatedAt: string
  eyecatch: {
    url: string
  }
  author: string
}

type Props = {
  articles: Article[]
  totalCount: string
  error: boolean
}

const Index: NextPage<Props> = (props) => {
  const { articles, totalCount, error } = props
  const router = useRouter()
  const intTotalCount = Number(totalCount)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push('/articles/pages/' + value)
  }

  if (error) return <Error />
  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#fff2da' }}>
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={5}
        >
          {articles.map((article: Article, i: number) => (
            <Grid key={i} item xs={12} md={4}>
              <Link href={'/articles/' + article.id}>
                <ArticleCard
                  id={article.id}
                  title={article.title}
                  userName={article.author}
                  thumbnailUrl={article.eyecatch.url}
                  updatedAt={article.updatedAt}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <Pagination
            count={Math.ceil(intTotalCount / PER_PAGE)}
            page={1}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await client.get({
      endpoint: 'articles',
      queries: { offset: 0, limit: PER_PAGE },
    })
    return {
      props: {
        articles: data.contents,
        totalCount: data.totalCount,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        articles: [],
        error: true,
      },
    }
  }
}

export default Index
