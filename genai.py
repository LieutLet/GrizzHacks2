import google.generativeai as genai
import os
from docx import Document

lines = []
doc = Document("/Users/bronc/python stuff/brainrotList.docx")

# Read line by line
for paragraph in doc.paragraphs:
    lines.append(paragraph)


# ---------------------------------------------------------------------------
string = ""
for paragraph in lines:
    string.join(paragraph.text)

prompt = "with this context translate: Thy visage plagues my mind as the moon pulls the tide—unbidden and relentless, thou dost haunt my waking hours, and in slumber thou dost root thyself like weeds in fallow soil, sprouting madness most divine. Would that I could tear thee from my thoughts, yet thy name beats within my breast like a war drum, ceaseless, unyielding!" + string
brainrot = False

with open("apikey.txt") as file:
    apikey = file.read()

genai.configure(api_key = apikey)

model = genai.GenerativeModel('gemini-2.0-flash')
print(prompt + "\n goes to \n")

if (brainrot == True):

    prompt = "translate this brainrot and return just the fixed english with no explanation:" + prompt
    response = model.generate_content(prompt)
    print(response.text)

else:
    
    prompt = "translate this into brainrot and return with no explanation:" + prompt
    response = model.generate_content(prompt)
    print(response.text)

