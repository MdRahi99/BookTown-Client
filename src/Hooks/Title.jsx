import { useEffect } from "react";

const Title = title =>{
  useEffect(()=>{
    document.title =`${title} - BookTown`;
  },[title])
};

export default Title;