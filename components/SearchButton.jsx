import Image from "next/image"

export const SearchButton = ({ otherClasses }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
)
  

