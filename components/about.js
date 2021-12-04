export default function About (){
  return (
    <div className='bg-fixed' style={{backgroundImage: "url(bg-about.png)", backgroundSize: '100%'}}>
      <div className='py-10' id='about'>
        <h4 className='text-center'>
          <span className='font-bold px-3 text-2xl text-my_main-25'>私について</span>
          <span className=' text-my_main-13'>ABOUT</span>
        </h4>
      </div>
      {/* 私についての３要素の作成 */}
      <section className='pb-20'>
        <div className="container px-10 sm:px-32 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
            <div className='px-5'>
              <img src="about-1.png" alt="趣味の画像" style={{display: "block; margin: auto;"}}/>
              <h1 className="mt-4 text-xl text-my_main-13 font-bold text-center">趣味</h1>
              <p className="mt-2 leading-5 text-my_main-25">
                子供にいたずらすることが好きですが、そろそろ嫌われそうなのでやめようと思います。
                習慣化していることは、①朝活（４時位から）②MacBookを毎日開くこと③筋トレ
                この３つはもう趣味と言っても過言ではありません。学生時代はギターをやっていました。最近全くやっていない…
              </p>
            </div>
            <div className='px-5'>
              <img src="about-2.png" alt="好きな食べ物の画像" style={{display: 'block; margin: auto;'}}/>
              <h1 className="mt-4 text-xl text-my_main-13 font-bold text-center">好きな食べ物</h1>
              <p className="mt-2 leading-5 text-my_main-25">
                フルーツが大好きです。特にみかん！冬は大嫌いですが、みかんがあるので耐えられます。
                  大人になってからは控えるようになりましたが、子供の時はみかんを食べすぎて手が黄色くなったことがあります。
                  昔はお肉も大好きでしたが、年なのでしょうか…最近、「肉食べたい！」という衝動がなくなりました…
              </p>
            </div>
            <div className='px-5'>
              <img src="about-3.png" alt="性格の画像" style={{display: 'block; margin: auto;'}}/>
              <h1 className="mt-4 text-xl text-my_main-13 font-bold text-center">性格</h1>
              <p className="mt-2 leading-5 text-my_main-25">
                典型的なB型なのではないでしょうか！？
                  好きなこと、取り組むと決めたことに対しての集中力、持続力は凄まじいです。その反面、他のことが疎かになることが欠点です。
                  妻からよく怒られます…
                「１人で生きていける自信がありません！」by モンキー・D・ルフィー
              </p>
            </div>
          </div>
        </div>
      </section>
    {/* 私についての３要素の作成、終了 */}
    </div>
  )
}