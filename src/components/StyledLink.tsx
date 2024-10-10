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
        color: '#4c4c4c',
        textDecoration: 'none',
        py: 1,
        px: 3,
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.1)',
          borderRadius: 25,
        },
      }}
    >
      {message}
    </MuiLink>
  )
}
export default StyledLink
