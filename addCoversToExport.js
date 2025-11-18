const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");
const { fetchBookCovers } = require("./util/fetchCovers.js");

const booksCSV = fs.readFileSync("_data/goodreads_library_export.csv", "utf-8");
const books = parse(booksCSV, { columns: true });

async function proccessBooks() {
  await fetchBookCovers(books);
  const outputCSV = stringify(books, { header: true });
  try {
    fs.writeFileSync(
      "_data/goodreads_library_export.csv",
      outputCSV,
      "utf8"
    );
  } catch (err) {
    console.error("error writing csv file:", err);
    return null
  }
}

proccessBooks();
