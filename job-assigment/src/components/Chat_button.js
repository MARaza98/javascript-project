import ChatButtonOne from '../assest/Vector-1.png'
import ChatButtonTwo from '../assest/Vector.png'
import Ellipse from '../assest/Ellipse 7.png'

function ChatButton() {
    return(
        <div>
            <img style={{position:'absolute',width:'67px',left:'103%',top:'80%'}} src={Ellipse} />
            <img style={{position:'absolute',width:'47px',left:'104%',top:'83%'}} src={ChatButtonTwo} />
            <img style={{position:'absolute',width:'33px',left:'104%',top:'84%'}} src={ChatButtonOne} />

        </div>
    )
}

export default ChatButton;
