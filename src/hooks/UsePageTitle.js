import { useEffect } from 'react';

const UsePageTitle = (title) => {
    useEffect(() => {
        return () => {
            document.title = title || "Ethan Reynolds";
        };
    }, [title]);
}

export default UsePageTitle;