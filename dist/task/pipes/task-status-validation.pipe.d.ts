import { PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly validStatuses: TaskStatus[];
    transform(value: any): any;
}
