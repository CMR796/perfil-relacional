// services/pdfGenerator.js

export class PDFGenerator {

  generate(report) {

    console.log(
      "Generación PDF pendiente",
      report
    );

  }

}

const pdfGenerator =
  new PDFGenerator();

export default pdfGenerator;
