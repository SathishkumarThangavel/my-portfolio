import React from "react";
import TwitterLogo from "../svgs/twitter.svg";
import GithubLogo from "../svgs/github.svg";
import LinkedinLogo from "../svgs/linkedin.svg";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="contact">
                    <a href="https://twitter.com/ITsathishkumar" target="_blank" rel="noopener noreferrer" title="twitter">
                        <TwitterLogo />
                    </a>
                    <a href="https://github.com/SathishkumarThangavel" target="_blank" rel="noopener noreferrer" title="github">
                        <GithubLogo />
                    </a>
                    <a href="https://www.linkedin.com/in/sathishkumarthangavel/" target="_blank" rel="noopener noreferrer" title="linkedin">
                        <LinkedinLogo />
                    </a>
                </div>
                <div className="powered"> © Sathishkumar Thangavel. Powered by <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Nextjs</a>.</div>
                <div className="powered"><i> Deployed using <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">Kubernetes</a> technology.</i></div>
            </div>
        )
    }
}

export default Footer;