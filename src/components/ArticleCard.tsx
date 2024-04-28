import PersonIcon from '@mui/icons-material/Person'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'

type ArticleCardProps = {
  id: number
  title: string
  fromToday: string
  userName: string
}

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <Card sx={{ borderRadius: '8px', color: '#54391f' }}>
      <CardContent>
        <Typography
          component="h3"
          sx={{
            mb: 2,
            minHeight: 48,
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
          <Typography sx={{ fontSize: 12 }}>{props.fromToday}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
