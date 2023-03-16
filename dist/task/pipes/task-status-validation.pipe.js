"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("../task.model");
class TaskStatusValidationPipe {
    constructor() {
        this.validStatuses = [
            task_model_1.TaskStatus.OPEN,
            task_model_1.TaskStatus.IN_PROGRESS,
            task_model_1.TaskStatus.DONE
        ];
    }
    transform(value) {
        console.log("value ", value);
        if (this.validStatuses.indexOf(value.toUpperCase()) == -1) {
            throw new common_1.BadRequestException();
        }
        return value;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipe.js.map