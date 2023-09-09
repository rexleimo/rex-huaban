import Link from 'next/link'
import clsx from 'clsx'
import { Select } from '@/app/use-client'
import { Header } from '@/components'
import ImageList from '@/components/image-list'

export default async function Home({ searchParams }: {
  searchParams: {
    query: string,
    cate: string,
    search: string
  }
}) {

  const queryClsxName = (query: string) => clsx(
    {
      'bg-slate-200': searchParams.query === query,
    },
    'rounded', 'p-1')

  const cateClsxName = (cate: string) => clsx({
    'bg-slate-900': searchParams.cate === cate,
    'text-white': searchParams.cate === cate
  }, 'rounded', 'p-3', 'text-center')

  const queryParamsSet = (newQuery: { [x: string]: string }) => {
    const newSearchParams = new URLSearchParams({
      query: searchParams.query,
      cate: searchParams.cate,
      search: searchParams.search,
      ...newQuery
    })
    return newSearchParams.toString();
  }

  return (
    <>
      <Header {...searchParams}  />

      <div className="flex m-3">
        <div className="w-auto flex items-center border border-solid border-gray-100 rounded p-2">
          <Link href={`?${queryParamsSet({ query: 'design' })}`} className={queryClsxName('design')}>
            采集
          </Link>

          <Link href={`?${queryParamsSet({ query: 'boards' })}`} className={queryClsxName('boards')}>
            画板
          </Link>
        </div>
        <div className='flex flex-auto justify-center'>
          <div className=' grid grid-cols-6 gap-4 ml-4 max-w-[500px]'>
            <Link className={cateClsxName('推荐')} href={`?${queryParamsSet({ cate: '推荐' })}`}>推荐</Link>
            <Link className={cateClsxName('UI_UX')} href={`?${queryParamsSet({ cate: 'UI_UX' })}`} >UI/UX</Link>
            <Link className={cateClsxName('平面')} href={`?${queryParamsSet({ cate: '平面' })}`} >平面</Link>
            <Link className={cateClsxName('摄影')} href={`?${queryParamsSet({ cate: '摄影' })}`}>摄影</Link>
            <Link className={cateClsxName('游戏')} href={`?${queryParamsSet({ cate: '游戏' })}`} >游戏</Link>
          </div>
        </div>

        <div className='w-[180px]'>
          <Select>
            <option value="1">综合排序</option>
            <option value="2">时间排序</option>
          </Select>
        </div>
      </div >
      
      <ImageList />
    </>
  )
}
