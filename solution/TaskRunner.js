/**
 * This is a generic mock task that takes in an id and numberOfSeconds
 * to execute.
 * 
 * @param {number} taskId Any id to identify the task
 * @param {*} numberOfSeconds Time in seconds 
 */
function mockTask(taskId, numberOfSeconds) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(`Finished executing task ${taskId}`);
            resolve(); 
        }, numberOfSeconds);
    });
}

/**
 * 
 * @param {number} k The max number of tasks that can be executed in parallel by the TaskRunner
 */
function TaskRunner(k) {
    const queue = [];
    let activeTasks = 0;

    this._max = k;
    
    this.run = function (taskName, taskId, time){
        console.log(`Adding task ${taskId} to the queue`);
        queue.push([taskName, taskId, time]);
        if (activeTasks < this._max) {
            this._execute();
        }
    };
    
    this._execute = function() {
        if (queue.length > 0 && activeTasks < this._max) {
            const [taskName, taskId, time] = queue.shift();
            activeTasks++;
            console.log(`Starting to execute task ${taskId}`);
            taskName(taskId, time).then(() => {
                activeTasks--;
                this._execute();
            })
        }
    };
}


/**
 * 
    Run the following commands to test the taskrunner

    const taskRunner = new TaskRunner(2);
    taskRunner.run(mockTask, 1, 5000);
    taskRunner.run(mockTask, 2, 5000);
    taskRunner.run(mockTask, 3, 4000);
    taskRunner.run(mockTask, 4, 1000);
    taskRunner.run(mockTask, 5, 1000);
    taskRunner.run(mockTask, 6, 3000);
    taskRunner.run(mockTask, 7, 4000);
    taskRunner.run(mockTask, 8, 4000);
 */