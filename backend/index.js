const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.calc_bias_score = functions.database
	.ref("/posts/{id}")
	.onWrite(event => {
		const user_article = event.data.val()
		if (user_article.isScored) {
			return
		}
		var article_obj = JSON.parse(user_article)
		console.log("calculating new post " + event.params.id)
		return event.data.ref.set(article_obj)
	})

