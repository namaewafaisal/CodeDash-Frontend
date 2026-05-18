import Navbar from "../components/layout/Navbar";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="mx-auto max-w-xl px-6 py-16">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                    <h1 className="mb-2 text-4xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="mb-8 text-zinc-400">
                        Login to continue to CodeDash.
                    </p>

                    <LoginForm />
                </div>
            </main>
        </div>
    );
}