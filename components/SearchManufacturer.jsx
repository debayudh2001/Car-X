"use client"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, ComboboxOption, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"
import { manufacturers } from "@/constants/constant"

const SearchManufacturer = ({manufact, setManufact}) => {
  const [query, setQuery] = useState("") 
  const filteredManufacturers = 
    query === "" ? manufacturers : 
    manufacturers.filter((item) => (item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))))
  
  return (
    <>
      <div className="search-manufacturer">
        <Combobox value={manufact} onChange={setManufact}>
            <div className="relative w-full">
                <ComboboxButton className="absolute top-[14px]">
                    <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car-logo" />
                </ComboboxButton>
                <ComboboxInput 
                    className="search-manufacturer__input" 
                    placeholder="Volkswagen" 
                    displayValue={(manufact) => manufact} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")} 
                >
                    <ComboboxOptions>
                        {filteredManufacturers.map((item) => (
                            <ComboboxOption 
                                key={item} 
                                value={item} 
                                className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                            >
                                {item}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
      </div>
    </>
  )
}

export default SearchManufacturer


