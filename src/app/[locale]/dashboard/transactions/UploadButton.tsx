import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type Props = {
  onUpload: (results: any) => void;
};

export function UploadButton({ onUpload }: Props) {
  const t = useTranslations("dashboard");

  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button size="sm" className="w-full lg:w-auto" {...getRootProps()}>
          <Upload className="mr-2 size-4" />
          {t("uploadButton")}
        </Button>
      )}
    </CSVReader>
  );
}
