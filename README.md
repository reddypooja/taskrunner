# Taskrunner
A simple Javascript task runner


## Question

Implement a task runner that can execute `k` tasks in parallel. If more tasks are added, then the tasks wait until the current tasks are executed.


### Example

We want to run the following command

```
taskRunner.run(/* taskName, taskId, numberOfSeconds */)
```

The `run` function accepts 3 parameters
    - taskName: The function that needs to be executed
    - taskId: The id of the task
    - numberOfSeconds: How long the task takes to execute 

taskRunner.run(mockTask, 1, 5000);
taskRunner.run(mockTask, 2, 5000);
taskRunner.run(mockTask, 3, 4000);
taskRunner.run(mockTask, 4, 1000);
taskRunner.run(mockTask, 5, 1000);
taskRunner.run(mockTask, 6, 3000);
taskRunner.run(mockTask, 7, 4000);
taskRunner.run(mockTask, 8, 4000);


Let's say our taskRunner can execute only 2 tasks in parallel. When more tasks are added,the taskRunner will keep the other tasks in a queue and wait for the current tasks to finish executing, and then add other tasks sequentially.

The following video is an example of how the tasks are executed.


Try executing the problem yourself before looking at the [solution]().