

import tkinter as tk
from PIL import Image, ImageTk
import random

window = tk.Tk()
window.geometry("900x580")
window.title("Dice roll")

dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
image1 = ImageTk.PhotoImage(Image.open(random.choice(dice)))
image2 = ImageTk.PhotoImage(Image.open(random.choice(dice)))
image3 = ImageTk.PhotoImage(Image.open(random.choice(dice)))

label1 = tk.Label(window, image=image1)
label2 = tk.Label(window,image=image2)
label3 = tk.Label(window,image=image3)

label1.image = image1
label2.image = image2
label3.image = image3

label1.place(x=30 , y=100, width=200, height=200)
label2.place(x=300, y=100, width=200, height=200)
label3.place(x=570, y=100, width=200, height=200)

def dice_roll():
    new_image1 = ImageTk.PhotoImage(Image.open(random.choice(dice)))
    label1.configure(image=new_image1)
    label1.image = new_image1

    new_image2 = ImageTk.PhotoImage(Image.open(random.choice(dice)))
    label2.configure(image=new_image2)
    label2.image = new_image2

    new_image3 = ImageTk.PhotoImage(Image.open(random.choice(dice)))
    label3.configure(image=new_image3)
    label3.image = new_image3

button_roll = tk.Button(window, text="ROLL", bg="black", fg="white", font="Times 20 bold", command=dice_roll)
button_roll.place(x=230, y=0)

def roll_dice():
    a = random.randint(1,6)
    result_label = tk.Label(window, text=a, font="Times 20 bold")
    result_label.place(x=250, y=350)

button_click = tk.Button(window, text="click", command=roll_dice)
button_click.place(x=270, y=320)
   
window.mainloop()


