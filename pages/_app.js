import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return(
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <footer>
        ™️ Bri Guy {new Date().getFullYear()} PGLv3
      </footer>
    </div>
    ) 
    
}
