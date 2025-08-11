import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

export const exportToPdf = (list, listText, intl) => {
  const doc = new jsPDF();
  
  // Configurar fuente y tamaño
  doc.setFont('helvetica');
  doc.setFontSize(16);
  
  // Título
  doc.text(list.name, 20, 20);
  
  // Descripción si existe
  if (list.description) {
    doc.setFontSize(12);
    doc.text(list.description, 20, 30);
  }
  
  // Puntos totales
  doc.setFontSize(14);
  doc.text(`${intl.formatMessage({ id: 'misc.points' })}: ${list.points}`, 20, 45);
  
  // Contenido de la lista
  doc.setFontSize(10);
  const lines = listText.split('\n');
  let yPosition = 60;
  
  lines.forEach((line, index) => {
    if (yPosition > 280) {
      doc.addPage();
      yPosition = 20;
    }
    
    if (line.trim()) {
      doc.text(line, 20, yPosition);
      yPosition += 5;
    }
  });
  
  // Guardar archivo
  const fileName = `${list.name.toLowerCase().replace(/ /g, '-').replace(/,/g, '')}.pdf`;
  doc.save(fileName);
};

export const exportToWord = async (list, listText, intl) => {
  const children = [];
  
  // Título
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: list.name,
          bold: true,
          size: 32,
        }),
      ],
      spacing: { after: 400 },
    })
  );
  
  // Descripción si existe
  if (list.description) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: list.description,
            size: 24,
          }),
        ],
        spacing: { after: 400 },
      })
    );
  }
  
  // Puntos totales
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${intl.formatMessage({ id: 'misc.points' })}: ${list.points}`,
          bold: true,
          size: 24,
        }),
      ],
      spacing: { after: 400 },
    })
  );
  
  // Contenido de la lista
  const lines = listText.split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: line,
              size: 20,
            }),
          ],
          spacing: { after: 200 },
        })
      );
    }
  });
  
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: children,
      },
    ],
  });
  
  // Generar y guardar archivo
  const blob = await Packer.toBlob(doc);
  const fileName = `${list.name.toLowerCase().replace(/ /g, '-').replace(/,/g, '')}.docx`;
  saveAs(blob, fileName);
}; 