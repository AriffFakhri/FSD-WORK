# task 1
print("\nTask 1")


def reverse_string(input_string):
    return input_string[::-1]


print(reverse_string("england"))  


# task 2
print("\nTask 2")

def find_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)


print(find_average([5,5,5,5,5,5])) 


# task 3
print("\nTask 3")

def merge_dicts(dict1, dict2):
    merged_dict = dict1.copy()
    for key, value in dict2.items():
        if key in merged_dict:

            merged_dict[key] = [merged_dict[key], value] if not isinstance(merged_dict[key], list) else merged_dict[key] + [value]
        else:

            merged_dict[key] = value
    return merged_dict
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 4, 'c': 5, 'd': 6}
result = merge_dicts(dict1, dict2)
print(result)


# task 4
print("\nTask 4")

def divide_numbers(num1, num2):
    try:
        result = num1 / num2
        return result
    except ZeroDivisionError:
        print("Error: Division by zero.")
        return None


print(divide_numbers(9, 0))  


# task 5
print("\nTask 5")

from tkinter import Tk, Label, Entry, Button

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)

def calculate_rectangle():
    try:
        length = float(length_entry.get())
        width = float(width_entry.get())
        rectangle = Rectangle(length, width)
        area_label.config(text=f"Area: {rectangle.area()}")
        perimeter_label.config(text=f"Perimeter: {rectangle.perimeter()}")
        error_label.config(text="")
    except ValueError:
        error_label.config(text="Invalid input: Please enter numerical values for length and width.")

root = Tk()
root.title("Rectangle Calculator")

# Input labels and entries
length_label = Label(root, text="Length:")
length_label.pack()

length_entry = Entry(root)
length_entry.pack()

width_label = Label(root, text="Width:")
width_label.pack()

width_entry = Entry(root)
width_entry.pack()

# Calculate button
calculate_button = Button(root, text="Calculate", command=calculate_rectangle)
calculate_button.pack()

# Output labels
area_label = Label(root, text="Area:")
area_label.pack()

perimeter_label = Label(root, text="Perimeter:")
perimeter_label.pack()

error_label = Label(root, text="")
error_label.pack()

root.mainloop()


# task 6
print("\nTask 6")

def bubble_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already in place, so no need to check them again
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Example usage:
if __name__ == "__main__":
    # Test the function with a sample list
    arr = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", arr)
    
    bubble_sort(arr)
    
    print("Sorted array:", arr)


# task 7
print("\nTask 7")
import requests
from bs4 import BeautifulSoup

def scrape_news_titles(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    titles = []
    for headline in soup.find_all('h3', class_='gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text'):
        titles.append(headline.text.strip())
    return titles[:5]  # Return top 5 titles

print(scrape_news_titles("https://www.bbc.com/news"))






# task 8
print("\nTask 8")

import matplotlib.pyplot as plt
import numpy as np

temp = np.array([31, 18, 11, -10, 26, 33, 22])

plt.plot(temp, linestyle = 'dotted')
plt.title('Temperature 7 days')
plt.xlabel('Day of the Week')
plt.ylabel('Temperature (°C)')
plt.show()


# task 9
print("\nTask 9")

def find_duplicates(numbers):
    seen = set()
    duplicates = set()
    for num in numbers:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return list(duplicates)

print(find_duplicates([1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 7, 9]))