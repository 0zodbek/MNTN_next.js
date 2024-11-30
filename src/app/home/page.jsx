import React from 'react'
import { Cormorant } from 'next/font/google';

const chronicleDisplay = Cormorant({
  subsets: ['latin'],
  weight: ['600'],
});

function page() {
 
  return (
    <div>
      <h1 className={chronicleDisplay.className}>Chronicle Display shriftida sarlavha</h1>
      <p>Bu matn boshqa shriftlarda.</p>
    </div>
  )
}

export default page

