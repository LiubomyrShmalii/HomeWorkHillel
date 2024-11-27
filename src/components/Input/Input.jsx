function Input({ onChange, className, type, placeholder, value }) {
  return (
    <input type={type} placeholder={placeholder} className={className} onChange={onChange} value={value}/>
  )
}

export default Input