import LoadingSpinner from 'assets/svg/LoadingSpinner'
import React from 'react'
import { Link } from 'react-router-dom'

export function Trending ({ trends }) {
  return (
    <section className='flex flex-col rounded-2xl bg-bodylight mt-5 min-h-[61vh] h-[61vh]'>
      {trends.loading
        ? (
          <div className='grid place-content-center min-h-full'>
            <LoadingSpinner />
          </div>
          )
        : (
          <>
            <h1 className='text-lg text-black dark:text-white font-bold py-2 mx-5'>
              Qué está pasando
            </h1>

            <div className='flex flex-col h-[88%]'>
              {trends.data.map((v, i) => (
                <Link
                  to={`/search?q=${v[0]}`}
                  key={i}
                  className='hover:bg-gray1 hover:bg-opacity-10 dark:bg-opacity-10 cursor-pointer'
                >
                  <div className='py-3 overflow-hidden mx-5'>
                    <h1 className='text-xl font-semibold'> {v[0]}</h1>
                    <p>{v[1]} Tweets</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className='cursor-pointer mx-5 py-2'>
              <h1 className='text-sm text-blue1 font-bold'>Mostrar mas</h1>
            </div>
          </>
          )}
    </section>
  )
}
