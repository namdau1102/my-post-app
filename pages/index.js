import Head from 'next/head'
import Image from 'next/image'

import Post from '../src/Components/Post'
import styles from '../styles/Home.module.scss'

import PostForm from '../src/Components/PostForm'
import Bio from '../src/Components/Bio/Bio'
import { useAuth } from '../src/hooks/useAuth'
import { useEffect, useState } from 'react'
import { createPosts, getAllPosts } from '../src/lib/posts'
export default function Home({ posts: defaultPosts }) {

  const { user, logIn, logOut } = useAuth();
  const [posts, updatePosts] = useState(defaultPosts)
  const postsSorted = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  const handleOnSubmit = async (data, e) => {
    e.preventDefault();
    await createPosts(data)
    const posts = await getAllPosts();
    updatePosts(posts)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        {
          !user && (
            <button onClick={logIn}>Log In!</button>

          )
        }
        {
          user && (
            <button onClick={logOut}>Log Out!</button>
          )
        }
      </p>
      <main className={styles.main}>
        <Bio
          headshot="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/274450527_686455959061577_8143687573055724049_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=mOArivM0WlEAX_hgQ2k&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_XqIaQpznjozpclXLNHQGhzjMXYsAJ_j7KH8byyplGWg&oe=6286AD8D"
          name="Đậu Văn Nam"
          tagline="#FPT #HAPPYBEE11"
          role="1 Nhà Lập Trình Viên"
        />
        <ul className={styles.posts}>
          <div className={styles.leftMess}>
            {
              !postsSorted ? <>
                <h2>Đang tải</h2>
              </> : postsSorted.map((post, index) => {
                const { content, id, date, account } = post
                if (index < 10)
                  return (
                    <li key={id}>
                      <Post
                        content={content}
                        date={new Intl.DateTimeFormat('en-US').format(new Date(date))}
                        user={account}
                      />

                    </li>
                  )
              })
            }
          </div>
          <div>
            <h3>Các thành viên hoạt động</h3>
          </div>

        </ul>
        <PostForm onSubmit={handleOnSubmit} />
      </main>

    </div>
  )
}
export const getServerSideProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    }
  }
}
