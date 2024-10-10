import PersonIcon from '@mui/icons-material/Person'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'

type ArticleCardProps = {
  id: string
  title: string
  userName: string
  thumbnailUrl: string
  updatedAt: string
}

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

// 何日前に投稿したか求める関数
const getDaysAgo = (updatedAt: string) => {
  const now = new Date()
  const createdDate = new Date(updatedAt)
  const diffTime = Math.abs(now.getTime() - createdDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

const ArticleCard = (props: ArticleCardProps) => {
  const daysAgo = getDaysAgo(props.updatedAt)
  return (
    <Card
      sx={{
        borderRadius: '4px',
        color: '#54391f',
        overflow: 'hidden',
        boxShadow: '0px 0px 34px 4px #e0e0e0',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={props.thumbnailUrl}
          alt={props.title}
          sx={{
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              opacity: 0.7,
            },
          }}
        />
      </Box>
      <CardContent>
        <Typography
          component="h3"
          sx={{
            mb: 2,
            minHeight: 36,
            fontSize: 22,
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {omit(props.title)(45)('...')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 12 }}>
            <IconButton sx={{ p: 0, mr: 2 }}>
              <Avatar
                sx={{
                  height: '30px',
                  width: '30px',
                  backgroundColor: '#b59259',
                }}
              >
                <PersonIcon />
              </Avatar>
            </IconButton>
            {props.userName}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>{daysAgo}日前</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
