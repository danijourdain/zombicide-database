import pandas as pd
import tkinter
import tkinter.filedialog
import json


def read_csv(path_to_csv: str) -> pd.DataFrame:
    '''
    Read CSV from disk. 
    
    :param path_to_csv: Path to the CSV file to be read. Should have forward slashes separating folders
    :type path_to_csv: str
    :return: A pandas dataframe containing the contents of the CSV file
    :rtype: DataFrame
    '''

    card_data = pd.read_csv(path_to_csv)

    return card_data

def csv_to_json(df: pd.DataFrame) -> list:
    '''
    Convert CSV data to JSON format for use with the website

    :param df: The pandas dataframe containing the CSV data
    :type df: pd.DataFrame
    :return: A list containing the data for each card in a dictionary
    :rtype: list[Any]
    '''

    # TODO: Handle cards that have both ranged & melee stats

    card_list = []

    for i, row in df.iterrows():
        card_data = {}
        card_data["id"] = i
        card_data["name"] = row["Card Name"]
        card_data["deck"] = row["Deck"] 
        card_data["edition"] = row["Edition"] 
        card_data["quantity"] = row["QTY"] 
        card_data["type"] = row["Type"] 
        card_data["range_type"] = row["Range Type"] 
        card_data["min_range"] = row["Min Range"] 
        card_data["max_range"] = row["Max Range"] 
        card_data["dice"] = row["Dice"] 
        card_data["success"] = row["Success"] 
        card_data["damage"] = row["Damage"] 
        card_data["dual_wield"] = row["Dual Wield"] 
        card_data["open_door"] = row["Open Door"] 
        card_data["text"] = row["Text"] if not pd.isna(row["Text"]) else ""

        card_list.append(card_data)

    return card_list

def save_json(card_list: list, filname: str = "csv_export.json"):
    with open(filname, "w") as file:
        json.dump(card_list, file)

def main():
    # select the CSV file
    tkinter.Tk().withdraw()
    csv_filename = tkinter.filedialog.askopenfilename(filetypes=[("CSV files", ".csv")])

    # read the csv file
    card_df = read_csv(csv_filename)

    # convert to a dictionary
    card_dict = csv_to_json(card_df)

    # save to JSON
    save_json(card_dict)


if __name__ == "__main__":
    main()