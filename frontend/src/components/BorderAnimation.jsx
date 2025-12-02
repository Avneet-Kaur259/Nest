// Refferenceed From: https://tailwindcss-glassmorphism.vercel.app/ & https://cruip-tutorials.vercel.app/animated-gradient-border/

const BorderAnimation = ({ children }) => {
    return (
        <div className="w-full p-10 rounded-lg shadow-md bg-stone-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <div className="w-full h-full [background:linear-gradient(45deg,#172033,theme(colors.zinc.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.600/.48)_80%,_theme(colors.stone.500)_86%,_theme(colors.stone.300)_90%,_theme(colors.stone.500)_94%,_theme(colors.zinc.600/.48))_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">

                {children}
            </div>
        </div>
    )
}

export default BorderAnimation