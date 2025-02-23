"use client"
import Image from "next/image"
import { Fragment, useState } from "react"
import { useRouter } from "next/navigation"
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from "@headlessui/react"
import { updateSearchParams } from "@/utils/updateSearchParams"

const CustomFilter = ({title, options}) => {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()
  const handleUpdateParams = (e) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())
    router.push(newPathName,{scroll:false})
  }

  return (
    <>
      <div className="w-fit">
        <Listbox value={selected} onChange={(e) => {setSelected(e); handleUpdateParams(e)}}>
          <div className="relative w-fit z-10">
            <ListboxButton className="custom-filter__btn">
              <span className="block truncate">{selected.title}</span>
              <Image src="/chevron-up-down.svg" alt="chev-up-down" width={20} height={20} className="ml-4 object-contain" />
            </ListboxButton>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <ListboxOptions className="custom-filter__options">
                {options.map((option) => (
                  <ListboxOption key={option.title} value={option} className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                    {({selected}) => (
                      <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>{option.title}</span>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  )
}

export default CustomFilter



