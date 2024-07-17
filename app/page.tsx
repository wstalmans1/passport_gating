'use client'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { ChakraProvider, Button, Flex, Heading} from '@chakra-ui/react'
import { TabLayout } from './tab-contents'
 
const APIKEY = process.env.NEXT_PUBLIC_GC_API_KEY
const SCORERID = process.env.NEXT_PUBLIC_GC_SCORER_ID
 
// endpoint for submitting passport
const SUBMIT_PASSPORT_URI = 'https://api.scorer.gitcoin.co/registry/submit-passport'
// endpoint for getting the signing message
const SIGNING_MESSAGE_URI = 'https://api.scorer.gitcoin.co/registry/signing-message'
// score needed to see hidden message
const thresholdNumber = 20
const headers = APIKEY ? ({
  'Content-Type': 'application/json',
  'X-API-Key': APIKEY
}) : undefined
 
declare global {
  interface Window {
    ethereum?: any
  }
}
 
export default function Passport() {
 
  const [address, setAddress] = useState<string>('') // address of the user

  async function connect() {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAddress(accounts[0])
    } catch (err) {
      console.log('error connecting...')
    }
  }

  const styles = {
    main: {
      width: '900px',
      margin: '0 auto',
      paddingTop: 90
    }
  }
 
  return (
    /* this is the UI for the app */
    <div style={styles.main}>
      <ChakraProvider>
        <Flex minWidth='max-content' alignItems='right' gap='2' justifyContent='right'>
          <Button colorScheme='teal' variant='outline' onClick={connect}>Connect</Button>
        </Flex>
        <br />
        <br />
        <Heading as='h1' size='4xl' noOfLines={2}>Welcome to the decentralized web</Heading>
        <br />
        <TabLayout />
 
      </ChakraProvider >
    </div >
  )
}