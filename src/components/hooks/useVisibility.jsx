import { useState } from 'react';

const useVisibility = (component, visibility = false) => {
    const [visible, setVisible] = useState(() => visibility);
    // console.log(visible);

    return [visible ? component : null, () => setVisible((v) => !v)];
};

export default useVisibility;
