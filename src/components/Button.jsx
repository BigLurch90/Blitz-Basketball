const Button = ({label, iconURL, backgraundColor, textColor, boarderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg hover:bg-light-red hover:text-primary-white transition-all leading-none 
    ${backgraundColor ? `${backgraundColor} ${textColor} ${boarderColor}` : "bg-crimson-red text-primary-white"} rounded-full ${fullWidth && "w-full"}`}>
        {label}
        {iconURL && <img src={iconURL} alt="Button icon" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button