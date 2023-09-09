import React from 'react'
import { Card, CardPreview } from '@/app/use-client'

function ImageList() {
  return (
    <div className='grid grid-cols-6 gap-4 px-4'>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item}>
          <CardPreview>
            <img
              src={'https://gd-hbimg.huaban.com/134d86c28b92167856de193b03c404fd033e7863ab9ff-cvs7yi_fw480webp'}
              alt="Preview of a Word document: About Us - Overview"
            />
          </CardPreview>
        </Card>
      ))}
    </div>
  )
}

export default ImageList