#For converting the animal file to js array.

e = []
with open("animals") as f:
	for line in f:
		e.append("\'"+line.strip("\n")+"\'")

print(e)

with open("animals-conv", "w") as f:
	f.write(",".join(e))
