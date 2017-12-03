#!/bin/bash

# Copyright 2017 Google Inc.

# Create a request file with our JSON request in the current directory
FILENAME="request-"`date +"%s".json`
cat <<EOF > $FILENAME
{
  "config": {
    "encoding":"FLAC",
    "sampleRateHertz":16000,
    "profanityFilter": true,
    "languageCode": "en-US",
    "speechContexts": {
      "phrases": ['']
    },
    "maxAlternatives": 1
  },
  "audio": {
    "content":
	}
}
EOF

# updated the languageCode
if [ $# -eq 1 ]
  then
    sed -i '' -e "s/en-US/$1/g" $FILENAME
fi

# recorded an audio file, base64 encode it, and update our request object
read -p "Press enter when you're ready to record" rec
if [ -z $rec ]; then
  rec --channels=1 --bits=16 --rate=16000 audio.flac trim 0 5
  echo \"`base64 audio.flac`\" > audio.base64
  sed -i '' -e '/"content":/r audio.base64' $FILENAME
fi
echo Request "file" $FILENAME created:
head -7 $FILENAME # Don't print the entire file because there's a giant base64 string
echo $'\t"Your base64 string..."\n\x20\x20}\n}'

# call the speech API (requires an API key)
read -p $'\nPress enter when you\'re ready to call the Speech API' var
if [ -z $var ];
  then
    echo "Running the following curl command:"
    echo "curl -s -X POST -H 'Content-Type: application/json' --data-binary @${FILENAME} https://speech.googleapis.com/v1/speech:recognize?key=API_KEY"
    curl -s -X POST -H "Content-Type: application/json" --data-binary @${FILENAME} https://speech.googleapis.com/v1/speech:recognize?key=YOUR_API_KEY
fi
