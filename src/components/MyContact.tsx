import { Button, Input, Textarea } from "@nextui-org/react";

const MyContact = () => {
  return (
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
  )
}

export default MyContact