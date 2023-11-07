"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image"
import MySection from "@/components/MySection"
import { dt_news } from "@/lib/data"

const MyNews = () => {
  return (
    <section className="flex flex-col gap-4 px-4 pt-8">
      <MySection
        titulo="Novedades"
        descripcion=""
        img_url=""
        alt=""
      ></MySection>

      {dt_news.map(e => (
        <article
          className="flex flex-col gap-4 bg-white p-4 border-1 rounded-md shadow-md"
          key={e.key}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src={e.img_url}
              alt={e.alt}
              height={200}
              width={200}
              style={{ objectFit: "cover", width: "auto" }} 
            ></Image>
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl text-center font-bold text-default-700">{e.title}</h1>
              <p>{e.description}</p>
            </div>
          </div>

          <Accordion variant="shadow">
            <AccordionItem key={e.key} aria-label="Accordion 1" title="Leer Mas...">
              {e.detail.map(d => (
                <p className="mb-2 text-small" key={d.key}><strong>{d.title}:</strong> {d.descripcion}</p>
              ))}
            </AccordionItem>
          </Accordion>
        </article>
      ))}
    </section>
  )
}

export default MyNews