import { Client, GatewayIntentBits, ChannelType } from 'discord.js';
import { config } from 'dotenv';

// Load environment variables
config();

// Create a new client instance with all necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping
    ]
});

// Test the bot setup
client.once('ready', () => {
    console.log('=== BOT READY ===');
    console.log(`Logged in as: ${client.user.tag}`);
    console.log(`Bot ID: ${client.user.id}`);
    console.log(`Intents enabled:`, client.options.intents);
    console.log(`ChannelType.DM value: ${ChannelType.DM}`);
    console.log('==================');
});

// Simple message handler for testing
client.on('messageCreate', (message) => {
    // Ignore messages from bots (including the bot itself) to prevent recursive responses
    if (message.author.bot) {
        console.log('🤖 Ignoring message from bot:', message.author.tag);
        return;
    }

    console.log('=== MESSAGE RECEIVED ===');
    console.log(`Channel Type: ${message.channel.type}`);
    console.log(`Channel Type (numeric): ${message.channel.type}`);
    console.log(`Expected DM Type: ${ChannelType.DM}`);
    console.log(`Is DM: ${message.channel.type === ChannelType.DM}`);
    console.log(`Channel ID: ${message.channel.id}`);
    console.log(`Guild ID: ${message.guild?.id || 'No Guild (DM)'}`);
    console.log(`Author: ${message.author.tag} (${message.author.id})`);
    console.log(`Is Bot: ${message.author.bot}`);
    console.log(`Content: ${message.content}`);
    console.log('========================');

    if (message.channel.type === ChannelType.DM) {
        console.log('✅ DIRECT MESSAGE DETECTED!');
        message.reply('Test: I received your DM!').catch(console.error);
    }
});

// Error handling
client.on('error', error => {
    console.error('Discord client error:', error);
});

// Login
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('DISCORD_TOKEN is not set in your .env file!');
    process.exit(1);
}

client.login(token).catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
}); 