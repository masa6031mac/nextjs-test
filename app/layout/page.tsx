import React from 'react'

const Layout = () => {
  return (
    <div>
        <div className='w-8 bg-white'>32px</div>
        <div className='w-full bg-white'>100%</div>
        <div>
            <div className='absolute bottom-4 right-4'>Text</div>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <div className='bg-white'>
                <p>商品名</p>
                <p>Logicool g540 Master</p>
            </div>
            <div className='bg-white'>Right</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white'>1</div>
            <div className='bg-white'>1</div>
            <div className='bg-white'>1</div>
            <div className='bg-white'>1</div>
            <div className='bg-white'>1</div>
        </div>
        <div className='bg-gray-600 border-white flex justify-center itemsm-center gap-10'>
            <div className='bg-gray-100 mt-6'>mt-6</div>
            <div className='bg-gray-100 mr-4'>mr-4</div>
            <div className='bg-gray-100 mb-8'>mb-8</div>
            <div className='bg-gray-100 ml-2'>ml-2</div>
        </div>
        <div className='bg-white px-8 py-4'>
            Text
        </div>
        <div className='space-y-4 mt-4'>
            <div className='bg-white'>1</div>
            <div className='bg-white'>2</div>
            <div className='bg-white'>3</div>
        </div>
        <div>
            <div className='text-sm'>小さい</div>
            <div className='text-5xl'>大きい</div>
        </div>
        <div className='mt-8'>
            <div className='text-blue-300'>Blue 300</div>
            <div className='text-blue-700'>Blue 700</div>
        </div>
        <div className='mt-8'>
            <div className='text-center font-bold'>Text</div>
        </div>
        <div className='mt-8 p-4'>
            <div className='p-4 border border-blue-400'>Text</div>
        </div>
        <div className='mt-4'>
            <div className='rounded-full bg-white'>Text</div> 
            <div className='rounded-full bg-white w-12 h-12 text-center'>1</div> 
        </div>
        <div className='space-y-4 divide-y divide-blue-400'>
            <div className='bg-white'>1</div>
            <div className='bg-white'>2</div>
            <div className='bg-white'>3</div>
        </div>
        <div className='mt-4'>
            <div className='opacity-40'>Text</div> 
            <div>Text</div> 
        </div>
        <div className='mt-4'>
            <div className='blur-sm'>Text</div>
        </div>
        <div className='mt-8'>
            <div className='animate-pulse bg-white h-8'></div>
        </div>
        <div className='mt-8'>
            <div className='animate-spin bg-white w-8 h-8'>未奈</div>
        </div>
        <div className='mt-8'>
            <button className='transition hover:opacity-40'>Button</button>
        </div>
    </div>
  )
}

export default Layout