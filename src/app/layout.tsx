import type { Metadata } from 'next'
import { roboto } from '@/lib/fonts'
import './globals.css'
import MyNavBar from '@/components/MyNavBar'
import Image from 'next/image'

// text-violet-800
// text-gray-500
// text-amber-500
// text-cyan-300

export const metadata: Metadata = {
  title: 'Proceso Agiliza',
  description: 'Define tus objetivos, Mide tus procesos, Optimiza tus Actividades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" id="Inicio">
      <body className={`${roboto.className} relative`}>

        <Image
          id='background'
          src={"/background.jpg"}
          alt='background'
          width={1000}
          height={1000}
        />

        <MyNavBar></MyNavBar>

        {children}
      </body>
    </html>
  )
}
