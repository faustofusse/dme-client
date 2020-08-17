import React from 'react';

export default function Home(props) {
    props.history.push('/profile');
    return <div>home</div>;
}
