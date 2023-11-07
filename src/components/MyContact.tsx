import { Button, Input, Textarea } from "@nextui-org/react";
import MySection from "@/components/MySection"

const MyContact = () => {
  return (
    <>
      <MySection
        titulo="Contáctanos"
        descripcion="Proceso Agiliza siempre buscará superar tus expectativas. ¿Tienes alguna pregunta, comentario o solicitud? Queremos saber de ti. No dudes en contactarnos."
        img_url=""
        alt=""
      ></MySection>

      <section className="flex justify-center">
        <form className="w-full flex flex-col gap-4 max-w-xl backdrop-blur-md bg-white/30 shadow-lg p-4 mx-4">
          <Input type="text" label="Nombre" />
          <Input type="email" label="Email" />
          <Input type="number" label="Teléfono" />
          <Textarea
            label="Mensaje"
            placeholder="Escribe tu mensaje aqui..."
          />
          <Button color="secondary">
            Enviar
          </Button>
        </form>
      </section>
    </>
  )
}

export default MyContact