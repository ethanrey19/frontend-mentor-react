import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title || "Ethan Reynolds";
    }, [title]);
}

export default usePageTitle;