import { Link as MuiLink } from '@mui/material'
import NextLink from 'next/link'

type StyledLinkProps = {
  href: string
  message: string
}
const StyledLink = (props: StyledLinkProps) => {
  const { href, message } = props

  return (
    <MuiLink
      href={href}
      component={NextLink}
      sx={{
        color: '#54391f',
        textDecoration: 'none',
        py: 1,
        px: 3,
        '&:hover': {
          background: 'rgba(181, 146, 89, 0.2)',
          borderRadius: 25,
        },
      }}
    >
      {message}
    </MuiLink>
  )
}
export default StyledLink
