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

const MuiBreadcrumbs = () => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter((segment) => segment)

  const createBreadcrumb = (segment: string, index: number) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const isLast = index === pathSegments.length - 1

    return isLast ? (
      <Typography key={href} color="text.primary">
        {segment}
      </Typography>
    ) : (
      <Link key={href} href={href} passHref>
        <StyledLink>{segment}</StyledLink>
      </Link>
    )
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" passHref>
        <StyledLink>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </StyledLink>
      </Link>
      {pathSegments.map(createBreadcrumb)}
    </Breadcrumbs>
  )
}

export default MuiBreadcrumbs
