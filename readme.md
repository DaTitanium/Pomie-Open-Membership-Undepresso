# P.O.M.U. membership emotes and badge restorer

Youtube with its questionable practices deletes all membership emotes and badges when memberships close, and while restoring the badges are trivial since they just replaced them with the default badges, restoring the emotes is impossible since they're all turned into empty boxes with no information of what they used to be. So, I made this extension to fill in emotes using hardcoded context clues and randomize the rest.

Version 0.8 randomizer is hardcoded but i want to make it customizable in the future

## Update V0.9

- There's now a choice of 12 emote randomizers to fit the mood of the chat which you can choose in real time from the extension popup
- The default randomizer with most variety is for songs, because i tested this mainly on pomu's akiberse MV.
- Interactivity! It's almost like you're watching live! yippee (delulu)

## Quick fix V0.9.1

- noticed live chat badges has also disappeared (few days ago only comment badges are gone)
- live chat badges restored
- added special condition for the last stream where every badge is the 2 years badge

## Installing

I made this as a chrome extension and tested it in Google Chrome and Microsoft Edge but it should be supported by some other browsers that uses chromium, e.g. Opera.

### 1. Click on the "<>Code" button above and download as zip

### 2. Extract the zip file, there should be a single folder inside

### 3. Open your browser's "manage extensions" page (should be a button on the top right)

### 4. Enable the "developer mode" toggle, this will reveal the "Load Unpacked" button

### 5. Click the "Load Unpacked" button

### 6. Select the folder extracted from the zip file. (This folder should contain the manifest.json file if you check through file explorer)

### 7. Enjoy pomu's cuteness without being distracted by empty boxes!

## Additional info

- This extension should run automatically in videos of pomu's channel and not do anything in other videos
- Because of the way youtube loads everything asynchronously, you might need to refresh the page for every pomu video you want to watch
