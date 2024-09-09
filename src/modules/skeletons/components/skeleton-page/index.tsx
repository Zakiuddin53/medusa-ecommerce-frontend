import { LoaderCircleIcon } from "lucide-react";

export default function SkeletonPage() {
  return (
    <div className="w-full flex  items-center justify-center" style={{height: 'calc(100vh/2)'}}>
        <LoaderCircleIcon className="animate-spin text-primary mx-auto" size={48} />
    </div>
  )
}   