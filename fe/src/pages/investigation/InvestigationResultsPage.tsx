import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from 'lucide-react';
import { useState } from "react";

const dataRecords = [
    {
        type: "Financial",
        source: "From ACB Bank",
        date: "24/2/2025",
        summary: "Nothing unusual",
        action: <Trash2 />
    },
    {
        type: "Medical",
        source: "From K2AT hospital",
        date: "24/2/2025",
        summary: "Link",
        action: <Trash2 />
    }
];

const dataSuspects = [
    {
        id: "S001",
        name: "Nguyen Van A",
        timeCatch: "24/2/2025",
        action: <Button variant="ghost" size="icon" className="hover:border-none w-20 hover:bg-red-100">Interview</Button>,
        status: "Under investigation"
    },
    {
        id: "S002",
        name: "Tran Thi B",
        timeCatch: "25/2/2025",
        action: <Button variant="ghost" size="icon" className="hover:border-none  w-20 hover:bg-red-100">Interview</Button>,
        status: "Released"
    }
];

interface CollectedRecord {
    type: string;
    source: string;
    date: string;
    summary: string;
}

interface InvestigativeMeasure {
    type: string;
    approvalLink: string;
    results: string;
    onDelete?: () => void;
}

interface SuspectInfo {
    id: string;
    name: string;
    timeCatch: string;
    status: string;
}

interface DigitalInvestigation {
    device: string;
    tools: string;
    results: string;
}

export default function InvestigationResults() {
    const [records, setRecords] = useState<CollectedRecord[]>([
        { type: "Financial", source: "From ACB Bank", date: "24/2/2025", summary: "Nothing unusual" },
        { type: "Medical", source: "From K2AT hospital", date: "24/2/2025", summary: "Link" }
    ]);
    const [suspects, setSuspects] = useState<SuspectInfo[]>([
        { id: "S001", name: "Nguyen Van A", timeCatch: "24/2/2025", status: "Under investigation" },
        { id: "S002", name: "Tran Thi B", timeCatch: "25/2/2025", status: "Released" }
    ]);
    // const [measures, setMeasures] = useState<InvestigativeMeasure[]>([]);
    // const [digitalList, setDigitalList] = useState<DigitalInvestigation[]>([]);
    // const [financialResult, setFinancialResult] = useState("");
    // const [resultAnalysis, setResultAnalysis] = useState("");

    const handleAddRecord = () => {
        setRecords([...records, { type: "", source: "", date: "", summary: "" }]);
    };
    const handleDeleteRecord = (idx: number) => {
        setRecords(records.filter((_, i) => i !== idx));
    };
    // const handleRecordChange = (idx: number, field: keyof CollectedRecord, value: string) => {
    //     setRecords(records.map((rec, i) => i === idx ? { ...rec, [field]: value } : rec));
    // };

    const handleAddSuspect = () => {
        setSuspects([...suspects, { id: "", name: "", timeCatch: "", status: "" }]);
    };
    // const handleDeleteSuspect = (idx: number) => {
    //     setSuspects(suspects.filter((_, i) => i !== idx));
    // };

    // const handleAddMeasure = () => {
    //     setMeasures([...measures, { type: "", approvalLink: "", results: "" }]);
    // };
    // const handleDeleteMeasure = (idx: number) => {
    //     setMeasures(measures.filter((_, i) => i !== idx));
    // };

    // const handleAddDigital = () => {
    //     setDigitalList([...digitalList, { device: "", tools: "", results: "" }]);
    // };
    // const handleDeleteDigital = (idx: number) => {
    //     setDigitalList(digitalList.filter((_, i) => i !== idx));
    // };
    // const handleFinancialChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setFinancialResult(e.target.value);
    // };

    return (
        <div className="min-h-screen w-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-8 px-2 md:px-8">
                <div className="bg-white rounded-lg shadow p-4 md:p-8 w-full">
                    <h1 className="text-2xl font-bold mb-4 text-center">Investigation results and analyst</h1>

                    <div className="mb-4">
                        <p><strong>IDCase:</strong> C0001</p>
                        <p><strong>Name:</strong> Murder case of hotel Mariot</p>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold">Result collected</h2>
                            <div className="mt-2 space-y-4">
                                <div>
                                    <h3 className="font-medium">Physical evidence</h3>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Button variant="outline">Images 1</Button>
                                        <Input placeholder="Describe..." className="border rounded px-2 py-1 flex-1" />
                                        <Button variant="ghost" onClick={handleAddRecord}>+</Button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium">Forensic examination results</h3>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Button className="text-black">Upload file</Button>
                                        <Input placeholder="File 1/link" className="border rounded px-2 py-1 flex-1" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium">Collected records information</h3>
                                    <div className="overflow-auto">
                                        <Table className="w-full text-sm border mt-2">
                                            <TableHeader>
                                                <TableRow className="bg-gray-100">
                                                    <TableHead className="border px-2 py-1">Type</TableHead>
                                                    <TableHead className="border px-2 py-1">Source</TableHead>
                                                    <TableHead className="border px-2 py-1">Date</TableHead>
                                                    <TableHead className="border px-2 py-1">Summary</TableHead>
                                                    <TableHead className="border px-2 py-1">Action</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {dataRecords.map((record, index) => (
                                                    <TableRow key={index} className="hover:bg-gray-50">
                                                        <TableCell className="border px-2 py-1">{record.type}</TableCell>
                                                        <TableCell className="border px-2 py-1">{record.source}</TableCell>
                                                        <TableCell className="border px-2 py-1">{record.date}</TableCell>
                                                        <TableCell className="border px-2 py-1">{record.summary}</TableCell>
                                                        <TableCell className="border px-2 py-1 text-center">
                                                            <Button variant="ghost" size="icon" className="hover:border-none hover:bg-red-100" onClick={() => handleDeleteRecord(index)}>
                                                                {record.action}
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium">Information about investigative measures</h3>
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Input placeholder="Type" className="border rounded px-2 py-1 flex-1" />
                                        <Input placeholder="Approval Link" className="border rounded px-2 py-1 flex-1" />
                                        <Input placeholder="Results" className="border rounded px-2 py-1 flex-1" />
                                        <Button variant="ghost"><Trash2 /></Button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium">Financial investigation information</h3>
                                    <textarea
                                        placeholder="Result after collecting and analyzing financial data..."
                                        className="w-full border rounded px-2 py-1 mt-1"
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">Digital investigation information</h3>
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Input placeholder="Device/data analyzed" className="border rounded px-2 py-1 flex-1" />
                                        <Input placeholder="Tools/methods" className="border rounded px-2 py-1 flex-1" />
                                        <Input placeholder="Results" className="border rounded px-2 py-1 flex-1" />
                                        <Button variant="ghost"><Trash2 /></Button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">Result Analysis</h2>
                            <textarea
                                placeholder="Result after collected and analyzed here..."
                                className="w-full border rounded px-2 py-1 mt-1"
                                rows={3}
                            />
                        </section>

                        <section>
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Suspect information list</h2>
                                <Button className="mt-4" variant="outline" onClick={handleAddSuspect}>+ Add suspect</Button>
                            </div>
                            <div>
                                <Table className="w-full text-sm border mt-2">
                                    <TableHeader>
                                        <TableRow className="bg-gray-100">
                                            <TableHead className="border px-2 py-1">STT</TableHead>
                                            <TableHead className="border px-2 py-1">ID</TableHead>
                                            <TableHead className="border px-2 py-1">Name</TableHead>
                                            <TableHead className="border px-2 py-1">Time Catch</TableHead>
                                            <TableHead className="border px-2 py-1">Action</TableHead>
                                            <TableHead className="border px-2 py-1">Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {dataSuspects.map((suspect, index) => (
                                            <TableRow key={index} className="hover:bg-gray-50">
                                                <TableCell className="border px-2 py-1">{index + 1}</TableCell>
                                                <TableCell className="border px-2 py-1">{suspect.id}</TableCell>
                                                <TableCell className="border px-2 py-1">{suspect.name}</TableCell>
                                                <TableCell className="border px-2 py-1">{suspect.timeCatch}</TableCell>
                                                <TableCell className="border px-2 py-1 text-center">{suspect.action}</TableCell>
                                                <TableCell className="border px-2 py-1">{suspect.status}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                        </section>
                    </div>
                </div>
            </div >
        </div >
    );
}