import { Injectable } from '@nestjs/common';
// import { Task, TaskStatus } from './task.model';
import {v1 as uuidv1} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetFilterDto } from './dto/get-task-filter.dto';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository (Task)
        private taskRepository : Repository<Task>
    ){
        
    }

    async getTaskById(id: number): Promise<Task> {
        const task = await this.taskRepository.findOneBy({id});

        return task;

    }

    async createTask(createTaskDto: CreateTaskDto) : Promise<Task> {
        const task = new Task();
        const { title, description } = createTaskDto;
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        await task.save();
        return task;
    }

    // private tasks: Task[] = [];

    // getAllTasks() : Task[] {
    //     return this.tasks;
    // }

    // getAllTasksByFilter(GetFilterDto: GetFilterDto): Task[] {
    //     const {status, search} = GetFilterDto;
    //     let tasks = this.tasks;
    //     if(status){
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if(search) {
    //         tasks = tasks.filter(task => task.description.includes(search))
    //     }
    //     return this.tasks;
    // }

    // getTaskById(id: string): Task {
    //     return this.tasks.find(task => task.id===id);
    // }

    // createTask(createTaskDto: CreateTaskDto) :Task {
    //     const { title, description } = createTaskDto;
    //     const task: Task = {
    //         id: uuidv1(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     };
    //     this.tasks.push(task);

    //     return task;
    // }

    // deleteTaskById(id: string){
    //     this.tasks = this.tasks.filter(task => task.id !== id)
    // }

    // updateTaskStatus(id, status){
    //     const task = this.tasks.find(task => task.id === id);
    //     task.status = status;
    //     return task
    // }
}
