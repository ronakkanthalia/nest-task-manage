import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetFilterDto } from './dto/get-task-filter.dto';
// import { Task } from './task.model';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){

    }



    // @Get()
    // getAllTasks(@Query(ValidationPipe) GetFilterDto: GetFilterDto): Task[] {
    //     if(Object.keys(GetFilterDto).length){
    //         return this.taskService.getAllTasksByFilter(GetFilterDto);
    //     } else {
    //         return this.taskService.getAllTasks();
    //     }
    // }

    @Get("/:id")
    async getTaskById(@Param("id", ParseIntPipe) id: number) : Promise<Task>{
        let found = await this.taskService.getTaskById(id);
        console.log(found);
        if(!found) throw new NotFoundException();
        return found;
    }

    @Post()
    @UsePipes(ValidationPipe)
     createTask(@Body() CreateTaskDto: CreateTaskDto) : Promise <Task> {
        return this.taskService.createTask(CreateTaskDto);
    } 

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto) {
    //     console.log('body ', createTaskDto);
    //     return this.taskService.createTask(createTaskDto);
    // }

    // @Delete("/:id")
    // deleteTaskById(@Param("id") id:string): void {
    //     return this.taskService.deleteTaskById(id);
    // }

    // @Patch("/:id/status")
    // updateTaskStatus(@Param("id") id:string, @Body("status", TaskStatusValidationPipe) status: string) : Task {
    //     return this.taskService.updateTaskStatus(id,status);
    // }
}
