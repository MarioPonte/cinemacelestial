import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { PanelLeft } from "lucide-react"

export function CustomTrigger() {
    const { toggleSidebar } = useSidebar()

    return (
        <button className="ring-1 p-1 rounded-md">
            <PanelLeft className="h-6 w-6" onClick={toggleSidebar} />
        </button>
    )
}