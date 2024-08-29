export default function Container({
    children,
}: {
    readonly children: React.ReactNode
}) {
    return (
        <>
            <div className="max-w-[800px] w-full mx-auto px-6 md:px-0">
                {children}
            </div>
        </>
    )
}