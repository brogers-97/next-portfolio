import styles from '@/styles/About.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function About(){

    const [fontSize, setFontSize] = useState(3)

    return(
        <div>
            <style jsx>{`
                .bigHeader {
                    font-size: ${fontSize}rem;
                }
            `}</style>
            <h1 className='bigHeader'>About me</h1>

            <p className={styles.blueText}>I am a super cool software engineer now</p>
            <ul>Here is what I do
                <li>get giga info</li>
            </ul>
            <button onClick={() => setFontSize(fontSize + 1)}>Growww baby Growww</button>

            <Image 
                src='/next.svg'
                alt='next logo'
                width={200}
                height={50}
            />

            <Image 
                src='https://placekitten.com/450/450'
                alt='an stupid cat'
                width={450}
                height={450}
            />

        </div>
    )
}