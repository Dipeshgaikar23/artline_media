import { ArtlineLoader } from "@/components/ArtlineLoader";

export default function LoaderTestPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <div className="mb-12 text-center">
                <h1 className="text-2xl font-semibold mb-2 text-white">Artline Loader Preview</h1>
                <p className="text-zinc-400">
                    This is exactly what users will see when navigating between pages.
                </p>
            </div>

            {/* Container simulating the loader environment */}
            <div className="">
                <ArtlineLoader />
            </div>
        </div>
    );
}
