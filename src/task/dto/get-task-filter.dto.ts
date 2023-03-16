import { IsIn, IsOptional } from "class-validator";
import { TaskStatus } from "../task.model";

export class GetFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: string;
    
    @IsOptional()
    search: string;
}