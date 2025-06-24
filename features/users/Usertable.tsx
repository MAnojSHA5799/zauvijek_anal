import { columns } from "./components/columns";
import DataTable from "./components/data-table";
import { users } from "./components/users";

export default async function Usertable() {
  // This is where you would fetch external data:
  // const exampleExternalData = await fetchExternalDataFunction();

  // In our example we use local data
  return (
    <div className="container p-2">
      <DataTable data={users} columns={columns} />
    </div>
  );
}
