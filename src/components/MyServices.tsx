import MySection from "@/components/MySection"
import { dt_services } from "@/lib/data"

import {
  DocumentTextIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/solid';

const MyServices = () => {
  const hero = [
    DocumentTextIcon,
    ComputerDesktopIcon,
    ChartBarIcon,
    PuzzlePieceIcon,
  ]

  return (
    <>
      <MySection
        titulo="Servicios"
        descripcion=""
        img_url=""
        alt=""
      ></MySection>

      {dt_services.map((e) => {
        const NewIcon = hero[e.key - 1]
        return (
          <article key={e.key} className={`flex ${e.key % 2 === 0 && "flex-row-reverse"} gap-4 flex-wrap justify-center bg-gray-200 text-gray-500 p-4 mb-4`}>
            <header className='max-w-lg grid gap-4'>
              <h1 className='font-bold text-2xl text-violet-800'>{e.nombre}</h1>
              {e.descripcion.map((d, dIndex) => (
                <p key={dIndex} className='text-sm'>
                  {d}
                </p>
              ))}
            </header>
            <NewIcon className='w-40 text-amber-500 end'></NewIcon>
          </article>
        )
      })}
    </>
  )
}

export default MyServices