import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MiniNav from "../../../components/MiniNav";


const EmailVari = () => {
    return ( 
        <div >
            <MiniNav name="Back" link="/business"/>
            <div className="  items-center text-md px-3 py-4 rounded-lg bg-white border-2 border-gray-300 shadow-md w-1/3 m-auto mt-40">

                <div className="text-center">
                    <h1 className="text-green-600 my-10">
                        Verify Your Email.
                    </h1>
                    <p className="text-xl w-4/6 m-auto">
                        Hi, Hassan. Enter Verificstion code sent to your email.
                    </p>
                </div>

                <form className="m-auto w-3/4 ">
                    <Input type="tel" placeholder="Enter Verificstion code..." />
                    <Button value="Continue" />        
                </form>        
            </div>
        </div>
     );
}
 
export default EmailVari;