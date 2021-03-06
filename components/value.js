export default function Values(){
  return (
    <div className='bg-fixed' style={{backgroundImage: 'url(bg-future.png)', backgroundSize: '100%',  width: '100%', height: '100%'}}>
      <div id='value' className='mx-5 bg-white rounded-lg'>
        <div className='py-10'>
          <h4 className='text-center'>
            <span className='font-bold px-3 text-2xl text-my_main-25 tracking-wider'>価値観</span>
            <span className=' text-my_main-13 tracking-wider'>VALUES</span>
          </h4>
        </div>
        {/* 価値観の３要素の作成 */}
        <section>
          <div className="container px-6 py-8 mx-auto">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:border-b-0">
              <div className='px-10 border-[#c5eaea] border-b-4 lg:border-b-0 lg:border-r-4'>
                <img src="value1.png" alt="" style={{display: 'block; margin: auto;', width: '200px', height: '200px'}}/>
                <h1 className="mt-8 text-xl text-my_main-25 font-bold text-center tracking-wider">相手の立場で考える</h1>
                <p className="my-10 leading-5 text-my_main-25 tracking-wider">
                  自身の言動を客観的に見ることは、難しいのではないかと考えています。しかし、自分を客観的にみることは大切です。ではどうするか？<br />
                  私は自身の言動が相手の立場になっているか？を常に意識するようにしています。もしろんできてないときもありますが、意識していることで
                  すぐに振り返ることができます。<br />
                  できていなければ、原因の確認と次はどうするのかまで考えるようにしています。
                </p>
              </div>
              <div className='px-10 border-[#c5eaea] border-b-4 lg:border-b-0 lg:border-r-4'>
                <img src="value2.png" alt="" style={{display: 'block; margin: auto;', width: '200px', height: '200px'}}/>
                <h1 className="mt-8 text-xl text-my_main-25 font-bold text-center tracking-wider">後悔せずやる</h1>
                <p className="my-10 leading-5 text-my_main-25 tracking-wider">
                  やりたいと思ったとき、思ったことはやろう！と、考えています。後先を考えていない、と捉えられるかもしれませんが。<br />
                  「行動すること」が全てのスタートですし、重要だと考えています。行動の原動力となっているのが「やりたいならやる！」の考えです。<br />
                  ここ２年、まだまだ不足していますが私なりに行動してきました。行動したことで新しい人との出会い、チャンスも得ることが出来ました。
                </p>
              </div>
              <div className='px-10'>
                <img src="value3.png" alt="" style={{display: 'block; margin: auto;', width: '200px', height: '200px'}}/>
                <h1 className="mt-8 text-xl text-my_main-25 font-bold text-center tracking-wider">常に謙虚で</h1>
                <p className="my-10 leading-5 text-my_main-25 tracking-wider">
                  今の私があるのは、今まで出会った全ての人によって形成されています。これは全ての人に言えることだと考えています。<br />
                  生きていく上で、数多くの人との出会いがあります。その出会いをより価値あるものにするためには、
                  「常に謙虚」であり、相手から学ぶ姿勢が重要であると考えています。
                  今いる環境から、相手から多くのことを学ぶ機会が自然と増えるためには、「常に謙虚な姿勢」が不可欠だと考えています。
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 価値観の３要素の作成、終了 */}
      </div>
      {/* 3年後にやりたいこと作成 */}
      <div id='future' className='px-10 pb-10 md:flex justify-center pt-20'>
          <div className='mr-5 xl:pl-52'>
            <h1 className='md:text-left'>
              <span className='font-bold pr-3 text-2xl text-my_main-25 tracking-wider'>３年後にやりたいこと</span>
              <span className=' text-my_main-13 tracking-wider'>FUTURES</span>
            </h1>
            <p className='py-5 leading-5 text-my_main-25 tracking-wider'>
              父親として、社会人としての２つの目標を設定しています。
              ◎父親として：子供が２人いますが、自分の子供達に恥じない、世の中に貢献している姿を見せていきたい、
              見せられるように成長すること。<br />
              ◎社会人として：世の中の課題に対して、具体的に取り組んでいる、取り組める人材を目指。
            </p>
          </div>
        <img src="future.png" alt="３年後の画像" className='mx-auto xl:pr-52' width='800px' height='500px' />
      </div>
      {/* 3年後にやりたいこと作成、終了 */}
    </div>
  )
}