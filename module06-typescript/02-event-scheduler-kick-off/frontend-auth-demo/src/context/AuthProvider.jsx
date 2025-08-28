import { useState, useEffect } from 'react';
import { AuthContext } from '../context';

const AuthProvider = ({ children }) => {
	const [signedIn, setSignedIn] = useState(false);
	const [user, setUser] = useState();
	const [checkSession, setCheckSession] = useState(true);

	const handleSignIn = () => {
		setSignedIn(true);
	};

	const handleSignOut = () => {
		setSignedIn(false);
	};
	return (
		<AuthContext
			value={{
				signedIn,
				user,
				handleSignIn,
				handleSignOut
			}}
		>
			{children}
		</AuthContext>
	);
};

export default AuthProvider;
