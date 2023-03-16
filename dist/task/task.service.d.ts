import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
