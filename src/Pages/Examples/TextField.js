import { useField } from "formik"

export const TextField = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  console.log(field, meta)
    return (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <input 
        {...field} {...props}
        autoComplete="off"
        className="border-[1px] border-[#000]" 
        type="text" />
    </div>
  )
}
