import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Layout from 'components/Layout'

import { ProfileBody } from 'components/Profile/ProfileBody'
import TweetItem from 'components/TweetItem'
import { getUserById, getPostsLiked } from 'store/actions/profile'
import { getPostsByUser } from 'store/actions/tweets'
import { getUser } from 'utils/getUser'
import { ProfileNoUser } from 'components/Skeleton/ProfileNoUser'
import LoadingSpinner from 'assets/svg/LoadingSpinner'

export default function Profile () {
  const dispatch = useDispatch()
  const history = useHistory()

  const { profile, postLiked } = useSelector((state) => state.profile)
  const { tweets } = useSelector((state) => state.tweets)
  const id = history.location.pathname.substring(9)

  const [tabs, setTabs] = useState('Tweets')

  const handleActive = (name) => {
    setTabs(name)
  }

  const Tabs = ({ text }) => {
    return (
      <button
        onClick={() => handleActive(text)}
        className={`${
          text === tabs &&
          'font-bold text-black dark:text-white border-b-4 border-blue1'
        } hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-bodylight  py-3  rounded-sm font-medium text-gray-500 dark:text-gray1`}
      >
        {text}
      </button>
    )
  }

  const TabChild = ({ tab, data }) => (
    <>
      {data.loading
        ? (
          <section className='grid place-content-center mt-10'>
            <LoadingSpinner />
          </section>
          )
        : (
          <>
            {data.data.length === 0
              ? (
                <h1 className='text-xl p-5'>
                  {tab === 1 ? 'Aun no tiene tweets' : 'Aun no likeo ningun tweet'}
                </h1>
                )
              : (
                  data.data.map((tweets, i) => <TweetItem key={i} tweet={tweets} />)
                )}
          </>
          )}
    </>
  )

  useEffect(() => {
    dispatch(getUserById(id))
  }, [])

  useEffect(() => {
    if (profile.data._id) {
      dispatch(getPostsByUser(profile.data._id))
      dispatch(getPostsLiked(profile.data.postLikes))
    }
  }, [profile])

  return (
    <Layout>
      {profile.loading
        ? (
          <section className='grid place-content-center min-h-[50vh]'>
            <LoadingSpinner />
          </section>
          )
        : (
          <>
            {profile.status === 203
              ? (
                <ProfileNoUser />
                )
              : (
                <section>
                  <ProfileBody
                    query={id}
                    profile={profile.data}
                    tweets={tweets.data.length}
                    userData={getUser}
                  />
                  <section>
                    <div className='grid grid-cols-4 text-sm text-center border-b border-graylight dark:border-bodylight pt-5'>
                      <Tabs text='Tweets' />
                      <Tabs text='Tweets y respuestas' />
                      <Tabs text='Fotos y videos' />
                      <Tabs text='Me gusta' />
                    </div>

                    <div>
                      {tabs === 'Tweets' && <TabChild tab={1} data={tweets} />}
                      {tabs === 'Tweets y respuestas' && (
                        <h1 className='text-xl p-5'>
                  Aun no se agrega esta funcionalidad
                      </h1>
                      )}
                      {tabs === 'Fotos y videos' && (
                        <h1 className='text-xl p-5'>
                  Aun no se agrega esta funcionalidad
                      </h1>
                      )}
                      {tabs === 'Me gusta' && <TabChild tab={4} data={postLiked} />}
                    </div>
                  </section>
                </section>
                )}
          </>
          )}
    </Layout>
  )
}
