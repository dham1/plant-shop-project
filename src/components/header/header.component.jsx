import React from 'react';
import reactDom from 'react-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
const Header = ({ currentUser }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/'>DASHBOARD</Link>
            <Link className="option" to='/tasks'>TASKS</Link>
            <Link>
                {
                    currentUser ? (
                        < div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className="option" to='/signin'>
                            SIGN IN
                        </Link>)
                }
            </Link>
        </div>
    </div >
)
export default Header