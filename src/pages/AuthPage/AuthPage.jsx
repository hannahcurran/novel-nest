import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { getUser } from '../../utilities/users-service';
// import '../App/App.css';
import './AuthPage.css';
import NNbanner from '../../Images/NNbanner.png';
// import NNlogin from '../../Images/NNlogin.png';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text,
    VStack,
    Button
} from '@chakra-ui/react';

export default function AuthPage({ setUser }) {
    return (
        <VStack spacing={4} className='main-auth-page'>
            <Box w="80%">
                <img src={NNbanner} alt="Logo" className="banner-img" />
            </Box>
            <Text className='auth-h2' fontWeight="bold">
                Welcome to Novel Nest, where your reading journey takes flight!
            </Text>
            <Accordion defaultIndex={[0]} allowToggle>
                <AccordionItem>
                    <AccordionButton className='AuthPage-text'>
                        <Box flex="1" textAlign="left" className='AuthPage-text'>
                            User Login
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <LoginForm setUser={setUser} />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
<br />
            <Text className='AuthPage-text'>
             
                    Novel Nest is more than an app—it's your go-to for tracking reads, sharing insights, and planning literary escapades. <br />


                    Embrace the Buzz: Boost your reading list with every pick. <br />
                    Be the Guru: Voice your thoughts on <br />
                    Curate Your List: Note upcoming books—your gateway to endless <br />
                    Dive into the Novel Nest realm and kickstart your bookish journey today!
                    <br />
                    <br />
                    [Sign Me Up for the Fun!]
              
            </Text>
            <SignUpForm setUser={setUser} />



            {/* <LoginForm setUser={setUser} /> */}


        </VStack>
    )
}

