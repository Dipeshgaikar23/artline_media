import { ArtlineLoader } from "@/components/ArtlineLoader";

export default function Loading() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white p-8">
            <ArtlineLoader />
        </div>
    );
}
