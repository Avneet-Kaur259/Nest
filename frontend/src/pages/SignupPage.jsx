import { useState } from "react"
import BorderAnimation from "../components/BorderAnimation"
import { LoaderIcon, LockIcon, MailIcon, MessageCircleIcon, UserIcon } from "lucide-react"
import { useAuthStore } from "../store/useAuthStore"
import { Link } from "react-router"

const SignupPage = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" })
    const { signup, isSigningUp } = useAuthStore()

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
    }

    return (
        <div className="w-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-xl md:h-[600px] h-[550px]">
                <BorderAnimation>
                    <div className="w-full flex">
                        <div className="w-full p-8 flex items-center justify-center">
                            <div className="w-full max-w-md">
                                {/* HEADING TEXT */}
                                <div className="text-center mb-8">
                                    <MessageCircleIcon className="w-12 h-12 mx-auto text-stone-400 mb-4" />
                                    <h2 className="text-2xl font-bold text-stone-200 mb-2">Create Account</h2>
                                    <p className="text-stone-400">Sign up for new account</p>
                                </div>

                                {/* FORM */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* FULL NAME */}
                                    <div>
                                        <label className="auth-input-label">Full Name</label>
                                        <div className="relative">
                                            <UserIcon className="auth-input-icon" />

                                            <input
                                                type="text"
                                                value={formData.fullName}
                                                className="input"
                                                placeholder="Avneet Kaur"
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* EMAIL INPUT */}
                                    <div>
                                        <label className="auth-input-label">Email</label>
                                        <div className="relative">
                                            <MailIcon className="auth-input-icon" />

                                            <input
                                                type="email"
                                                value={formData.email}
                                                className="input"
                                                placeholder="avneetkaur@gmail.com"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* PASSWORD INPUT */}
                                    <div>
                                        <label className="auth-input-label">Password</label>
                                        <div className="relative">
                                            <LockIcon className="auth-input-icon" />

                                            <input
                                                type="password"
                                                value={formData.password}
                                                className="input"
                                                placeholder="*************"
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* SUBMIT BUTTON */}
                                    <button className="auth-btn" type="submit" disabled={isSigningUp}>
                                        {isSigningUp ? (
                                            <LoaderIcon className="w-full h-5 animate-spin text-center" />
                                        ) : (
                                            "Create an Account"
                                        )}
                                    </button>
                                </form>

                                <div className="mt-6 text-center">
                                    <Link to="/login" className="auth-link">
                                        Already have an Account? Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </BorderAnimation>
            </div>
        </div>
    )
}

export default SignupPage