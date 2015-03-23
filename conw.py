#For converting the animal file to js array.

e = []
with open("words2") as f:
  for line in f:
    parts = line.split(":")
    e.append("\'"+parts[0].strip("\n")+"\'")

print(e)

with open("words2-conv", "w") as f:
  f.write(",".join(e))
