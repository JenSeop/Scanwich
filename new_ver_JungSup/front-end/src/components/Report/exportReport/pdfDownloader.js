import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const PdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <Button variant='text' startIcon={<PictureAsPdfIcon/>} onClick={downloadPdfDocument}>Download</Button>

}

export default PdfDownloader;