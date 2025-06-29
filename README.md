# Discord DM Test Bot

A simple Discord chatbot built with Discord.js v14 that captures and logs direct messages (DMs).

## Features

- Captures direct messages sent to the bot
- Logs message details to console (sender, content, timestamp)
- Responds to DMs with a test message
- Uses modern ES modules
- Event-driven architecture with separate event handlers

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a Discord Application:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application
   - Go to the "Bot" section
   - Create a bot and copy the token

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   Then edit `.env` and add your Discord bot token:
   ```
   DISCORD_TOKEN=your_actual_bot_token_here
   ```

4. **Configure Bot Permissions:**
   - In the Discord Developer Portal, go to OAuth2 > URL Generator
   - Select "bot" scope
   - Select these permissions:
     - Send Messages
     - Read Message History
     - Use Slash Commands
   - Use the generated URL to invite the bot to your server

5. **Run the bot:**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

## Usage

1. Start the bot
2. Send a direct message to the bot
3. Check the console output to see the logged message details
4. The bot will respond with "I received your direct message! This is a test response."

## Project Structure

```
├── index.js              # Main bot file
├── events/               # Event handlers
│   └── messageCreate.js  # Handles incoming messages
├── package.json          # Dependencies and scripts
├── env.example          # Environment variables template
└── README.md            # This file
```

## Customization

To add your own logic for processing DMs, edit the `events/messageCreate.js` file. The current implementation:

- Logs message details to console
- Sends a simple acknowledgment reply

You can modify the `execute` function to add your custom processing logic.

## Troubleshooting

- **"DISCORD_TOKEN is not set"**: Make sure you've created a `.env` file with your bot token
- **"Failed to login"**: Check that your bot token is correct and the bot has proper permissions
- **Bot not responding**: Ensure the bot has the necessary intents enabled in the Discord Developer Portal 