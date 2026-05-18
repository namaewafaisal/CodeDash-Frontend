import Input from "./Input";

export default function UserRegisterForm() {
    return (
        <form className="space-y-5">
            <Input
                label="Institution Email"
                type="email"
                placeholder="student@college.edu"
            />

            <Input
                label="Password"
                type="password"
                placeholder="********"
            />

            <Input
                label="Institution ID"
                placeholder="Institution ID"
            />

            <button
                className="
                    w-full rounded-xl bg-green-500
                    px-5 py-3 font-semibold text-black
                    transition hover:bg-green-400
                "
            >
                Create Account
            </button>
        </form>
    );
}