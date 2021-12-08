export default function About (){
  return (
    <div className='bg-fixed' style={{backgroundImage: "url(bg-about.png)", backgroundSize: '100%', width: '100%', height: '100%'}}>
      <div className='py-10' id='about'>
        <h4 className='text-center'>
          <span className='font-bold px-3 text-2xl text-my_main-25 tracking-wider'>私について</span>
          <span className=' text-my_main-13 tracking-wider'>ABOUT</span>
        </h4>
      </div>
      {/* 私についての３要素の作成 */}
      <section className='pb-20'>
        <div className="container px-10 sm:px-32 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
            <div className='px-5'>
              <img src="about-1.png" alt="趣味の画像" style={{display: "block; margin: auto;", width: 'auto', height: 'auto'}}/>
              <h1 className="mt-4 text-xl text-my_main-13 font-bold text-center tracking-wider">趣味</h1>
              <p className="mt-2 leading-5 text-my_main-25 tracking-wider">
                性格のところにも記載しますが、年齢は３８歳ですが精神年齢は１５歳でとまっています。<br />
                精神年齢が低いので、子供達にいたずらすることが一番の楽しみです。上の子が年頃なので、そろそろやめます。<br />
                私の中で「趣味=習慣化」と考えていますので、習慣化していることは<br />
                ①朝活 ②MacBookを毎日開くこと ③筋トレ<br />
                ③の筋トレで、いつまでもかっこいい、いかした父親を目指しています。
              </p>
            </div>
            <div className='px-5'>
              <img src="about-2.png" alt="好きな食べ物の画像" style={{display: 'block; margin: auto;', width: 'auto', height: 'auto'}}/>
              <h1 className="mt-4 text-xl text-my_main-13 font-bold text-center tracking-wider">好きな食べ物</h1>
              <p className="mt-2 leading-5 text-my_main-25 tracking-wider">
                みかんが大好きです！<br />
                冬は大嫌いですが、みかんがあるので耐えられます。「こたつとみかん」は最強コンビです。<br />
                大人になってからは控えるようになりましたが、子供の頃みかんの食べ過ぎで手が黄色くなりました。<br />
                好きなものに対しては、とことん突き詰めるタイプです。<br />
                昔はお肉大好きでしたが、今はそこまで食べたいと思わなくなりました。年でしょうか…
              </p>
            </div>
            <div className='px-5'>
              <img src="about-3.png" alt="性格の画像" style={{display: 'block; margin: auto;', width: 'auto', height: 'auto'}}/>
              <h1 className="mt-4 text-xl text-my_main-13 font-bold text-center tracking-wider">性格</h1>
              <p className="mt-2 leading-5 text-my_main-25 tracking-wider">
                精神年齢が低い（常に少年）、好きなもの・興味あるものに対しての集中力、こだわりが高い。<br />
                そうです、典型的なB型です。血液型を聞かれたとき、B型と伝えると「あ、なるほどね」と、毎回変に納得した返答が返ってきます。<br />
                その反面、不得意なこと、興味が持てないことに対し、うまく注力できないことが欠点です。<br />
                欠点は自身で把握していますので、周りの方に協力して頂くことを意識しています。
              </p>
            </div>
          </div>
        </div>
      </section>
    {/* 私についての３要素の作成、終了 */}
    </div>
  )
}