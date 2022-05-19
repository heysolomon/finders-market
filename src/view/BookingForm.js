import Button from "../components/Button";
import InputWithLabel from "../components/InputWithLabel";
import MiniNav from "../components/MiniNav";

const BookingForm = () => {
    return ( 
        <div>
            <MiniNav name="Log In" link="/login"/>
            <div className="w-3/6 m-auto mt-20">
                <div className="border-b-2 py-4">
                    <h2 className="text-3xl md-10">Booking form</h2>
                    <p>A copy of this form will be sent to you by email.</p>
                </div>
                <form className="mt-5">
                    <div className="flex">
                        <InputWithLabel  class="w-2/4 mr-5" label="Email" type="email"/>
                        <InputWithLabel  class="w-2/4 " label="Confirm Email" type="email" />
                    </div>
                    <div className="border-b-2 py-4">
                        <h2>Account Holder’s Details.</h2>
                        <p>The person taking responsibility for storage and payment.</p>
                    </div>
                    <div>
                        <InputWithLabel label="Business name (if applicable)" type="text" />
                    </div>
                    <div className="flex">
                        <InputWithLabel  placeholder="Enter Your First Name" class="w-2/4 mr-5" label="First Name" type="text"/>
                        <InputWithLabel  placeholder="Enter Your Last Name"  class="w-2/4" label="Last Name" type="text" />
                    </div>
                        <InputWithLabel  placeholder="Enter Your Address" label="Address" type="text"/>
                    <div>
                        <InputWithLabel placeholder="Enter Your City" label="City" type="text" />
                    </div>
                    <div>
                        <InputWithLabel placeholder="Enter Your Contact Number" label="Contact Number" />
                    </div>
                    <Button value="Next" />
                </form>
                
            </div>
        </div>
     );
}
 
export default BookingForm;