export default function Footer(){
  return (
    <div>
      <div className='bg-[#262c3a] sm:static'>
        <p className='text-white text-center py-5'><span className='px-5'>CREATED BY</span><span className='text-2xl font-bold'>片山　真介</span></p>
        <div className='w-16 mx-auto py-3'>
          <a href="#header">
           <img src="logo_white.png" alt="フッターの画像" className='hover:opacity-75' />
          </a>
        </div>
        <div className='flex justify-center py-0.5'>
          <a href="https://twitter.com/katashin_3812" target='_blank'>
            <img src="twitter.png" alt="Twitterの画像" className='w-12 px-3 hover:opacity-75'/>
          </a>
          <img src="facebook.png" alt="Facebookの画像" className='w-12 px-3 hover:opacity-75'/>
        </div>
        <div className='text-white text-center py-5'>
          © 2021 Shinsuke Katayama
        </div>
      </div>
    </div>
  )
}