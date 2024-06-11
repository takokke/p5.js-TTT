import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material'
import Link from 'next/link'

type CourseCardProps = {
  id: string
  name: string
  thumbnailUrl: string
  href: string
}
const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const CourseCard = (props: CourseCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: '4px',
        color: '#54391f',
        overflow: 'hidden',
        boxShadow: 3,
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="200"
          image={props.thumbnailUrl}
          alt={props.name}
        />
      </Box>
      <CardContent>
        <Typography
          component="h3"
          sx={{
            textAlign: 'center',
            minHeight: 50,
            fontSize: 24,
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {omit(props.name)(45)('...')}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Link href={props.href}>
            <Button
              variant="contained"
              sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#1eb8cb',
                width: 200,
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              習得する
            </Button>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CourseCard
