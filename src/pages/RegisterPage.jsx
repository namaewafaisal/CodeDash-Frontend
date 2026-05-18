import Navbar from "../components/layout/Navbar";
import UserRegisterForm from "../components/auth/UserRegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="mx-auto max-w-xl px-6 py-16">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                    <h1 className="mb-2 text-4xl font-bold">
                        Create Account
                    </h1>

                    <p className="mb-8 text-zinc-400">
                        Join your institution dashboard.
                    </p>

                    <UserRegisterForm />
                </div>
            </main>
        </div>
    );
}