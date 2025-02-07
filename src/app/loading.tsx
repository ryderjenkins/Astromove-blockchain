export default function Loading() {
    return (
        <div className="absolute left-0 top-0 items-center justify-center h-screen z-[100] w-full bg-black">
            <div className="w-full h-full flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 flex justify-center items-center border-[#27B17D]">
                    <h1 className="text-30px">Loading...</h1>
                </div>

            </div>
        </div>
    )
}