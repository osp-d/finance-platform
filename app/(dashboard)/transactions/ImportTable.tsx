import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { TableHeadSelect } from "./TableHeadSelect";

type Props = {
  headers: string[];
  body: string[][];
  selectedColumns: Record<string, string | null>;
  onTableHeadSelectChange: (columnIndex: number, value: string | null) => void;
};

export function ImportTable({
  headers,
  body,
  selectedColumns,
  onTableHeadSelectChange,
}: Props) {
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            {headers.map((_item, index) => (
              <TableHead key={index}>
                <TableHeadSelect
                  columnIndex={index}
                  selectedColumns={selectedColumns}
                  onChange={onTableHeadSelectChange}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {body.map((row: string[], index) => (
            <TableRow key={index}>
              {row.map((cell, index) => (
                <TableCell key={index}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
