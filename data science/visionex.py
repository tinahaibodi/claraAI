import webbrowser as wb
import speech_recognition as sr
from time import ctime
import time
import os
from gtts import gTTS
import search_google.api

# the user is asking for their covfefe social media sources here
# we will say clara tell me news about refugees 

def facebook(topic):
	speak("Hold on "+name+" , I will redirect you to 10 articles.")
	wb.open("www.facebook.com")
	
def locations(topic):
	data = data.split(" ")
	location = data[2]
	speak("Hold on "+name+" , I will show you where the President of the United States just travelled" + location + " today.")
	wb.open("https://www.google.com/maps/place/Washington,+DC "+location+" /&amp")
	
def search(data,topic):
	speak("wait for a while "+name+" ,I will search for you.")
	wb.open("https://www.google.co.in/?gfe_rd=cr&ei=V7DXWJuQNarT8gfb-42QBw&gws_rd=ssl#newwindow=1&safe=active&q="+data+"&*")
    
def speak(audioString):
    print(audioString)
    tts = gTTS(text=audioString, lang='en')
    tts.save("audio.mp3")
    os.system("audio.mp3")
    
def recordAudio():
    # Record Audio
    r = sr.Recognizer()
    r.energy_threshold=500
    with sr.Microphone() as source:audio = r.listen(source)
		#print("Here is where we speak")
 
    # Speech recognition using Google Speech Recognition with Google Search Speech API

    data = ""
    try:
        # Here I use the default API Key
        # To use another API key: `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`

        data = r.recognize_google(audio)
        print("You said: " + data)
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))
 
    return data


with sr.Microphone() as source:                
    while True:
        r = sr.Recognizer()
        audio = r.listen(source)
        words = sr.recognize(audio)
        print("You said " + words) 
        if words == "Syria":
            webbrowser.open('https://www.google.com/search?safe=active&source=hp&ei=jcgjWt7dOs7D_Qak7JGoCw&q=todays+news+on+syria&oq=todays+news+on+syria&gs_l=psy-ab.3..35i39k1j0i22i30k1l9.706.2604.0.2775.21.11.0.0.0.0.320.1221.1j3j0j2.6.0....0...1c.1.64.psy-ab..15.6.1219.0..0j0i10i67k1j0i67k1j0i131k1j0i10k1j0i20i263i264k1j0i20i263k1.0.bPa7KAKkb1M')
        elif words =="Syria":
            webbrowser.open('https://www.google.co.uk')
        elif words == "Stop":
            break
 
def PA(data,topic):
	if "what is your name" in data:
		speak("I'm Clara.")
		
	if "how are you" in data:
		speak("I am fine and you ?")	
		
	if "I would like to see news on Syria today" in data:
		speak(name)
		
	if "search for news on Syria" in data:
		search(data,name)

	if "goodbye" in data:
		speak("Good bye ! ,"+name+" ,take care!!")
		exit()
 
# initialization

speak("Hello! What type of news would you like to see today?")
topic=input()
                
speak("Okay I'll try to see if I can find the most factual articles on" +topic+ "today") 

while 1:
    print("Speak. . .")
    data = recordAudio()
    print ("Processing. . .")
