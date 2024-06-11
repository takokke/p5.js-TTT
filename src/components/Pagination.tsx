// import { Pagination } from '@mui/material'
import Link from 'next/link'
type PaginationProps = {
  totalCount: number
}

export const Pagination = (props: PaginationProps) => {
  const { totalCount } = props
  const PER_PAGE = 10
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/articles/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}
