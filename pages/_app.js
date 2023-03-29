import { ResumeContext } from '@/context/resumeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ResumeContext>
         <Component {...pageProps} />
      </ResumeContext>
  
}
