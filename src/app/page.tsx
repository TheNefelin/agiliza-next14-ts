import MySection from "@/components/MySection"
import MyCardPro from "@/components/MyCardPro"
import MyServices from "@/components/MyServices"
import MyContact from "@/components/MyContact"

export default function Home() {
  return (
    <main className="py-8">
      <MySection
        titulo="Juntos hacemos crecer tu negocio"
        descripcion="Todos necesitamos crecer, evolucionar.  El mundo actual nos recuerda que es necesario adaptarnos a los cambios del entorno. Pasar al siguiente nivel es lo más natural, pero no siempre lo más fácil, pero para eso, te podemos ayudar, analizamos tus procesos y detectamos posibles mejoras para aumentar tu eficiencia y fidelizar a tus clientes."
        img_url="/procesos.webp"
        alt="Diagrama Mejora de Procesos"
      ></MySection>

      <div id="id_quienes_somos" className="pb-16"></div>
      <MyCardPro></MyCardPro>

      <div id="id_servicios" className="pb-16"></div>
      <MyServices></MyServices>

      <div id="id_contactanos" className=" pb-16"></div>      
      <MyContact></MyContact>
    </main>
  )
}
