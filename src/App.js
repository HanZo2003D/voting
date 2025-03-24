import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CandidatesPage from "./pages/CandidatesPage";
import Aboutpage from "./pages/Aboutpage";
import ContactPage from "./pages/ContactPage";
import ResultPage from "./pages/ResultPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

import Navbar2 from "./components/NavBar2";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [candidates, setCandidates] = useState([]); // 🔥 Store candidates
  const [votedCandidate, setVotedCandidate] = useState(() => {
    return localStorage.getItem("votedCandidate") || null;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn") === "true";
    const storedAdmin = localStorage.getItem("isAdmin") === "true"; // 🛠 FIXED

    setIsLoggedIn(storedLogin);
    setIsAdmin(storedAdmin);

    console.log("Loaded isAdmin:", storedAdmin); // Should print "true" after login
  }, []);

  const login = (username, password) => {
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    if (username === "sandhya" && password === "sandhya") {
      console.log("✅ Admin login successful");
      setIsLoggedIn(true);
      setIsAdmin(true);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "true"); // 🛠 FIXED: Storing as string
    } else if (username && password) {
      console.log("✅ Normal user login successful");
      setIsLoggedIn(true);
      setIsAdmin(false);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.removeItem("isAdmin"); // Ensure admin flag is removed
    } else {
      console.log("❌ Incorrect username or password!");
      alert("Incorrect username or password!");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    setVotedCandidate(null);
    localStorage.removeItem("votedCandidate");
  };

  const addCandidate = (id, name, description) => {
    setCandidates((prevCandidates) => [
      ...prevCandidates,
      { id, name, description, votes: 0 },
    ]);
  };
  const voteForCandidate = (id) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };

  // Unvote handler
  const unvoteCandidate = (id) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, votes: candidate.votes - 1 }
          : candidate
      )
    );
  };

  return (
    <div id="root">
      <Navbar2 isLoggedIn={isLoggedIn} />

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <HomePage
                  candidates={candidates}
                  voteForCandidate={voteForCandidate}
                  unvoteCandidate={unvoteCandidate}
                  votedCandidate={votedCandidate}
                  setVotedCandidate={(id) => {
                    setVotedCandidate(id);
                    if (id) localStorage.setItem("votedCandidate", id);
                    else localStorage.removeItem("votedCandidate");
                  }}
                  logout={logout}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <Admin addCandidate={addCandidate} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route
            path="/candidates"
            element={
              isLoggedIn ? (
                <CandidatesPage
                  candidates={candidates}
                  voteForCandidate={voteForCandidate}
                  unvoteCandidate={unvoteCandidate}
                  votedCandidate={votedCandidate}
                  setVotedCandidate={(id) => {
                    setVotedCandidate(id);
                    if (id) localStorage.setItem("votedCandidate", id);
                    else localStorage.removeItem("votedCandidate");
                  }}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/about"
            element={isLoggedIn ? <Aboutpage /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <ContactPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <ProfilePage
                  logout={logout}
                  isLoggedIn={isLoggedIn}
                  isAdmin={isAdmin}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/result"
            element={
              isLoggedIn ? (
                <ResultPage candidates={candidates} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
