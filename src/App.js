import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPageIcon from "./components/AboutPageIcon";
import FeedbackLinks from "./components/FeedbackLinks";
import FeedbackLink from "./components/FeedbackLink";
import FeedbackReview from "./components/FeedbackReview";
import {FeedbackProvider} from "./components/context/FeedbackContext";

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                <FeedbackLinks />
                                <AboutPageIcon />
                            </>
                        } />
                        <Route path="feedback/:feedbackId" element={<FeedbackLink />}>
                            <Route path="review" element={<FeedbackReview />} />
                        </Route>
                        <Route path="*" element={<div className="card">Route not found!</div>} />
                        <Route path="about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;