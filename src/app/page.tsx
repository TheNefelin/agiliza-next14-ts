import MySection from "@/components/MySection"
import MyCardPro from "@/components/MyCardPro"
import MyServices from "@/components/MyServices"
import MyFooter from "@/components/MyFooter"
import { dt_profesionales } from "@/lib/data"
import MyContact from "@/components/MyContact"
import MyRRSS from "@/components/MyRRSS"

export default function Home() {
  return (
    <main>
      <MySection
        titulo="Juntos hacemos crecer tu negocio"
        descripcion="Todos necesitamos crecer, evolucionar.  El mundo actual nos recuerda que es necesario adaptarnos a los cambios del entorno. Pasar al siguiente nivel es lo más natural, pero no siempre lo más fácil, pero para eso, te podemos ayudar, analizamos tus procesos y detectamos posibles mejoras para aumentar tu eficiencia y fidelizar a tus clientes."
        img_url="/procesos.webp"
      ></MySection>

      <div id="QuienesSomos">
        <MySection
          titulo="Quienes Somos"
          descripcion="Somos un equipo de trabajo con experiencia optimizando procesos de negocios. Después de trabajar como dependientes, decidimos unir fuerzas para ayudar a otros. Creamos este espacio para poner a tu disposición nuestra experiencia y así alcanzar juntos los objetivos que te están costando lograr."
          img_url=""
        ></MySection>
      </div>

      <section className="flex flex-wrap gap-4 p-4 justify-center">
        {dt_profesionales.map((e, eIndex) => (
          <MyCardPro
            key={eIndex}
            nombre={e.nombre}
            carrera={e.carrera}
            universidad={e.universidad}
            descripcion={e.descripcion}
            img_url={e.img_url}
          ></MyCardPro>
        ))}
      </section>

      <div id="Servicios">
        <MySection
          titulo="Servicios"
          descripcion=""
          img_url=""
        ></MySection>
      </div>

      <MyServices></MyServices>

      <div id="Contactanos">
        <MySection
          titulo="Contáctanos"
          descripcion="Proceso Agiliza siempre buscará superar tus expectativas. ¿Tienes alguna pregunta, comentario o solicitud? Queremos saber de ti. No dudes en contactarnos."
          img_url=""
        ></MySection>
      </div>      

      <MyContact></MyContact>

      <MyRRSS></MyRRSS>

      <MyFooter></MyFooter>
    </main>
  )
}
