import Image from "next/image"

interface Props {
  titulo: string,
  descripcion: string,
  img_url: string,
  alt: string,
}

const MySection = (props: Props) => {
  return (
    <section className='grid place-items-center gap-4 px-4'>
      <span className="max-w-6xl">
        <h1 className='titulo text-4xl text-center text-amber-500 py-4'><strong>{props.titulo}</strong></h1>
        <p className='text-gray-500 m-4'>
          {props.descripcion}
        </p>
      </span>
      {props.img_url &&
        <Image
          className="h-auto w-auto"
          src={props.img_url}
          alt={props.alt}
          height={500}
          width={500}
          priority
        ></Image>}
    </section>
  )
}

export default MySection