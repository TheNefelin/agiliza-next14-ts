import Link from "next/link"

function MyFooter() {
  return (
    <footer className="flex justify-center p-2 bg-black text-white text-sm">
      <Link href={"https://www.francisco-dev.cl/"} target="_blank">Powered By @Nefelin</Link>
    </footer>
  )
}

export default MyFooter