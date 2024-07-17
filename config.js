//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "94779062397";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94768211853";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS051OHlnS1BnZ3hSSEpqMTYrV2RpRjNjM3M4Z1pCTTRTTUNqd0lDeThuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHVpOHc2N0E1SEZadllLSG95MXNSL1k4NkMvVnA3NUlVazl1WTVnZzhoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQUJDdWc4UG5laERpWVpRQnVnVktINXB4SmhoWjErZUk3RzNxK2JRc1UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVOWt6Z0tqZ3ZVVHFLcFdDeVc0WlU1eE9Ba1hyY1EzV0I1dFZxb0Ruc1VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKOUNJT3VqazQvbkdzVk1ZYVpsajJYTDZjZ0FEMGIrR00rZFVWOEx0RWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkvUndLWXlieGYvM3U3ZmZjbldObUpNaFc2YSs0b2FWNUVYUU8zN1dWRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lyNGtJY2UyZE1Rc3VDYlljZ1RSODNLd21KbU1PWEpUbWw1RDNlM1RIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienZLdHhBTnQrUmVVTlRPeWJFbVZncnhyNnlvbit1YXM0VkFOWFByNUVHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNKUDhKQ3NYWG11aHdpdmpycThNbmtvSW9BRnB1Q21jM3dkSEUrVHVtOFd3K2c5Q2lzZTVFUTNrQzloT0F2L3ZqOEJ0eXdJOWZOcUlveEJEcDVyY0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiI5alppUzRWZkx3TVFhTWlTd3lsNWM5ZFpZTHVLcnhXVWVubi83bmFjQ1pZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0Qkp3RzI5MFRObUR6SWJlaEE0LTd3IiwicGhvbmVJZCI6IjM3ZmQ2YjI0LWM3YzYtNGMyYS04NGVmLWRlNDZmN2YwNDQ2YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZkdiaUp2K3ovWEJqcW1FeXFoQjdWQVlFZDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnN5RlNYREJJMmxZeHZlbzZFcmtnV1pKdGNzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNNOTUzOEZGIiwibWUiOnsiaWQiOiI5NDc2ODIxMTg1Mzo5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR2F5dVVDRU83NzNMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4WlVYZTZjcHRjcW1rd2l5aXBOclRqeUJnYklVZWIvcWdNOUgyK3V5ampjPSIsImFjY291bnRTaWduYXR1cmUiOiJQVEJtNGd2Nkh4czhad3NDUktmc2JzN0dQQmg5RW54VEpuZjJadHBNanBCZzBtc2g2YnFFZzB1MUhzM0V4cC9TMU96QmdOd29SdTQ2K2NaMmN4VThBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWVNrMDY4cGdQR0ExWGxFKzU0bDl6OE95MVdDVGptdlJVY3FZMXVYaXZURkkwM0tVb1NhQktDR1BkaEIwVFV5aXkxd1h5TjRsek5IU2NYWUVqdHBRREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2ODIxMTg1Mzo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNXVkYzdW5LYlhLcHBNSXNvcVRhMDQ4Z1lHeUZIbS82b0RQUjl2cnNvNDMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExODc4MzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDNNIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
