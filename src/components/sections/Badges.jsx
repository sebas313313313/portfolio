import React, { useEffect } from 'react';

const Badges = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h2>My Badges</h2>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="13cf5773-daa7-48ef-ad09-87cf8edc5f8d" data-share-badge-host="https://www.credly.com"></div>
        </div>
    );
};

export default Badges;
