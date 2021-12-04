export default function Values(){
  return (
    <div className='bg-fixed' style={{backgroundImage: 'url(bg-future.png)', backgroundSize: '100%'}}>
      <div id='value' className='mx-5 bg-white rounded-lg'>
        <div className='py-10'>
          <h4 className='text-center'>
            <span className='font-bold px-3 text-2xl text-my_main-25'>価値観</span>
            <span className=' text-my_main-13'>VALUES</span>
          </h4>
        </div>
        {/* 価値観の３要素の作成 */}
        <section>
          <div className="container px-6 py-8 mx-auto">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:border-b-0">
              <div className='px-10 border-[#c5eaea] border-b-4 lg:border-b-0 lg:border-r-4'>
                <img src="value1.png" alt="" style={{display: 'block; margin: auto;'}}/>
                <h1 class="mt-8 text-xl text-my_main-25 font-bold text-center">相手の立場で考える</h1>
                <p class="my-10 leading-5 text-my_main-25">
                  <p>
                    自身の言動を客観的に見ることは、難しいのではないかと考えています。しかし、自分を客観的にみることは大切です。ではどうするか？
                  </p>
                  <p>
                    私は自身の言動が相手の立場になっているか？を常に意識するようにしています。もしろんできてないときもありますが、意識していることで
                    すぐに振り返ることができます。
                  </p>
                  <p>
                    できていなければ、原因の確認と次はどうするのかまで考えるようにしています。
                  </p>
                </p>
              </div>
              <div className='px-10 border-[#c5eaea] border-b-4 lg:border-b-0 lg:border-r-4'>
                <img src="value2.png" alt="" style={{display: 'block; margin: auto;'}}/>
                <h1 class="mt-8 text-xl text-my_main-25 font-bold text-center">後悔せずやる</h1>
                <p class="my-10 leading-5 text-my_main-25">
                  <p>
                    やりたいと思ったとき、思ったことはやろう！と、考えています。後先を考えていない、と捉えられるかもしれませんが…
                  </p>
                  <p>
                    「行動すること」が全てのスタートですし、重要だと考えています。その行動する原動力となっているのが「やりたいならやる！」の考えです。
                  </p>
                  <p>
                    ここ２年、まだまだ不足していますが私なりに行動してきました。行動したことで新しい人との出会い、チャンスも得ることが出来ました。
                  </p>
                </p>
              </div>
              <div className='px-10'>
                <img src="value3.png" alt="" style={{display: 'block; margin: auto;'}}/>
                <h1 class="mt-8 text-xl text-my_main-25 font-bold text-center">常に謙虚で</h1>
                <p class="my-10 leading-5 text-my_main-25">
                  <p>
                    今の私があるのは、今まで出会った全ての人から形成されています。これは全ての人に言えることだと思います。
                  </p>
                  <p>
                    生きていく上で、数多くの人との出会いがあります。その出会いをより価値あるものにするためには、<span className='font-bold'>「常に謙虚」</span>
                    であり、相手から学ぶ姿勢が重要であると考えています。
                  </p>
                  <p>
                    その環境から、相手から多くのことを学べる機会が自然と増えるには、「常に謙虚な姿勢」が私には不可欠です。
                  </p>
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
              <span className='font-bold pr-3 text-2xl text-my_main-25'>３年後にやりたいこと</span>
              <span className=' text-my_main-13'>FUTURES</span>
            </h1>
            <p className='py-5 leading-5 text-my_main-25 md:'>
              <p>
                父親として、社会人としての２つで目標を設定したいと考えています。
              </p>
              <p>
                ◎父親として：子供が２人いますが、自分の子供達に恥じない、誇れる姿で世の中に貢献している姿を
                見せられるために、成長していくこと。
              </p>
              <p></p>
              <p></p>
            </p>
          </div>
        <img src="future.png" alt="３年後の画像" className='mx-auto xl:pr-52' />
      </div>
      {/* 3年後にやりたいこと作成、終了 */}
    </div>
  )
}