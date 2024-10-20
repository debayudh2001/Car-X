"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { SearchButton } from "./SearchButton"

const SearchBar = () => {
  const [manufact, setManufact] = useState("")
  const [model, setModel] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if(manufact === "" || model === ""){
      return alert("Please fill in the search bar")
    }
    updateSearchParams(model.toLowerCase(),manufact.toLowerCase())
  }

  const updateSearchParams = (model,manufact) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufact) {
      searchParams.set("manufacturer", manufact);
    } else {
       searchParams.delete("manufacturer");
    }
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname,{scroll:false});
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufact={manufact} setManufact={setManufact} />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png" alt="model-icon" width={25} height={25} className="absolute w-5 h-5 ml-4" />
          <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    </>
  )
}

export default SearchBar

