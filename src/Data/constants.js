export const telegramChannelName = 'opendictionary1'
// For you Navbar in Links Dynamic Changed
export const createWordButtonLink = 'https://t.me/opendictionary1/4`'
export const ContributeLink =
  'https://github.com/ademsuslu/Dictionary/blob/main/src/Data/dictionary.js'

//Navbar End

// Toast Error Dynamic Message
export const Message = `No results. Please check spelling and read About Us. Happy Searching!`
// Toast Error Dynamic Message  End

// Like And Save BUttons Links
import data from './dictionary'
export const likeLink = `tg://resolve?domain=opendictionary1&post=${data?.telegramPost}`
export const saveLink = `https://t.me/${telegramChannelName}/${data?.telegramPost}`
// Like And Save BUttons Links end


/*This is the telegram group name for the dictionary */
/*This is the link connected to the plus sign on the home page, for adding a word */
