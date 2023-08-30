import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { getUser } from '../../utilities/users-service';
// import '../App/App.css';
import './AuthPage.css';
import NNbanner from '../../Images/NNbanner.png';

export default function AuthPage({ setUser }) {
    return (
        <main>
            <img src={NNbanner} alt="Logo" className="banner-img" />
            <p className='AuthPage-text'>

                Welcome to Novel Nest, where your reading journey takes flight! Novel Nest isn't just an app; it's your trusty sidekick for keeping tabs on your reads, sharing your bookish insights, and planning your next literary adventures.

                <br />
                Embrace the Bookish Buzz:
                <br />

                📖 Stay on Top of Your Reads: Keep a virtual bookmark on the books you're digging, and watch your reading list flourish with each tap!
                <br />
                🌟 Be the Book Guru: Share your thoughts on what you've read.
                <br />
                📚 Curate Your Reading List: Jot down the books you're itching to dive into next – consider it your roadmap to a world of stories!
                <br />
                Join the Reading Party:
                <br />
                Ready to hop into the world of reading, reviews, and awesome book discoveries?
                <br />
                 Hop on board Novel Nest now and let the bookish fun commence!
                <br />
            </p>
            [Sign Me Up for the Fun]
            <SignUpForm setUser={setUser} />



            <LoginForm setUser={setUser} />


        </main>
    )
}
