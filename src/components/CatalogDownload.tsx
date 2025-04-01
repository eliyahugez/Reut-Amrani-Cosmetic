import React from "react";
import { Download } from "lucide-react";

interface CatalogDownloadProps {
  catalogPath: string;
  buttonText?: string;
  className?: string;
}

/**
 * Component for downloading product catalog PDF
 */
const CatalogDownload: React.FC<CatalogDownloadProps> = ({
  catalogPath,
  buttonText = "הורד קטלוג מוצרים",
  className = "",
}) => {
  return (
    <a
      href={catalogPath}
      download
      className={`flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Download size={20} />
      <span>{buttonText}</span>
    </a>
  );
};

export default CatalogDownload;
