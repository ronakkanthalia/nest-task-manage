import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly validStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ]
    transform(value: any) {
        console.log("value ", value);
        if(this.validStatuses.indexOf(value.toUpperCase()) == -1 ){
            throw new BadRequestException();
        }
        return value;
    }
}