import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="border-b border-zinc-800 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <div>
                    <h1 className="text-2xl font-bold text-green-500">
                        CodeDash
                    </h1>

                    <p className="text-sm text-zinc-500">
                        Coding Analytics Platform
                    </p>
                </div>

                <nav className="flex gap-6 text-sm text-zinc-400">
                    <Link
                      to="/"
                      className="hover:text-green-500"
                    >
                      Home
                    </Link>
                    <Link
                      to="/login"
                      className="hover:text-green-500"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="hover:text-green-500"
                    >
                      Register
                    </Link>
                    <Link to="/institution/register">
                      Institution
                    </Link>
                </nav>
            </div>
        </header>
    );
}