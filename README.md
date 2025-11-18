# Add Covers to Goodreads Exports

Simple CLI tool that adds book cover image URLs to a Goodreads Library Export CSV file.

# Install

- Run these commands in your terminal:

```
git clone https://github.com/tigejw/Add-Covers-To-Goodreads-Exports.git
cd Add-Covers-To-Goodreads-Exports
npm install

```

# Usage

- Place your Goodreads Export File in the \_data folder

  **IMPORTANT**: file must be called "goodreads_library_export.csv"

- Run ```node addCoversToExport.js``` to start the program.

- Wait until you see the "Successfully added covers to goodreads_library_export.csv" message in your terminal.

- Your goodreads_library_export.csv should now have an additional column at the end called cover_url with the relevant image links.

# File Changes

Existing Columns
```
Book Id, Title, Author...
```
Updated Columns
```
Book Id, Title, Author... cover_url
```

# Development

This project was inspired by these existing projects:

- Notion scripts by codiak: https://github.com/codiak/notion-scripts.git
- Notion scripts by AmunRa1322: https://github.com/AmunRa1322/Notion-Scripts.git

and works with Enhanced Goodreads Exports from:

- Enhanced Goodreads Exports: https://github.com/PaulKlinger/Enhance-GoodReads-Export.git
