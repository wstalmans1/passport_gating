import React from "react"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Link } from '@chakra-ui/react'
 
const TabLayout = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Home</Tab>
                <Tab>Learn about Web3</Tab>
                <Tab>Learn about DAOs</Tab>
                <Tab>Join the DAO</Tab>
            </TabList>
 
            <TabPanels>
                <TabPanel>
                    <Welcome />
                </TabPanel>
                <TabPanel>
                    <WhatIsWeb3 />
                </TabPanel>
                <TabPanel>
                    <WhatAreDaos />
                </TabPanel>
                <TabPanel>
                    <JoinTheDao />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
 
const Welcome = () => {
    return (
        <>
            <br />
            <br />
            <p>Welcome!!</p>
            <br />
            <p>You have arrived at our DAO portal.</p>
            <p>On this site you can learn some of the fundamentals about Web3 and DAOs.</p>
            <p>If you are inspired, you can join our DAO!</p>
            <br />
            <p>However, DAO membership is only open to people whose Passport score is greater than 20.</p>
            <p>A Passport score is calculated from the stamps held in your Passport. The more stamps, the higher the score.</p>
            <br />
            <p><b>Get started by connecting your wallet and then connecting your Passport</b></p>
            <p>To add stamps to your Passport, visit the <Link href="passport.gitcoin.co" color='teal.500' isExternal>Passport App</Link>.</p>
        </>
    )
}
 
const WhatIsWeb3 = () => {
    return (
        <>
            <br />
            <br />
            <p>There are many definitions of Web3, but they all share some core principles:</p>
            <br />
            <li>Decentralization: ownership gets distributed across builders and users, instead of being owned by a few corporations.</li>
            <li>Permissionlessness: everyone has equal access to participate in Web3, and no one gets excluded.</li>
            <li>Ownership and Payments: crypto assets are used for transferring value, instead of outdated payment processors.</li>
            <li>Trustlessness: it operates using incentives and economic mechanisms instead of relying on trusted third-parties.</li>
            <br />
            <p>Read more about <Link href="https://ethereum.org/web3/" color='teal.500' isExternal>Web3</Link></p>
        </>
    )
}
 
const WhatAreDaos = () => {
    return (
        <>
            <br />
            <br />
            <p>A DAO is a collectively-owned, blockchain-governed organization with a shared mission.</p>
            <br />
            <p>DAOs allow us to work with like-minded folks around the globe, sharing responsibility for funds and operations.</p>
            <p>Instead, blockchain-based rules define how the organization works and how funds are spent.</p>
            <br />
            <p>They have built-in treasuries that no one has the authority to access without the approval of the group.</p>
            <p>Decisions are governed by proposals and voting to ensure everyone in the organization has a voice, and everything happens transparently on-chain.</p>
            <br />
            <p> If this sounds good to you, and your Gitcoin Passport score is above 20, you can join our DAO!</p>
        </>
 
    )
}
 
const JoinTheDao = () => {
    return (
        <>
            <br />
            <p>Hello world!</p>
            <br />
        </>
    )
}
 
export { TabLayout, WhatIsWeb3, WhatAreDaos, JoinTheDao };