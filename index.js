const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const net = require('net');

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

const sockets = []; // Define sockets array

const connectSocket = () => {
  const server = net.createServer(socket => {
    // Handle socket connection
    console.log('Socket connected.');

    // Push the socket to the array
    sockets.push(socket);

    // Rest of your code (handling messages and events)...
    // Handle errors and events related to the socket connection
    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });

    socket.on('close', () => {
      console.log('Socket connection closed.');
    });
  });

  // Start the server and listen on the specified port
  server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);

    // Handle errors and events related to the socket connection
    server.on('error', (error) => {
      console.error('Server error:', error);
    });

    server.on('close', () => {
      console.log('Server closed.');
    });
  });
};

// Call connectSocket function to initialize sockets array
connectSocket();

const autoreplyCommands = {
 "?quest": {
    message: "Type @warper in the game and look for ~Quest! or simply click this [link!](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=forums&id=5) for more info.",
    image: "https://patcher.elvesro.com/discord/quest.png",
  },
  "?zeny": {
    message: " Now that you are at max level and have decent stats, its time for you to farm gold and collect zeny to buy stats and other essentials that you need on your adventure., click this [link!](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=275) for more info.",
    image: "https://elvesorigin.com/board/uploads/monthly_2024_01/image.thumb.png.cfd7a3e575f3c4b74f892912d593d8d7.png",
  },
  "?tcg": {
    message: "There are several ways to earn TCG., click this [link!](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=282) for more info",
    image: "https://elvesorigin.com/board/uploads/monthly_2024_01/image.png.dbb2b542ae6c5760745377986782b369.png",
  },
"?guide": {
  message: `
**?: for levelling guide click [here](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=273)
**?quest**: Type @warper in the game and look for ~Quest! or click this [link](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=forums&id=5) for more info.
**?warper**: Type @warper in-game.
**?grf**: Custom GRF Installation guide. [Download GRFs here](https://discord.com/channels/1064369380550516777/1069392648613400617).
**?professor**: Hold F1 for Fire Bolt, F2 for Cold Bolt, F3 for Lightning Bolt. [Download AHK Bolt Combo here](https://cdn.discordapp.com/attachments/1069392648613400617/1195354273911939102/Fire_Cold_Light_bolt_AHK.exe?ex=65b3af6b&is=65a13a6b&hm=8b2e74255796f019a8016a7c25315185379f689133eed402efcb06192c33e419&)
**?champion**: Hold F1 Skill Holder: F2 = Asura F3 = Berry F4 = Soul F5 = Fury download the [Asura Strike Spam](https://discord.com/channels/1064369380550516777/1069392648613400617/1195389696503722076)
**?Bloody Branch**: There are several ways to earn Bloody branches in the game, like collecting. Click this [link](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=280) for more info.
**?zeny**: Now that you are at max level and have decent stats, it's time for you to farm gold and collect zeny to buy stats and other essentials that you need on your adventure. Click this [link](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=275) for more info.

Other downloads:
[4rtools](https://cdn.discordapp.com/attachments/1069392648613400617/1184282763273183312/4RTools.zip?ex=65b05245&is=659ddd45&hm=9717f0bf257cfe6be219dfff7b4b29a45cb25e3e12b9063e2c0251602460251d&)
[more downloads](https://discord.com/channels/1064369380550516777/1069392648613400617)`,
  image: "https://elvesorigin.com/board/uploads/monthly_2024_01/image.png.ae79bb042614cc16551e0fe8bb2c1b51.png",
},
  "?professor": {
    message: "Hold F1\n Skill Holder: F1 = Fire Bolt\n F2 = Cold Bolt\n F3 = Lightning Bolt\n download the [AHK Bolt Combo](https://cdn.discordapp.com/attachments/1069392648613400617/1195354273911939102/Fire_Cold_Light_bolt_AHK.exe?ex=65b3af6b&is=65a13a6b&hm=8b2e74255796f019a8016a7c25315185379f689133eed402efcb06192c33e419&) \n Play Combo https://patcher.elvesro.com/discord/professor.webm",
  },

  "?champion": {
    message: "Hold F1\n Skill Holder: F2 = Asura\n F3 = Berry\n F4 = Soul\n F5 = Fury\n download the [Asura Strike Spam](https://discord.com/channels/1064369380550516777/1069392648613400617/1195389696503722076) \n Play Combo https://patcher.elvesro.com/discord/asura.webm",
  },
 "?warper": {
    message: "Type @warper in-game.",
    image: "https://patcher.elvesro.com/discord/quest.png",
  },
  "?grf": {
    message: `**Custom GRF Installation**
To add custom GRF, simply download the grf file you want to use from the link below and place it in your Elves Origin DirectX9 folder.

Click to download: 
[Graymap](https://cdn.discordapp.com/attachments/1069392648613400617/1195351058315227246/graymap.grf?ex=65b3ac6c&is=65a1376c&hm=a3a2b527c8d747c4ac14133830d92da671abd348f49a7c44e34c744a69b86b9d&)
[Big MVP GRF](https://cdn.discordapp.com/attachments/1069392648613400617/1195350866799104000/BigMVP.grf?ex=65b3ac3f&is=65a1373f&hm=c4c784a5a9821a66cbf16ecb35358c5673fad1e552876f2416aa8cb6a0a53baf&)

1. Download the grf you want to use below.
2. Add the grf file in your Elves Origin DirectX9 folder.
3. Find and edit the DATA.INI file in your Elves Origin DirectX9 folder.
4. Copy and Paste the code below.

\`\`\`plaintext
[Data]
0=CUSTOM.grf <---- REPLACE THIS GRF
1=gepard.grf
2=elves_new.grf
3=main.grf
4=color.grf
5=elves.grf
6=data.grf
7=rdata.grf
\`\`\`

Other download:
[4rtools](https://cdn.discordapp.com/attachments/1069392648613400617/1184282763273183312/4RTools.zip?ex=65b05245&is=659ddd45&hm=9717f0bf257cfe6be219dfff7b4b29a45cb25e3e12b9063e2c0251602460251d&)
[more downloads](https://discord.com/channels/1064369380550516777/1069392648613400617)`,
  },
};

bot.on('message', (msg) => {
  // Check if the message is in the 'main' or 'support' channels
  if (!msg.author.bot) {
    console.log(msg.author.username, msg.content);

    // Check if sockets array is not empty before accessing it
    if (sockets.length > 0) {
      // Send the message to the TCP socket
      sockets[0].write(`[${msg.channel.name}] <${msg.author.username}>: ${msg.content}\0`);
    } else {
      console.error('No sockets available.');
    }

    // Check if the message is a command for autoreply
    const command = msg.content.trim();
    if (autoreplyCommands.hasOwnProperty(command)) {
      const autoreply = autoreplyCommands[command];
      
      if (autoreply.message) {
        // Send the message part of the autoreply
        msg.channel.send(autoreply.message);
      }

      if (autoreply.image) {
        // Send the image as a reply
        msg.channel.send({
          files: [autoreply.image],
        });
      }
    }
  }
});

bot.on('message', message => {
  // Check if the message author is not the bot itself
  if (!message.author.bot) {
    // Check if the message contains the word 'download'
    if (message.content.toLowerCase().includes('download')) {
      // Send a message with clickable download links
      message.reply(`Here are the download links:\n
- [Google Drive](https://drive.google.com/file/d/1tDBlyizM9AvdDI-K899WfThWB0MIhbKk/view)
- [Mega Download](https://mega.nz/file/ug0BiayL#NO0hOdidWT7GPRS_mVsXenDjGSHf3zrnDDgmUFgQKAc)
- [MediaFire](https://www.mediafire.com/file/8kz37cahu51fby1/2024-05-01_ElvesRO_DirectX9_(NEW).rar/file)`);
    }
  }
});

bot.on('guildMemberAdd', (member) => {

  // Welcome message parts
  const welcomeMessagePart1 = `Welcome to the server, ${member.user.username}! Here are some commands you can use:
  **?guide**: for levelling guide click [here](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=273)
  **?quest**: Type @warper in the game and look for ~Quest! or click this [link](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=forums&id=5) for more info.
  **?warper**: Type @warper in-game.
  **?grf**: Custom GRF Installation guide. [Download GRFs here](https://discord.com/channels/1064369380550516777/1069392648613400617).
  **?quest**: Type @warper in the game and look for ~Quest! or click this [link](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=forums&id=5) for more info.
  **?warper**: Type @warper in-game.
  **?grf**: Custom GRF Installation guide. [Download GRFs here](https://discord.com/channels/1064369380550516777/1069392648613400617).
  **?professor**: Hold F1 for Fire Bolt, F2 for Cold Bolt, F3 for Lightning Bolt. [Download AHK Bolt Combo here](https://cdn.discordapp.com/attachments/1069392648613400617/1195354273911939102/Fire_Cold_Light_bolt_AHK.exe?ex=65b3af6b&is=65a13a6b&hm=8b2e74255796f019a8016a7c25315185379f689133eed402efcb06192c33e419&)`;

  const welcomeMessagePart2 = `**?champion**: Hold F1 Skill Holder: F2 = Asura F3 = Berry F4 = Soul F5 = Fury download the [Asura Strike Spam](https://discord.com/channels/1064369380550516777/1069392648613400617/1195389696503722076)
  **?Bloody Branch**: There are several ways to earn Bloody branches on the game, like collecting, click this [link!](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=280) for more info
  **?zeny**: Now that you are at max level and have decent stats, its time for you to farm gold and collect zeny to buy stats and other essentials that you need on your adventure., click this [link!](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=275) for more info
  **?tcg**: There are several ways to earn TCG., click this [link!](https://elvesorigin.com/board/index.php?app=forums&module=forums&controller=topic&id=282)
  
  Other download:
  [4rtools](https://cdn.discordapp.com/attachments/1069392648613400617/1184282763273183312/4RTools.zip?ex=65b05245&is=659ddd45&hm=9717f0bf257cfe6be219dfff7b4b29a45cb25e3e12b9063e2c0251602460251d&)
  [more downloads](https://discord.com/channels/1064369380550516777/1069392648613400617)`;

  // Attempt to send welcome messages in parts
  member.send(welcomeMessagePart1)
    .then(() => member.send(welcomeMessagePart2))
    .then(() => console.log('Welcome messages sent successfully'))
    .catch(error => console.error('Error sending welcome messages:', error));
});

bot.on('ready', () => {
  console.log('Bot is ready!', bot.user.username);
});

// Login to Discord with the bot token
bot.login(process.env.BOT_TOKEN);
