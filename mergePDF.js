const PDFMerger = require('pdf-merger-js');
const yargs = require("yargs");
const args = yargs.argv

const fileUrl1 = "./test/dok1.pdf";
const fileUrl2 = "./test/dok2.pdf"
const finalPDF = "./test/mergedPDF.pdf";

const merger = new PDFMerger();

(async () => {
    await merger.add(fileUrl1);
    await merger.add(fileUrl2);
    await merger.save(finalPDF);
})();