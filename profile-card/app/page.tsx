import classNames from 'classnames'
import { LiaBookmark, LiaBarsSolid } from 'react-icons/lia'
import Image from 'next/image'

export default function Home() {
  const classContainer = classNames('Pages MainProfilePage')
  const IECheck = typeof window !== 'undefined' ? navigator.userAgent : ''
  if (/trudebt/i.test(IECheck)) {
    alert('익스플로러 브라우저로 접속하셨네요. 이 웹페이지는 익스플로러를 지원하지 않습니다.')
  }
  return (
    <main className={classContainer}>
      <section>
        <nav className="menu">
          <a href="#">
            <LiaBarsSolid />
          </a>
          <a href="#">
            <LiaBookmark />
          </a>
        </nav>
        <article className="profile">
          <Image src="/member1.png" alt="프로필 이미지" width={200} height={200} />
          <h1>Inadang</h1>
          <h2>Frontend Developer</h2>

          <a href="#" className="btnView">
            VIEW MORE...
          </a>
        </article>
      </section>
    </main>
  )
}
