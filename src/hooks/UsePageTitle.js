import { useEffect } from 'react';

const UsePageTitle = (title) => {
    useEffect(() => {
        document.title = title || "Ethan Reynolds";
    }, [title]);
}

export default UsePageTitle;