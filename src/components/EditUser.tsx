"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { z } from "zod";

const formSchema = z.object({
    username: z.string().min(2).max(50),
});

const EditUser = () => {
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription></SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
};

export default EditUser;
