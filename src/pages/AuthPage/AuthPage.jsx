import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { getUser } from '../../utilities/users-service';
// import '../App/App.css';
import './AuthPage.css';
import NNbanner from '../../Images/NNbanner.png';

export default function AuthPage({ setUser }) {
    return (
        <main className='main-auth-page'>
            <nav className='auth-page-navbar'>test </nav>
            <header><img src={NNbanner} alt="Logo" className="banner-img" /></header>
           <br />

               <h2 className='auth-h2'>Welcome to Novel Nest, where your reading journey takes flight!</h2>  
               <p className='AuthPage-text'>
                <br />
               Novel Nest isn't just an app; it's your trusty sidekick for keeping tabs on your reads, sharing your bookish insights, and planning your next literary adventures.
              
                Embrace the Bookish Buzz:
                <br />
                <br />

                 Stay on Top of Your Reads: Keep a virtual bookmark on the books you're digging, and watch your reading list flourish with each tap!
                <br />
                <br />
                 Be the Book Guru: Share your thoughts on what you've read.
                <br />
                <br />
                Curate Your Reading List: Jot down the books you're itching to dive into next – consider it your roadmap to a world of stories!
                <br />
                               <br />
                Ready to hop into the world of reading, reviews, and awesome book discoveries?
                <br />
                 Hop on board Novel Nest now and let the bookish fun commence!
                <br />
                <br />
                [Sign Me Up for the Fun]
            </p>
           
            <SignUpForm setUser={setUser} />



            <LoginForm setUser={setUser} />


        </main>
    )
}
