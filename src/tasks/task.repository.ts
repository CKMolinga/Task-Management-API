// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Task } from './task.entity';

// @Injectable()
// export class TasksRepository {
//   constructor(
//     @InjectRepository(TasksRepository)
//     private $repository: Repository<Task>,
//   ) {}

//   async createTask(title: string, description: string) {
//     console.log('inside repo')
//     const task =  this.$repository.create({ title, description });
//     return this.$repository.save(task);
//   }
// }

// /*
// @Injectable()
// export class TasksRepository extends Repository<Task> {
//     constructor(
//         @InjectRepository TaskRepository(Task)
//         private $repository: Repository<Task>
//     ){}
// }

// */
