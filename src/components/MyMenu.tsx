// "use client"

import Link from "next/link";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { dt_links } from "@/lib/data";

const MyMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color="secondary"
          variant="bordered"
        >
          Abrir Menú
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={dt_links}>
        {(item: any) => (
          <DropdownItem key={item.key} href={item.url} textValue={item.label}>
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

export default MyMenu