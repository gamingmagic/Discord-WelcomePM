const { Client, GatewayIntentBits } = require('discord.js');
const net = require('net');

// Create a Discord.js Client with intents
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

// Function to establish the socket connection
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

const sockets = []; // Define the array here

// Attempt to connect to the socket
connectSocket();

bot.on('guildMemberAdd', (member) => {
  console.log('New member:', member.user.username);

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
