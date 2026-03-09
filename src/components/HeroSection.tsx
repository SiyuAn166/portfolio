import * as React from 'react';

interface LoginInfo {
    lastLogin: string;
    userIP: string;
}

export function useHeroState(): LoginInfo {
    const [lastLogin, setLastLogin] = React.useState('');
    const [userIP, setUserIP] = React.useState('127.0.0.1');

    React.useEffect(() => {
        const now = new Date();
        const day = now.toLocaleString('en-US', { weekday: 'short' });
        const month = now.toLocaleString('en-US', { month: 'short' });
        const date = String(now.getDate()).padStart(2, '0');
        const time = now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        const year = now.getFullYear();
        setLastLogin(`${day} ${month} ${date} ${time} ${year}`);

        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => setUserIP(data.ip))
            .catch(() => setUserIP('127.0.0.1'));
    }, []);

    return { lastLogin, userIP };
}
