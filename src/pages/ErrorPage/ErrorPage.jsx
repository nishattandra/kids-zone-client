import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from '../../assets/images/errorPage/error1.png'
import useTitle from '../../hooks/useTitle'

const ErrorPage = () => {
  useTitle('Error Page')
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={img} alt="" />
        <div className='max-w-md text-center'>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-bold rounded-lg bg-orange-500 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
