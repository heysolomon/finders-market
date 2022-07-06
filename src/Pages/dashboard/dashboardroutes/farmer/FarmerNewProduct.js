import { Form, Formik } from "formik";
// import DashboardInput from "../../dashboardConponents/DashboardInput";
// import SelectMenu from "../../dashboardConponents/SelectMenu";
// import TextArea from "../../dashboardConponents/TextArea";
// import Upload from "../../dashboardConponents/Upload";

const FarmernewProduct = () => {
  return (
    <Formik
      initialValues={{
        productCategory: "",
        productName: "",
        productDesc: "",
        productImg: null,
      }}
    >
      {(formik) => <Form></Form>}
    </Formik>
    // <div>
    //   <form className="grid grid-cols-2 gap-5 w-[80%] ml-[10%]">
    //     <SelectMenu label="Categories" />
    //     <DashboardInput
    //       label="Product Name"
    //       type="text"
    //       placeholder="Product Name"
    //     />

    //     <div className="grid grid-cols-2 gap-2  w-full">
    //       <SelectMenu label="Quantity" />
    //       <DashboardInput label="Price" type="text" placeholder="N11,000" />
    //     </div>
    //     <DashboardInput
    //       label="Tag Product Name"
    //       type="text"
    //       placeholder="Add Tag Product Name"
    //     />
    //     <TextArea label="Description" />

    //     <div className="col-span-2">
    //       <Upload />
    //       <button className="shadow w-full p-3 text-white bg-[#4f7f19]  my-10 rounded pl-3 hover:shadow-lg">
    //         Upload
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default FarmernewProduct;
