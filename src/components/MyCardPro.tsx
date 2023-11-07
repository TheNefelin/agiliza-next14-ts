import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

interface Props {
  nombre: string, 
  carrera: string,
  universidad: string,
  descripcion: string,
  img_url: string,
}

const MyCardPro = (props : Props) => {
  return (
    <Card className="max-w-[400px] shadow-xl">
      <CardHeader className="flex gap-4 p-4">
        <Avatar isBordered radius="full" className="w-36 h-36" src={ props.img_url } />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="text-small font-semibold leading-none text-default-700">{ props.nombre }</h4>
          <h5 className="text-small tracking-tight text-default-400">{ props.carrera }</h5>
          <h5 className="text-small tracking-tight text-default-400">{ props.universidad }</h5>
        </div>
      </CardHeader>
      <CardBody>
        { props.descripcion }
      </CardBody>
    </Card>
  );
}

export default MyCardPro