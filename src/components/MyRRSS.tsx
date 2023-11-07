import Image from "next/image"
import Link from "next/link"

const MyRRSS = () => {
  return (
    <section className="flex justify-center items-center flex-wrap gap-4 bg-white w-full p-4 mt-4">
      <div className=" text-sm">
        <p>+9 787 810 89</p>
        <p>+9 923 612 48</p>
        <p>proceso.agiliza@gmail.com</p>
      </div>

      <div className="flex gap-4">
        <Link href={"https://www.facebook.com/"} target="_blank">
          <Image
            src={"/rs_facebook.webp"}
            alt="Facebook"
            height={40}
            width={40}
          ></Image>
        </Link>

        <Link href={"https://www.instagram.com/"} target="_blank">
          <Image
            src={"/rs_instagram.webp"}
            alt="Instagram"
            height={40}
            width={40}
          ></Image>
        </Link>

        <Link href={"https://www.linkedin.com/"} target="_blank">
          <Image
            src={"/rs_linkedin.webp"}
            alt="Linkedin"
            height={40}
            width={40}
          ></Image>
        </Link>
      </div>
    </section>
  )
}

export default MyRRSS