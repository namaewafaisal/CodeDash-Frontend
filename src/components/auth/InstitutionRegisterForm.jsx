import Input from "./Input";

export default function InstitutionRegisterForm() {
    return (
        <form className="space-y-5">
            <Input
                label="Institution Name"
                placeholder="ABC University"
            />

            <Input
                label="Institution Domain"
                placeholder="college.edu"
            />

            <Input
                label="Admin Email"
                type="email"
                placeholder="admin@college.edu"
            />

            <Input
                label="Admin Password"
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
                Register Institution
            </button>
        </form>
    );
}