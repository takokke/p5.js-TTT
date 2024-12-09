import { Container, AppBar, Box, Typography } from '@mui/material'
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
          <Box sx={{ flex: '8' }}>
            右側のリンク集、TTTのサイトのリンク、Scratchの教材リンク
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}
