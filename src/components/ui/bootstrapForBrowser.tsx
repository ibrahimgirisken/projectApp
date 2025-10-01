'use client'
import { useEffect } from 'react';


const BootstrapForBrowser = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min')
    }, []);
    return null;
}

export default BootstrapForBrowser;
