import { Navigate, Route, Routes } from "react-router"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import PageLoader from "./components/pageLoader"

const App = () => {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({ authUser });

  if (isCheckingAuth) return <PageLoader />

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <Routes>
        <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to={"/"} />} />
      </Routes>
    </div>
  )
}

export default App