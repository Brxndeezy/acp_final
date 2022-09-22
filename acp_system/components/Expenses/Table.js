import Link from "next/link";
import { useRouter } from "next/router";

const Table = () => {
  const router = useRouter();

  return (
    <div>
      <div class="md:container mx-auto py-5 border-b-2 border-gray-900 max-w-md w-full">
        <div class="flex justify-start px-14">
          <div class="space-x-4">
            <button class= "bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg">
              Add Expense
            </button>

            <button class=" bg-red-500 text-white px-4 py-2 rounded-xl shadow-lg">
              Remove Expense
            </button>
          </div>
          <div class="flex justify-between space-x-4">
            <h1 class="px-8 text-center text-4xl font-bold">
              Expense Management
            </h1>
            <button class=" bg-gray-900 text-white px-4 py-2 rounded-xl shadow-lg">
              <Link href="/home">Go Back</Link>
            </button>
          </div>
        </div>
      </div>
      <table class="flex min-w-full table-auto justify-center p-6 h-full">
        <thead>
        <tr class="bg-gray-900 text-white ">
          <th class="px-8 py-2">
            <span class="flex">Expense Name</span>
          </th>
          <th class="px-8 py-2">
            <span class="flex">Expense Type</span>
          </th>

          <th class="px-8 py-2">
            <span class="flex">Expense Price</span>
          </th>

          <th class="px-8 py-2">
            <span class="flex">Date Created</span>
          </th>

          <th class="px-8 py-2">
            <span class="flex">Created By</span>
          </th>
        </tr>
        </thead>
        <tbody class=""></tbody>
      </table>
    </div>
  );
};

export default Table;
