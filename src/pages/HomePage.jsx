import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
                <h1 className="mb-6 text-6xl font-bold">
                    Track Coding Progress
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-zinc-400">
                    Institution-wide coding analytics platform
                    for students, staff, and administrators.
                </p>

                <div className="flex gap-5">
                    <Link
                        to="/login"
                        className="
                            rounded-xl bg-green-500
                            px-6 py-3 font-semibold text-black
                            hover:bg-green-400
                        "
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="
                            rounded-xl border border-zinc-700
                            px-6 py-3 hover:border-green-500
                        "
                    >
                        Register
                    </Link>
                </div>
            </main>
        </div>
    );
}