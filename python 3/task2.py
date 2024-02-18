def count_words():
   """Counts the words in input.txt and writes the count to word_count.txt."""

   with open("input.txt", "r") as input_file:
       content = input_file.read()
       words = content.split()
       word_count = len(words)

   with open("word_count.txt", "w") as output_file:
       output_file.write(str(word_count))

if __name__ == "__main__":
   count_words()
   print("Succesfully counted the words")