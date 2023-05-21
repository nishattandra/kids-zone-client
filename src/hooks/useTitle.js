import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} | KID's ZONE`;
    }, [title])
}

export default useTitle