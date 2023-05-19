import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Kids Zone | ${title}`;
    }, [title])
}

export default useTitle