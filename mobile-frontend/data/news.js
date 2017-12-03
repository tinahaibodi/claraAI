// note return { results : { bills : VAL} } from api from transport layer
const news = [
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "0",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "1",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "2",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "3",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "4",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "5",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "6",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
            {
                "title": "Michael Flynn Pleads Guilty to Lying to the F.B.I. and Will Cooperate With Russia Inquiry",
                "author": "Michael D. Shear and Adam Goldman",
                "source": "NYTimes",
                "score": 7,
                "uid": "8",
                "url": "https://www.nytimes.com/2017/12/01/us/politics/michael-flynn-guilty-russia-investigation.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news",
                "image_url": "https://static01.nyt.com/images/2017/12/02/us/politics/02dc-trumpassess/merlin_130632518_83980073-b1f1-4621-8b09-43e667e6ce56-master768.jpg",
                "isScored": true,
                "feedback": false

            },
        ];

export default news;