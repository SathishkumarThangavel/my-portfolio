import React from "react";
import Image from 'next/image';

class Header extends React.Component {
    render() {
        return (
            <div className="container header-section">
                <div className="hero">
                    <div className="profile">
                    <Image
                        src="/assets/profile.png"
                        alt="profile picture"
                        width={208}
                        height={200}
                    />
                    <h2 className="profile-name">Sathishkumar Thangavel</h2>
                    <h3>Full Stack Developer</h3>
                    <h3><a href="https://iqzsystems.com" target="_blank" rel="noopener noreferrer">IQZ Systems</a></h3>
                    </div>
                </div>
            </div>   
        )
    }
}
export default Header;