import React from 'react'
import { HeaderProps } from '..'
import { FeiId, SearchBox } from '@/app/use-client'

function Header(props: HeaderProps) {

  return (
    <div className='h-14 border-b border-solid border-gray-200 p-3'>
      <div className='flex items-center justify-between'>
        <div className='w-8'>
          <img className='w-8 h-8' src='https://st0.dancf.com/static/02/202306090204-51f4.png' alt='logo' />
        </div>

        <form className='relative' action="/" method='get'>
          <input type='hidden' name='cate' value={props.cate} />
          <input type='hidden' name='query' value={props.query} />
          <FeiId>
            <SearchBox name='search' defaultValue={props.search} />
          </FeiId>
        </form>

      </div>
    </div>
  )
}

export default Header
