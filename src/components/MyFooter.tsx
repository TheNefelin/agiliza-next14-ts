import Link from "next/link"

function MyFooter() {
  return (
    <footer className="flex gap-1 justify-center p-4 bg-black text-white text-sm h-auto">
      <p>Powered By |</p>
      <Link href={"https://www.francisco-dev.cl/"} target="_blank">@Nefelin</Link>
      <p>, legacy &#10132;</p>
      <Link href={"https://www.proceso-agiliza.cl/"} target="_blank">(www)</Link>
    </footer>
  )
}

export default MyFooter