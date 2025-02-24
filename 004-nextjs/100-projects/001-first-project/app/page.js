import Users from "@/components/Users";;

async function fetchUsers() {
    const resp_users = await fetch(`https://reqres.in/api/users`);
    const json_users = await resp_users.json();
    // console.log(json_users);
    return json_users.data;
}

export default async function HomePage(){
    const users = await fetchUsers();
    return (
        <Users users={users} />
    );
};
