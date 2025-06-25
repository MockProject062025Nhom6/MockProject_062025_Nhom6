import { AppSidebar } from "@/components/nav/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const WattingProcessCase = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <SidebarTrigger />
                <div>
                    <div className="font-bold text-5xl text-center">
                        <span>List of case to be solved</span>
                    </div>
                    <div className="lg:w-[70%] mx-auto mt-3.75">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead >Number</TableHead>
                                    <TableHead className="w-[100px]">Name</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody >
                                {Array.from({ length: 5 }).map((_, i) => {
                                    return (
                                        <TableRow key={i} >
                                            <TableCell className="font-medium ">{i + 1}</TableCell>
                                            <TableCell>Murder case of hotell Mariot</TableCell>
                                            <TableCell className="text-right">8:22 23/2/2025</TableCell>
                                        </TableRow>
                                    )
                                })}
                                

                            </TableBody>
                        </Table>
                    </div>
                   
                </div>
            </main>
        </SidebarProvider>
    )
}


export default WattingProcessCase