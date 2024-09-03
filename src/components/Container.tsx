export default function Container({
    children,
}: {
    readonly children: React.ReactNode
}) {
    return (
        <>
            <div className="max-w-[825px] w-full mx-auto px-6 md:px-6">
                {children}
            </div>
        </>
    )
}