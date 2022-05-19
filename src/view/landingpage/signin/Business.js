
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import InputWithLabel from "../../../components/InputWithLabel";
import MiniNav from "../../../components/MiniNav";



const Business = () => {

  const input = [
    {
        id:1,
        label: "Farm/Business Name",
        name: "user",
        type: "text",
        placeholder: "Enter Farm/Business name",       },
    {
        id:2,
        label: "Email Address",
        name: "email",
        type: "email",
        placeholder: "Email yddress ",
    },
    {
        id:3,
        label: "City",
        name: "city",
        type: "text",
        placeholder: "Enter your city",
    },
    {
      id:4,
      label: "State",
      name: "state",
      type: "text",
      placeholder: "Enter your state",
  },
    {
        id:5,
        label: "Phone Number",
        name: "tel",
        type: "tel",
        placeholder: "Enter your phone number",
    }
]



    return ( 
      <div>
            <MiniNav name="Back"  link="/Signin"/>

            <h1 className="text-5xl ml-60 ">
              Business Information
            </h1>

            <form className="w-2/5 m-auto mb-10">
              {
                input.map((input) =>(
                  <InputWithLabel placeholder={input.placeholder} label={input.label}/>
                ))
              }
                <Dropdown label="Product Type" />
                <Button value="Continue" />
            </form>
      </div>
     );
}
 
export default Business;