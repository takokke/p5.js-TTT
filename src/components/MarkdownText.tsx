import { Box } from '@mui/material'
import { marked } from 'marked'
import 'zenn-content-css'

interface MarkdownTextProps {
  content: string
}

const MarkdownText = (props: MarkdownTextProps) => {
  const { content } = props
  return (
    <Box
      className="znc"
      sx={{
        h1: { fontWeight: 'bold' },
        h2: { fontWeight: 'bold' },
        h3: { fontWeight: 'bold' },
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Box>
  )
}

export default MarkdownText
