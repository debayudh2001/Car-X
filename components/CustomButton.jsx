"use client"

import Image from "next/image"

const CustomButton = ({isDisabled, title, containerStyles, handleClick, btnType, textStyles, rightIcon}) => {
  return (
    <>
      <button disabled={isDisabled} type={btnType || "button"} className={` custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="right_icon" fill className="object-contain" />
          </div>
        )}
      </button>
    </>
  )
}

export default CustomButton

