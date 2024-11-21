import { TabsTrigger } from "@/components/ui/tabs";

const SessionDay = ({ weekDay, day }) => {
    return (
        <TabsTrigger value={weekDay} className="flex flex-col gap-1">
            <span className="text-xs">{weekDay}</span>
            <span className="font-semibold">{day}</span>
        </TabsTrigger>
    );
}

export default SessionDay;