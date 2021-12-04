export default function Header(props){
  return (
    <div>
      <div id='header' className='bg-white border-b-2 border-[#e3efef] sm:static'>
        {/* メニューバーの作成 */}
        <div className='flex items-center justify-between'>
          <div className='w-40 py-2 hover:opacity-75'>
            <a href="#header">
              <img src="logo.png" alt="ヘッダーの画像" />
            </a>
          </div>
          <div className='py-2 mx-4 hidden md:block'>
            <div className='flex justify-between text-my_main-25'>
              <a href="#about">
                <div className='mx-5 font-bold cursor-pointer duration-300 hover:text-my_main-13'>ABOUT</div>
              </a>
              <a href="#skill">
                <div className='mx-5 font-bold cursor-pointer duration-300 hover:text-my_main-13'>SKILLS</div>
              </a>
              <a href="#value">
                <div className='mx-5 font-bold cursor-pointer duration-300 hover:text-my_main-13'>VALUES</div>
              </a>
              <a href="#future">
               <div className='mx-5 font-bold cursor-pointer duration-300 hover:text-my_main-13'>FUTURE</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* メニューバーの終了 */}

      {/* ヘッダーの作成 */}
      <div className='bg-[#6bc2c3]'>
        <div className='text-center md:flex justify-between'>
          <div className='text-white md:mx-40 my-auto'>
            <p className='text-3xl font-bold md:text-4xl'>私のプロフィール</p>
            <p className='text-2xl text-gray-100 pt-2 xl:text-3xl'>〜片山真介〜</p>
          </div>
          <div className=''>
            <img className='mx-auto md:mr-20 py-10' src="hero.png" alt="プロフィール画像" />
          </div>
        </div>
      {/* ヘッダーの終了 */}
      </div>
    </div>
  )
}