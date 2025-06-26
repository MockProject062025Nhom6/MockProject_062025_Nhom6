import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ListWarrantSearch = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        <Button>Back</Button>
        <h2 className="flex-1 text-center">List warrant search</h2>
      </div>
      <div className="bg-gray-200 p-10">
        <div>
          <p>IDCase: C0001</p>
          <p>Name: Murder case of Mariot hotell</p>
        </div>
        <div className="mt-7">
          <Table className="bg-white">
            <TableHeader>
              <TableRow className="mt-4">
                <TableHead>Number</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Time publish</TableHead>
                <TableHead>Text publish</TableHead>
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>House Search</TableCell>
                <TableCell>2/25/2025</TableCell>
                <TableCell>Upload file</TableCell>
                <TableCell className="underline">View</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>House Search</TableCell>
                <TableCell>2/25/2025</TableCell>
                <TableCell>Upload file</TableCell>
                <TableCell className="underline">View</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ListWarrantSearch
