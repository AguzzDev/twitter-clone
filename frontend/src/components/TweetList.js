import TweetItem from './TweetItem'
import LoadingSpinner from 'assets/svg/LoadingSpinner'

export function TweetList ({ tweets }) {
  return (
    <>
      {tweets.loading
        ? (
          <div className='flex justify-center w-full mt-3'>
            <LoadingSpinner />
          </div>
          )
        : (
          <>
            {tweets.status === 204
              ? (
                <div className='grid place-content-center mt-10'>
                  <h1 className='text-2xl font-medium'>Aun no hay tweets</h1>
                  <h2>Se el primero!</h2>
                </div>
                )
              : (
                  tweets.data.map((tweet, i) => {
                    return <TweetItem key={i} tweet={tweet} />
                  })
                )}
          </>
          )}
    </>
  )
}
