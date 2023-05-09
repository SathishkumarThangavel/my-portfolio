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
                    <h3><a href="https://www.credly.com/badges/c208bf0a-684e-423d-b4f5-4cc6b2e2e15a/public_url" target="_blank" rel="noopener noreferrer">Certified Kubernetes Application Developer</a></h3>
                    <h3><a href="https://hpe.com" style={{color: "#01a982"}} target="_blank" rel="noopener noreferrer">HP Enterprise</a></h3>
                    </div>
                </div>
            </div>   
        )
    }
}
export default Header;
