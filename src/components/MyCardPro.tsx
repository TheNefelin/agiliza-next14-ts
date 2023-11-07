import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import MySection from "@/components/MySection"
import { dt_profesionales } from "@/lib/data"

const MyCardPro = () => {
  return (
    <>
      <MySection
        titulo="Quienes Somos"
        descripcion="Somos un equipo de trabajo con experiencia optimizando procesos de negocios. Después de trabajar como dependientes, decidimos unir fuerzas para ayudar a otros. Creamos este espacio para poner a tu disposición nuestra experiencia y así alcanzar juntos los objetivos que te están costando lograr."
        img_url=""
        alt=""
      ></MySection>

      <section className="flex flex-wrap gap-4 p-4 justify-center">
        {dt_profesionales.map(e => (
          <Card key={e.key} className="max-w-[400px] shadow-xl">
            <CardHeader className="flex gap-4 p-4">
              <Avatar isBordered radius="full" className="w-36 h-36" src={e.img_url} />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-700">{e.nombre}</h4>
                <h5 className="text-small tracking-tight text-default-400">{e.carrera}</h5>
                <h5 className="text-small tracking-tight text-default-400">{e.universidad}</h5>
              </div>
            </CardHeader>
            <CardBody>
              {e.descripcion}
            </CardBody>
          </Card>
        ))}
      </section>
    </>
  );
}

export default MyCardPro