import React from 'react';
import { useEffect, useState } from "react";

const useBooksCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/books-category')
            const result = await data.json();
            setCategories(result);
        }

        categoriesData();
    }, []);

    return [categories]
};

export default useBooksCategory;