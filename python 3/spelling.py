
import tkinter
from tkinter import *
from textblob import TextBlob




root = Tk()
root.title("Spelling Checker")
root.geometry("700x400")
root.config(background="blue")


def check_spelling():
    word = enter_text.get()
    a = TextBlob(word)
    right = str(a.correct())


    cs = Label(root,text="Correct text is :", font=("poppins", 20),bg="black" , fg="white")
    cs.place(x=100,y=250)
    spell.config(text=right)


heading = Label(root,text="Spelling checker", font="times 30 bold" , bg="black", fg="white")
heading.pack(pady=(50,0))


enter_text = Entry(root,justify="center" , width=20,font=("poppins" , 35),bg="white",border=2)
enter_text.pack(pady=10)
enter_text.focus()


button = Button(root, text="Check" , font="times 20 bold" , fg="white",bg="red", command=check_spelling)
button.pack()


spell = Label(root,font="poppins 20 bold", bg="black" , fg="white")
spell.place(x=300, y=250)


root.mainloop()
