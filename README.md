# Zombicide Database

A web viewer for the 2nd Edition of Zombicide. View online at [https://danijourdain.github.io/zombicide-database](https://danijourdain.github.io/zombicide-database)

## Setup

Add content here

## Contributing

Add content here

## Adding new cards

Add cards to a spreadsheet using the **exact same** format as [exampleCSV.csv](https://github.com/danijourdain/zombicide-database/blob/main/scripts/exampleCSV.csv). Feel free to download this file and edit it with any new cards!

Create a virtual environment & install all dependencies in `src/requirements.txt`.

Run `csv_to_json.py`.

Copy the contents of the output `csv_export.json` **not including the square brackets** into `website/src/assets/card-list.json` ensuring there are **no** overlapping card IDs.

Add images to folders matching the format of the cards already there. Text and capitalization must match the spreadsheet contents **exactly**. If any of the names start with a '.' character, please rename the image file to omit that. Eg. A card named `.38.png` from the Starter Deck of Rio Z Janeiro should be named like this: `Rio Z Janeiro/Starter/38.png`.

Open a pull request to get the new cards added to the deployed site.
