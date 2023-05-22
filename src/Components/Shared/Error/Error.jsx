import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div className="flex flex-col gap-8 text-2xl lg:text-5xl font-trainOne uppercase lg:w-1/2 lg:mx-auto border-y-8 border-black text-black text-center mx-10 p-10 lg:p-20 my-10 lg:my-40">
            <h1>404 Not Found</h1>
            <Link className="font-trainOne text-2xl bg-black hover:bg-white hover:text-black hover:border-x-4 hover:border-black text-white w-1/3 py-2 mx-auto" to='/'>Back</Link>
        </div>
    );
};

export default Error;