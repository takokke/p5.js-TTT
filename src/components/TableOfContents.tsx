import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import React from 'react'

type TableOfContentsProps = {
  toc: { id: string; text: string }[]
}

// 目次コンポーネント
export const TableOfContents = (props: TableOfContentsProps) => {
  const { toc } = props
  return (
    <div>
      <p
        className="TableOfContentsHead"
        style={{ fontWeight: 'bold', paddingLeft: '14px', paddingTop: '14px' }}
      >
        目次
      </p>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {toc.map((data, i) => (
          <TimelineItem
            key={data.id}
            sx={{
              position: 'relative',
              '&:hover .hoverEffect': { color: '#000' },
            }}
          >
            <TimelineSeparator>
              <TimelineDot />
              {/* indexがtocの最後の要素の場合はTimelineConnectorを表示しない */}
              {i !== toc.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ color: '#65717b', fontWeight: 'bold' }}>
              <a className="hoverEffect" href={`#${data.id}`}>
                {data.text}
              </a>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
