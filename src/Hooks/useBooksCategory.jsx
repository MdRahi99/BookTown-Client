import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useBooksCategory = () => {

    const [categories, setCategories] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        const categoriesData = async () => {
            const data = await axiosSecure('/books-category')
            setCategories(data.data);
        }

        categoriesData();
    }, []);

    return [categories]
};

export default useBooksCategory;