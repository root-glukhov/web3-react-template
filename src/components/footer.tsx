import facebookLogo from '@/assets/social/facebook.svg'
import twitterLogo from '@/assets/social/twitter.svg'
import githubLogo from '@/assets/social/github.svg'


export default function Footer() {
  return (
    <div className='flex flex-col items-center bg-neutral-100 text-center text-white dark:bg-slate-700 rounded-lg'>
    <div className='container pt-4'>
      <div className='mb-4 flex justify-center'>
        <a href='#!' className='mr-9 text-neutral-800 dark:text-neutral-200'>
          <img src={facebookLogo} className='h-4 bg-blend-overlay' alt='facebook' />
        </a>
        <a href='#!' className='mr-9 text-neutral-800 dark:text-neutral-200'>
            <img src={twitterLogo} className='h-4' alt='google' />
        </a>
        <a href='#!' className='text-neutral-800 dark:text-neutral-200'>
            <img src={githubLogo} className='h-4' alt='google' />
        </a>
      </div>
    </div>

    <div
      className='w-full p-2 text-center bg-neutral-300 text-neutral-700 dark:bg-slate-800 dark:text-neutral-200'>
      © 2023 Copyright  <a className='text-neutral-800 dark:text-neutral-400' href='https://tailwind-elements.com/'>Web3 React App</a
      >
    </div>
    </div>
  )
}