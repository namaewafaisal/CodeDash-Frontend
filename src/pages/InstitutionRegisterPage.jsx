import Navbar from "../components/layout/Navbar";
import InstitutionRegisterForm from "../components/auth/InstitutionRegisterForm";

export default function InstitutionRegisterPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="mx-auto max-w-2xl px-6 py-16">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                    <h1 className="mb-2 text-4xl font-bold">
                        Register Institution
                    </h1>

                    <p className="mb-8 text-zinc-400">
                        Create an institution workspace for CodeDash.
                    </p>

                    <InstitutionRegisterForm />
                </div>
            </main>
        </div>
    );
}