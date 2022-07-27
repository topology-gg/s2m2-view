import styles from '../styles/Home.module.css'
import { ConnectWallet } from "../components/ConnectWallet.js"
import { StarknetProvider } from '@starknet-react/core'

import View from "../components/View"

function Home() {

    return (
        <StarknetProvider>
            <div className="mother-container">
                <div className="top-child-container">
                    <h2>Solve2Mint 2.0</h2>
                    <p style={{marginBottom:'0'}}>Earn your ticket to the Isaac Alpha reality.</p>
                    <p style={{marginTop:'0',marginBottom:'0'}}>Control: mouse down and drag to select path; ESC to reset</p>
                    <p style={{marginTop:'0',marginBottom:'0'}}>
                        <a href="github.com/topology-gg/s2m2" style={{color:'#DDDDDD'}}>
                            Link to code
                        </a>
                    </p>

                    <span>.</span>
                    <ConnectWallet />
                    <View />
                </div>
            </div>
        </StarknetProvider>
    )
}

export default Home;