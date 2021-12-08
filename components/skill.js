export default function Skill(){
  return (
    <div className='bg-fixed' style={{backgroundImage: 'url(bg-skills.png)', backgroundSize: '100%',  width: '100%', height: '100%'}}>
      <div className='py-20 md:flex justify-center'>
        <img  className='py-5 md:mr-10' src="skill.png" alt="スキルの画像" />
        <div id='skill'>
          <div className='px-10'>
            <h1 className='text-left pt-5'>
              <span className='font-bold pr-3 text-2xl text-my_main-25 tracking-wider'>スキル</span>
              <span className=' text-my_main-13 tracking-wider'>SKILLS</span>
            </h1>
            <p className='py-5 leading-5 text-my_main-25 tracking-wider'>
              こちらのスキルは私個人の勝手な判断でつけています。ご了承くださいませ。
            </p>
          </div>
          <div className='mx-5 bg-white rounded-md'>
            <div className="relative pt-3">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xl inline-block py-1 px-2 ml-8 uppercase rounded-full text-my_main-13">
                  ビジネススキル
                  </span>
                </div>
                <div className="text-right pr-8">
                  <span className="text-sm inline-block text-my_main-13">
                  50%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-4 mx-8 mb-4 text-xs flex rounded bg-[#c5eaea]">
                <div style={{width: "50%;"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"></div>
              </div>
            </div>
            <div className="relative pt-3">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xl inline-block py-1 px-2 ml-8 uppercase rounded-full text-my_main-13">
                  コミュニケーション
                  </span>
                </div>
                <div className="text-right pr-8">
                  <span className="text-sm inline-block text-my_main-13">
                  40%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-4 mx-8 mb-4 text-xs flex rounded bg-[#c5eaea]">
                <div style={{width: "40%;"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"></div>
              </div>
            </div>
            <div className="relative pt-3">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xl inline-block py-1 px-2 ml-8 uppercase rounded-full text-my_main-13">
                  プログラミング
                  </span>
                </div>
                <div className="text-right pr-8">
                  <span className="text-sm inline-block text-my_main-13">
                  60%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-4 mx-8 mb-4 text-xs flex rounded bg-[#c5eaea]">
                <div style={{width: "60%;"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"></div>
              </div>
            </div>
            <div className="relative pt-3 pb-5">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xl inline-block py-1 px-2 ml-8 uppercase rounded-full text-my_main-13">
                  マーケティング
                  </span>
                </div>
                <div className="text-right pr-8">
                  <span className="text-sm inline-block text-my_main-13">
                  50%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-4 mx-8 mb-4 text-xs flex rounded bg-[#c5eaea]">
                <div style={{width: "50%;"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#2bb9ba]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}