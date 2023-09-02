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
        <main className='main'>
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
                    {/* <h2>Discover Novel Nest: Your Literary Companion 📚</h2> */}
                    <p>
                        Dive into a world where reading isn't just a hobby—it's a lifestyle! With Novel Nest, you'll find a cozy corner in the vast universe of books. Let's get you started:
                    </p>

                    <div className='feature'>

                        <h3>Embrace the Buzz</h3>
                        <p>Supercharge your reading list with every curated pick.</p>
                    </div>

                    <div className='feature'>

                        <h3>Sing Your Song</h3>
                        <p>Express yourself! Share your insights, reviews, and ratings with fellow bookworms.</p>
                    </div>

                    <div className='feature'>

                        <h3>Nest Your Reads</h3>
                        <p>Never miss out! Jot down upcoming books and let the stories take flight.</p>
                    </div>

                    <p>
                        Ready to ascend into the world of Novel Nest?
                        <br />
                        Your literary adventure awaits...
                    </p>
                    <br />
                    <button className='signup-button'>Sign Me Up for the Fun!</button>
                </Text>

                <SignUpForm setUser={setUser} />
            </VStack>
        </main>
    )
}

