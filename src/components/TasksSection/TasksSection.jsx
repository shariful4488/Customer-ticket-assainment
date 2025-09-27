import TaskSectionCard from "../TaskSectionCard/TaskSectionCard";

const TasksSection = ({taskSection,handleResolveTask}) => {
    return (
        <div>
            <p className='text-2xl md:text-4xl font-semibold'>Task Status</p>
            <div className='grid gap-y-5 md:mt-7'>
                { 
                  taskSection.map((task) => (
                    <TaskSectionCard task={task} key={task.id} handleResolveTask={handleResolveTask} ></TaskSectionCard>
                  ))  
                }
            </div>
        </div>
    );
};

export default TasksSection;