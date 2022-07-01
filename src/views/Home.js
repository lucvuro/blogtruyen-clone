import { Container} from "react-bootstrap";
import './Home.scss'
import BannerComponent from "../components/BannerComponent";
const Home = () => {
    return(
        <Container className="homepage">
           <BannerComponent/>
        </Container>
    )
}
export default Home