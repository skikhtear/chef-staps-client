import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Chef Steps`;
    }, [title])
}

export default useTitle;