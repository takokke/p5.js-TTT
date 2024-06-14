import HomeIcon from '@mui/icons-material/Home'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
})

const pageNames: Record<string, string> = {
  home: 'ホーム',
  courses: '講座',
  articles: '記事',
  'js-course': 'javascriptコース',
  'p5js-course': 'p5.jsコース',
  operator: '演算子',
  string: '文字列',
  variable: '変数',
  array: '配列',
}

const MuiBreadcrumbs = () => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter((segment) => segment)

  const createBreadcrumb = (segment: string, index: number) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const isLast = index === pathSegments.length - 1
    const name = pageNames[segment] || segment
    return isLast ? (
      <Typography key={href} color="text.primary">
        {name}
      </Typography>
    ) : (
      <Link key={href} href={href} passHref>
        <StyledLink>{name}</StyledLink>
      </Link>
    )
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" passHref>
        <StyledLink>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {pageNames.home}
        </StyledLink>
      </Link>
      {pathSegments.map(createBreadcrumb)}
    </Breadcrumbs>
  )
}

export default MuiBreadcrumbs
