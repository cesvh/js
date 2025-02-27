import { prisma } from "@/libs/prisma";

async function loadTasks(){
    // Formas de obtener datos
    // 1- Consumir api con /api/tasks
    // const res = await fetch(`http://localhost:3000/api/tasks`);
    // const data = await res.json();
    // 2- Obtener de la db con prisma
    const tasks = await prisma.task.findMany();
    return tasks;
}

async function HomePage(){
    const tasks = await loadTasks();
    // console.log(tasks);
    return <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 mt-10">
            {tasks.map((task) => (
                <div key={task.id} className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer">
                    <h3 className="font-bold text-2xl mb-2">
                        {task.title}
                    </h3>
                    <p>
                        {task.description}
                    </p>
                    <p>
                        {new Date(task.creationAt).toLocaleDateString()}
                    </p>
                </div>
            ))}
        </div>
    </section>;
}

export default HomePage;