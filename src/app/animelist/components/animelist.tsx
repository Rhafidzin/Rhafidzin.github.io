import Image from "next/image"
import Link from "next/link"

export function AnimeList({title, images, id}){
    return(
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src={images} width={350} height={350} alt="..." />
            <h2 className="font-bold md:text-xl text-md p-4"> {title}</h2>
        </Link>
    )

}

export default AnimeList