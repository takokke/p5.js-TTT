import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import React, { useEffect, useState } from 'react'
type TableOfContentsProps = {
  toc: { id: string; text: string }[]
}

// 目次コンポーネント
export const TableOfContents = (props: TableOfContentsProps) => {
  const { toc } = props
  const [activeId, setActiveId] = useState<string | null>(null)
  //見出しと目次の連携、強調
  //jsのapi IntersectionObserverを使用
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.1 },
    )

    toc.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      toc.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [toc])

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
              <TimelineDot
                sx={{
                  backgroundColor: activeId === data.id ? '#ff5e00' : undefined,
                  border:
                    activeId === data.id ? '2px solid #bdbdbd' : undefined,
                }}
              />
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
