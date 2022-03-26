import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Layout from "../../components/Layout"

import { ProfileBody } from "../../components/Profile/ProfileBody"
import TweetItem from "../../components/TweetItem"
import { getUserById } from "../../store/actions/profile"
import { getPostsByUser } from "../../store/actions/tweets"

export default function Profile() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { profile } = useSelector((state) => state.profile)
  const { tweets } = useSelector((state) => state.tweets)
  const id = history.location.pathname.substring(9)

  const [tabs, setTabs] = useState("Tweets")

  const handleActive = (name) => {
    setTabs(name)
  }

  const Tabs = ({ text }) => {
    return (
      <button
        onClick={() => handleActive(text)}
        className={`${
          text === tabs &&
          "font-bold text-black dark:text-white border-b-4 border-blue1"
        } hover:bg-gray1 hover:bg-opacity-40 dark:hover:bg-bodylight  py-3  rounded-sm font-medium text-gray-500 dark:text-gray1`}
      >
        {text}
      </button>
    )
  }

  useEffect(() => {
    dispatch(getUserById(id))
  }, [])

  useEffect(() => {
    if (profile._id) {
      dispatch(getPostsByUser(profile._id))
    }
  }, [profile])

  return (
    <Layout>
      {profile && (
        <>
          <ProfileBody query={id} profile={profile} tweets={tweets.length} />
          <div className="grid grid-cols-4 text-sm text-center border-b border-graylight dark:border-bodylight pt-5">
            <Tabs text="Tweets" />
            <Tabs text="Tweets y respuestas" />
            <Tabs text="Fotos y videos" />
            <Tabs text="Me gusta" />
          </div>

          <div>
            {tabs === "Tweets" &&
              tweets
                .map((items, i) => (
                  <TweetItem
                    key={i}
                    isAdmin={items.isAdmin}
                    userId={items._id}
                    id={items._id}
                    selectedFile={items.selectedFile}
                    username={items.username}
                    createdAt={items.createdAt}
                    content={items.content}
                    userImage={items.userImage}
                    likeCount={items.likeCount}
                    name={items.name}
                  />
                ))
                .reverse()}
                
            {tabs === "Tweets y respuestas" && <h1>asd</h1>}
            {tabs === "Fotos y videos" && <h1>asd</h1>}
            {tabs === "Me gusta" && <h1>asd</h1>}
          </div>
        </>
      )}
    </Layout>
  )
}
