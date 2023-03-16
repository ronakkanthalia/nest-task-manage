import { BaseEntity } from "typeorm";
import { TaskStatus } from "./task.model";
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
