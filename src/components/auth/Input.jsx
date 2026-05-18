export default function Input({
    label,
    type = "text",
    placeholder
}) {
    return (
        <div className="space-y-2">
            <label className="block text-sm text-zinc-300">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="
                    w-full rounded-xl border border-zinc-800
                    bg-zinc-900 px-4 py-3 text-white
                    outline-none transition
                    focus:border-green-500
                "
            />
        </div>
    );
}