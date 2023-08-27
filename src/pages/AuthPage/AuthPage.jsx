import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { getUser } from '../../utilities/users-service';

export default function AuthPage({ setUser }){
    return (
        <main>
            <h1>Novel Nest: Where Books and Fun Unite! </h1>
            <p>

Hold onto your reading glasses, because we're about to give your book journey a turbo boost of excitement! Novel Nest isn't just an app; it's your trusty sidekick for keeping tabs on your reads, sharing your bookish insights, and planning your next literary adventures.

<br />
Embrace the Bookish Buzz: 
<br />

📖 Stay on Top of Your Reads: Keep a virtual bookmark on the books you're digging, and watch your reading list flourish with each tap!
<br />
🌟 Be the Book Guru: Share your thoughts on what you've read – it's like joining a bookish chat with fellow enthusiasts.
<br />
📚 Curate Your Reading List: Jot down the books you're itching to dive into next – consider it your roadmap to a world of stories!
<br />
Why You'll Dig Novel Nest:
<br />
Because reading should be as fun as your favorite playlist on a road trip! Whether you're into thrilling adventures or heartwarming tales, Novel Nest adds a sprinkle of excitement to your reading routine.
<br />
Join the Reading Party:
<br />
Ready to hop into the world of reading, reviews, and awesome book discoveries? Don't miss the memo – hop on board Novel Nest now and let the bookish fun commence!
<br />
[Sign Me Up for the Fun]
<SignUpForm  setUser={setUser} />

</p>
           
            <LoginForm  setUser={setUser} />

            Questions about books or need some reading recommendations? Shoot us a message at:
hello@novelnestreads.co.uk
        </main>
    )
}
