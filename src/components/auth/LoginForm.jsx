import Input from "./Input";

export default function LoginForm() {
    return (
        <form className="space-y-5">
            <Input
                label="Email"
                type="email"
                placeholder="student@college.edu"
            />

            <Input
                label="Password"
                type="password"
                placeholder="********"
            />

            <button
                className="
                    w-full rounded-xl bg-green-500
                    px-5 py-3 font-semibold text-black
                    transition hover:bg-green-400
                "
            >
                Login
            </button>
        </form>
    );
}