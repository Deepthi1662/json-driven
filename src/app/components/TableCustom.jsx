import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const TableCustom = ({ response }) => {
    return (
        <Table className="min-w-full table-auto border-collapse w-[600px]">
            <TableHeader>
                <TableRow className="bg-blue-100 text-left">
                    {console.log("Table response:: ", response)}
                    {response?.columnNames && response?.columnNames.map((col) => (
                        <TableHead key={col} className="px-4 py-2 font-medium text-gray-600 uppercase tracking-wide">
                            {col}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {response?.rows && response?.rows.map((row) => (
                    <TableRow key={row?.id} className="hover:bg-gray-50 border-t border-gray-200">
                        {response?.columnNames && response?.columnNames.map((col) => (
                            <TableCell
                                key={col}
                                className={`px-4 py-3 ${typeof row[col] === "number" ? "text-right" : "text-left"} text-gray-700`}
                            >
                                {row[col]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableCustom;
