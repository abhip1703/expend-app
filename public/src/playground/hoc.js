import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuth ? (<WrappedComponent {...props}/>) : (<p>User not logged in</p>) }
        
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="these are the details" />, document.getElementById('app'));