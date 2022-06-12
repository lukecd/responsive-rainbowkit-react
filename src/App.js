import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";
import PageSix from "./pages/PageSix";
import RainbowFavicon from "./assets/images/rainbow-favicon-16x16.png";

function App() {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>roy g biv</title>
            <link rel="icon" type="image/png" href="{RainbowFavicon}" sizes="16x16" />
        </Helmet>
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <PageOne />
                </Route>
                <Route path="/page-one">
                    <PageOne />
                </Route>
                <Route path="/page-two">
                    <PageTwo />
                </Route>
                <Route path="/page-three">
                    <PageThree />
                </Route>
                <Route path="/page-four">
                    <PageFour />
                </Route>
                <Route path="/page-five">
                    <PageFive />
                </Route>
                <Route path="/page-six">
                    <PageSix />
                </Route>
            </Switch>
        </Layout>
        </>
    );
}

export default App;
