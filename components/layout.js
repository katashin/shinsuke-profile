import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import About from './about'
import Skill from './skill'
import Values from './value'

export default function Layout(props){
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header></Header>
      <About className='container'></About>
      <Skill className=''></Skill>
      <Values className=''></Values>
      <div className='text-center'>
        <p>{props.children}</p>
      </div>
      <Footer></Footer>
    </div>
  )
}