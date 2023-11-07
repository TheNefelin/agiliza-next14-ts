import Image from "next/image"

interface Props {
  titulo: string,
  descripcion: string,
  img_url: string
}

const MyBanner = (props: Props) => {
  return (
    <section className='grid place-items-center gap-4 m-8'>
      <span>
        <h1 className='titulo text-4xl text-center text-amber-500'><strong>{props.titulo}</strong></h1>
        {props.descripcion &&
          <p className='text-gray-500 mt-4'>
            {props.descripcion}
          </p>}
      </span>
      {props.img_url &&
        <Image
          className="h-auto w-auto"
          src={"/procesos.webp"}
          alt="Diagrama Mejora de Procesos"
          height={500}
          width={500}
        ></Image>}
    </section>
  )
}

export default MyBanner