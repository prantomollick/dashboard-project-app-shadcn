"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <Calendar1Icon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent sideOffset={10} className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setIsOpen(false);
                        }}
                        className="rounded-md border"
                    />
                </PopoverContent>
            </Popover>
            {/* List */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>
                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>

                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>

                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>

                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>

                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>

                    {/* LiST ITMM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label
                                htmlFor="item1"
                                className="text-sm text-color-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aliquid accusamus fuga odio
                                atque, cumque voluptatibus, cumque, doloremque
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    );
};

export default TodoList;
