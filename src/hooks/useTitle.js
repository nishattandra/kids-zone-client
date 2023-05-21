import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `KIDs ZONE | ${title}`;
    }, [title])
}

export default useTitle