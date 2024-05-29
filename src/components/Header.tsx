import { AppBar, Box, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const hideHeaderPathnames = ['/current/articles/edit/[id]']
  if (hideHeaderPathnames.includes(router.pathname)) return <></>

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        py: '12px',
      }}
    >
      <Container maxWidth="lg" sx={{ px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Link href="/">
              <Image
                src="/logo_transparent.png"
                priority
                width={120}
                height={60}
                alt="logo"
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
