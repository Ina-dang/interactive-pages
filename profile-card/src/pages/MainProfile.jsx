import classNames from 'classnames'
import React from 'react'
import { LiaBookmark, LiaBarsSolid } from 'react-icons/lia'
import { IMAGES } from '../assets'

const MainProfilePage = () => {
  const IECheck = navigator.userAgent
  const classContainer = classNames('Pages MainProfilePage')
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
          <img src={IMAGES.member1} alt="프로필 이미지" />
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

export { MainProfilePage }
