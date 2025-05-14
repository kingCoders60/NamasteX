interface Task{
    id:number;
    title:string;
    completed:boolean;
}

let task: Task[]=[
    {id: 1,
    title: "Sample Task",
    completed: false},
    {id:2,
    title:"Build a Project",completed:false
    }
];
export async function GET(){
    return Response.json(task); 
}
export async function POST(request:Request){
    try{
        const body = await request.json();
        if(!body.title){
            return Response.json({error:"Title is required"},{status:400});
        }
    }catch(error){

    }
}