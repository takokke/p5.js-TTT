import { Box, Container, Grid, Pagination } from '@mui/material'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArticleCard from '@/components/ArticleCard'
import Error from '@/components/Error'
import { client } from '@/libs/client'
import { styles } from '@/styles'
import { PER_PAGE } from '@/utils/per_page'

type Article = {
  id: string
  title: string
  updatedAt: string
  eyecatch: {
    url: string
  }
  author: string
}

type Props = {
  articles: Article[]
  totalCount: number
  id: string
  error: boolean
}

const ArticlePageId: NextPage<Props> = (props) => {
  const { articles, totalCount, id, error } = props
  const router = useRouter()
  if (error) return <Error />

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push('/articles/pages/' + value)
  }

  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#fff2da' }}>
      <Container maxWidth="md" sx={{ pt: 6 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={5}
        >
          {articles.map((article: Article, i: number) => (
            <Grid key={i} item xs={12} md={6}>
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
            count={Math.ceil(totalCount / PER_PAGE)}
            page={Number(id)}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const resps = await client.get<{ totalCount: number }>({
    endpoint: 'articles',
  })

  // 開始から終了までの数値を配列で返すrange関数を宣言
  // 例:range(1,5) -> [1,2,3,4,5]
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i) //[...Array(end - start + 1)] -> [undifined,undifined...undifined]
  }

  const paths = range(1, Math.ceil(resps.totalCount / PER_PAGE)).map(
    (resp) => `/articles/pages/${resp}`,
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params!['id'] as string | undefined
    const data = await client.get({
      endpoint: 'articles',
      queries: { offset: (Number(id) - 1) * PER_PAGE, limit: PER_PAGE },
    })
    return {
      props: {
        articles: data.contents,
        totalCount: data.totalCount,
        id: id,
        error: false,
      },
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error)
    return {
      props: {
        article: [],
        totalCount: 0,
        error: true,
      },
    }
  }
}

export default ArticlePageId
