###GH Pages - Resume Template for CodeCore###

This Resume Template created by Brent Vatne with custom styles and media queries. The template gives you a fantastic starting point for your online resume. Just replace Brent's info with your own. If you use this thank Brent for the template.

I also made some changes to Brent's example and added Bootstrap, jQuery and some notes. Implemented the grid system, site is fully responsive and will work on mobile.


####Instructions to Deploy to GH-Pages####

1. Create a new folder and Clone this repo into that folder.
```shell
git clone git@github.com:jzntam/GH-Pages-Resume-Template.git
```

2. Create a new repository on GitHub. Use the following format `username.github.io` as the repo name, where you replace `username` with your GitHub account name. ie. `lordmeowmeow.github.io`

3. Change the content to match your details. Save, add and commit, but dont push. The git origin is currently pointing at the repo on my GitHub account, so we have to change this to point to yours. Again, replace `username` with your `username`.
```shell
git remote remove origin
git remote add origin git@github.com:username/username.github.io.git

#ie. git remote add origin git@github.com:lordmeowmeow/lordmeowmeow.github.io.git


git add .
git commit -m "Commit Message... Changed details..."
git push -u origin master
```

4. Eventhough it looks pretty good as is. Continue to add details and formatting to your heart's content. Or even better, you can completely redesign the site. The site is using google fonts, so you can replace the fonts we have in the link tag.

5. You can visit your GitHub Pages site at `http://username.github.io` (replace `username` with your username). ie. `http://lordmeowmeow.github.io`

Note: If you have any static webpages on GitHub you want to display, you can easily add them to your github.io address. Just ask me later and I'll show you. 


