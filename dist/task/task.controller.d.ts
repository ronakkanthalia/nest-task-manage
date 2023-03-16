import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getTaskById(id: number): Promise<Task>;
    createTask(CreateTaskDto: CreateTaskDto): Promise<Task>;
}
