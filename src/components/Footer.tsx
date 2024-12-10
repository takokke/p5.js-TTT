import {
  Container,
  AppBar,
  Box,
  Typography,
  List,
  ListItem,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderTop: 'solid 1px rgb(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 7, pb: 9 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: '4' }}>
            <Link href="/">
              <Image src="/logo.png" alt="ロゴ" width={100} height={50} />
            </Link>
            <Typography
              component="p"
              sx={{
                color: 'rgba( 84, 57, 31, 0.5)',
                fontSize: '14px',
                mt: '14px',
              }}
            >
              TTTこどもプログラミング教室
              <br />
              のためのp5.js教材
            </Typography>
          </Box>
          <Box sx={{ flex: '8', color: 'rgb(84, 57, 31)' }}>
            <List>
              <ListItem component="h4" sx={{ fontWeight: 'bold' }}>
                About
              </ListItem>
              <ListItem sx={{ '&:hover': { textDecoration: 'underline' } }}>
                <Link
                  href="https://tinytech.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TTTこどもプログラミング教室
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { textDecoration: 'underline' } }}>
                <Link
                  href="https://www.reptiles.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  運営会社
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}
